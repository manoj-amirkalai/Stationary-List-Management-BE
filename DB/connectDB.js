import mongoose from "mongoose";

const connectDB = async () => {
  // Check if MONGO_URI is defined in the environment variables

  if (!process.env.MONGO_URI) {
    console.error("MONGO_URI is not defined in the environment variables");
    process.exit(1); // Exit the process with failure
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the process with failure , to stop the server when facing issue in connect DB
  }
};

export default connectDB;
