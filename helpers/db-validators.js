const role = require('../models/role')
const User = require('../models/user')

const rolValid = async (rol='' )=>{
      
    const rolExist = await role.findOne({rol})
  
    if (!rolExist){
      throw new Error (`The rol: ${rol}role not found in database`)
    }
}

const emailDb = async (  email= '' ) =>{
    const existEmail = await User.findOne({email})
  

    if (existEmail){
        throw new Error (`The Email: ${existEmail.email } email already exist in database`)
      }

    // if(existEmail){
    //        return res.status(400).json({
    //            msg: "this email already exist"
    //        })
    //    }    
}

module.exports= { rolValid, emailDb}