import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log("JWT Secret:", process.env.JWT_SECRET);
    console.log("MongoDB URI:", process.env.MONGO_URI);
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
    process.exit(1); // exit process with failure, 0 for success
  }
};
