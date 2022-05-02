const Sequelize=require('sequelize')
const db = require("../database/db")
module.exports=db.sequelize.define(
    'details',
    {
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
         },
        name:{
            type:Sequelize.STRING
        },
        gender:
          {
           type:Sequelize.STRING 
         },
        dob :{
          type:Sequelize.STRING
         },
         bloodgroup:{
             type:Sequelize.STRING
         },
        
    },{
        timestamps:false
    }
)
