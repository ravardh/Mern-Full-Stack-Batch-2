import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const C = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected", C.connection.host);
  } catch (e) {
    console.log("DB Connection Error ", e.message);
    process.exit(1);
  }
};

export default connectDB;