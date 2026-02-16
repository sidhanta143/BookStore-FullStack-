
import user from "../model/user.js";
export const signup=(req,res)=>{
    try{
const {Fullname,email,password,conform_password}=req.body;

const user=user.findOne({email})
if(user){
    return res.status(400).json({message:"user already registred..!"});

  

}
  const createduser=new user({
        Fullname,
        email,
        password,
        conform_password
    })
    createduser.save();
    res.status(201).json({message:"Internal server error..!"});
    }
    catch(error){

    }
}

