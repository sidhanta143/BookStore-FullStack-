import  cors from "cors"
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

import user from "./Route/user.router.js"


dotenv.config()



const app = express()
const port = process.env.PORT || 4000
const UI=process.env.MongooseUri;

try{
mongoose.connect(UI,{
   useNewUrlParser: true,
  useUnifiedTopology: true
});
console.log("Connected to the mongodb..!");

}
catch(error){
  console.log("Error:",error);
  

}
app.use('/user',user);
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

