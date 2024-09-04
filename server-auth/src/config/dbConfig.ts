import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config({ path: "../../../.env" });

const connectDB_Mongo = async () => {
  try {
    const mongoDBUsername = process.env.MONGO_DB_USERNAME;
    const mongoDBPassword = process.env.MONGO_DB_PASSWORD;
    const mongoDBUrl = process.env.MONGO_DB_URL;

    const mongoUrl = mongoDBUrl
      ?.replace("<db_username>", mongoDBUsername || "")
      .replace("<db_password>", mongoDBPassword || "");

    const connect = await mongoose.connect(mongoUrl || "", {});
    console.log(`MongoDB connected ${connect.Collection.name}`);
  } catch (error: any) {
    console.error(error.message);
    process.exit(1);
  }
};

export { connectDB_Mongo };
