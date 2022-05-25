const { response } = require('express');
const bcryptjs = require('bcryptjs')

const User = require('../models/user');
const { emailDb } = require('../helpers/db-validators');

const getUsuarios = (req, res = response) => {
    const { q, name } = req.query
    res.json({
        msg: 'get Api',
        q,
        name
    })

}

const putUsuarios = (req, res = response) => {
    const { id } = req.params

    res.json({
        msg: 'put Api',
        id
    })

}

const postUsuarios = async (req, res = response) => {
   
    const { name, password, email, rol, google } = req.body
    const usuario = new User({ name, email, password, rol, google })
 
// verificar correo
//   emailDb(email, res)
//encriptar contraseça
    const salt = bcryptjs.genSaltSync(10);
    usuario.password = bcryptjs.hashSync(password, salt)
 

    //save db
    await usuario.save();

    res.json({
        msg: 'save post pefect',
        usuario
        
    })

}
const deleteUsuarios = (req, res = response) => {

    res.json({
        msg: 'delete Api'
    })

}


module.exports = {
    getUsuarios,
    putUsuarios,
    postUsuarios,
    deleteUsuarios
}