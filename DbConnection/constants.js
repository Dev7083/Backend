import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
export const MONGODB_URI = process.env.MONGODB_URI;