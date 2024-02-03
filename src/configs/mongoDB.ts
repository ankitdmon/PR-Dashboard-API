import mongoose from "mongoose";

import { DB_URI } from ".";

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("Database connected!!");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
};
export default connectDB;
