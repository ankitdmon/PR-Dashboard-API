import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 5001;
export const DB_URI = process.env.MONGODB_URI || "";
