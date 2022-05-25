const mongoose = require('mongoose');

const dbConnection = async() => {


    try {
        
        await mongoose.connect(process.env.MONGODB)
        console.log('base de datos online')
    } catch (error) {
        
        console.log(error);
    }

}

module.exports = {dbConnection};