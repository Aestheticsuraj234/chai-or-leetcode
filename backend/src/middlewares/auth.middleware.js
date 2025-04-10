import jwt from 'jsonwebtoken';
import { db } from '../libs/db.js';

export const authenticate = (req, res, next) => {
    // Extract the token from the Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    // Extract the token
    const token = authHeader.split(' ')[1];

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach the decoded user information to the request object
        req.user = decoded;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.error('Token verification failed:', error.message);
        return res.status(400).json({ error: 'Invalid or expired token.' });
    }
};


export const checkAdmin = async(req, res, next) => {
//    check from the database if the user is admin
    const userId = req.user.id;

    const user = await db.user.findUnique({ where: { id: userId } });

    console.log(user);
    if (user.role !== 'ADMIN') {
        return res.status(403).json({ error: 'Access denied. User is not an admin.' });
    }

    next();
};