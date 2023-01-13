import mongoose from "mongoose";
import { config } from "../config/config.js";

export const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(config.mongoURI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

// mongoose.set("strictQuery", false);
// That means that all the fields will be saved in the database, even if some of them are not specified in the Schema model.
