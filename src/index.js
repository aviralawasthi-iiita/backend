// require('dotenv').config({path: './env'})
import dotevn from "dotenv"
import express from "express"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotevn.config({
    path: './env'
})

connectDB().then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(` server runnig at port : ${process.env.PORT}`);
    })
})
.catch((eerr) => {
    console.log("mongo db connection failed", eerr);
});


// const app = express();
// ;( async () =>{
//     try{
//         mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
//         app.on("error",(error) =>{
//             console.log( "error" , error);
//             throw error;
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`app listening on ${PORT}`);
//         });
        
//     }
//     catch(error){
//         console.error(
//             "Eroor",error
//         )
//         throw error
//     }
// })()