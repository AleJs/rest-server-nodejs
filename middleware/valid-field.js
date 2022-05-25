const { validationResult } = require('express-validator');

const valid = (req, res,next) => {
    const err = validationResult(req)

    if (!err.isEmpty()) {

       return res.status(400).json( err )
     }

     else{
       next()
     }
   }

   module.exports= valid
   