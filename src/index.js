// require('dotenv').config();


import dotenv from 'dotenv'
import connectDB from './db/index.js'
import { app } from './app.js'

dotenv.config({
    path: '../.env',
})

connectDB()
.then(()=>{

   app.on("error", (err)=>{
          console.log("Error" , err)
          throw err     
   })

    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port: ${process.env.PORT}`)
    })
})
.catch(err =>{
    console.log("MongoDb connection Faild !!" , err)
})



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


