// require('dotenv').config();


import dotenv from 'dotenv'
import connectDB from './db/index.js'

dotenv.config({
    path: '../.env',
})

connectDB()



/*
import mongoose  from "mongoose";
import { DB_Name } from "./constant.js";

import express from "express"
 const app = express();

(async()=>{
     try {
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
         app.on("error", (error)=>{
            console.log("Error:",error)
            throw error
         })

         app.listen(process.env.PORT, ()=>{
            console.log(`App is listen on port ${process.env.PORT}`)
         })

     } catch (error) {
        console.error("Error: ",error)
        throw error
     }
})()  /*IIF(immediatly invoked function) */


