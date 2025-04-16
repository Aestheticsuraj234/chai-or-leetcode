import jwt from 'jsonwebtoken';
import { db } from '../libs/db.js';

export const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwt; // Assuming the cookie name is 'jwt'

    if (!token) {
      return res.status(401).json({ message: "Unauthorized - No Token Provided" });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ message: "Unauthorized - Invalid Token" });
    }

    const user = await db.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        image: true,
        name: true,
        email: true,
        role: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error in authenticate middleware:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const checkAdmin = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const user = await db.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });

    if (!user || user.role !== 'ADMIN') {
      return res.status(403).json({ error: 'Access denied. User is not an admin.' });
    }

    next();
  } catch (error) {
    console.error("Error in checkAdmin middleware:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
