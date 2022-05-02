const express = require('express')

const Router = express.Router()

const cors =require("cors")

const User = require("../models/User")

const Joi = require("joi")

const schema = Joi.object({
    name:Joi.string().optional(),
    gender:Joi.string().optional(),                                                                                                                            
    dob:Joi.string().optional(),
    bloodgroup:Joi.string().optional()
})


Router.use(cors())

process.env.SECRET_KEY ='secret'


//update the user
Router.put("/:id",(req,res)=>{
       
    const reqData ={
        name:req.body.name,
        gender:req.body.gender,
        dob:req.body.dob,
        bloodgroup:req.body.bloodgroup,
    }
    const {error} = schema.validate(reqData )
        if(error){
           res.send(error)
        }else
        User.update(reqData,{
            where:{id:req.params.id}
        }).then(()=> res.send("Data Updated Sucessfully!!!..."))
    
    })
    
    

//get single user details
Router.get("/:id",(req,res)=>{
    User.findOne({
        where:{
            id:req.params.id
        }
    }).then(test => res.send(test))
 })
 


//post method  of the user

Router.post("/",(req,res)=>{
    
const userdata ={
    name:req.body.name,
    gender:req.body.gender,
    dob:req.body.dob,
    bloodgroup:req.body.bloodgroup,
}
    const {error} = schema.validate(userdata)
    if(error){
       res.send(error)
    }else
    User.create(userdata).then(()=>res.send("Data Saved sucessfully!!!"))
     
})



module.exports = Router