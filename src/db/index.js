


import mongoose from "mongoose";
import { DB_Name } from "../constant.js";

const connectDB = async ()=>{
    try {
          const connectionINstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
          console.log(`\n MongoDB connected !! DB host:${connectionINstance.connection.host}`)
          

    } catch (error) {
        console.log("MongoDB connection Faild ", error)
        process.exit(1)
    }
}

export default connectDB;