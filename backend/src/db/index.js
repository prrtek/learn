import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    console.log(
      `\n DB connected |||||| DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
