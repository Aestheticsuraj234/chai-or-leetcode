import { db } from '../libs/db.js';
import cron from 'node-cron';

// Schedule a cleanup task to remove expired tokens every day
cron.schedule('0 0 * * *', async () => {
    try {
        const now = new Date();
        await db.tokenBlacklist.deleteMany({
            where: { expiresAt: { lt: now } }, // Delete tokens that have expired
        });
        console.log('Expired tokens cleaned up successfully.');
    } catch (error) {
        console.error('Error cleaning up expired tokens:', error.message);
    }
});