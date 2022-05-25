const {Schema, model} = require('mongoose');


const UsuarioSchema = Schema({
    email: {
        type:String,
        required: [true, 'email is required'],
        unique:true
    },
    name:{
        type:String,
        required:[true,'name is required']
    },
    password: {
        type:String,
        required: [true, 'password is required'],
    },
    
    img: {
        type:String,
    },
    rol: {
        type:String,
        required: true,
        enum:['ADMIN_ROL', 'USER_ROL']

    },
    state:{
        type:Boolean,
        default:true
    },
    google:{
        type:Boolean,
        default:false
    }
})

UsuarioSchema.methods.toJSON = function() {
    const {__v, password, ...usuario} = this.toObject();
    return usuario
};

module.exports = model('User', UsuarioSchema);