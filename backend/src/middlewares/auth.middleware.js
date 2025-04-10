import jwt from 'jsonwebtoken';
import { db } from '../libs/db.js';

export const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    const token = authHeader.split(' ')[1];

    try {
        // Check if the token is blacklisted
        const blacklistedToken = await db.tokenBlacklist.findUnique({
            where: { token },
        });

        if (blacklistedToken) {
            return res.status(401).json({ error: 'Token has been invalidated.' });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        next();
    } catch (error) {
        console.error('Token verification failed:', error.message);
        res.status(400).json({ error: 'Invalid or expired token.' });
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