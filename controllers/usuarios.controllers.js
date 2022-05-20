const { response } = require('express');

const getUsuarios = (req, res = response) => {
    const {q,name } = req.query
    res.json({
        msg: 'get Api',
        q,
        name
    })

}

const putUsuarios = (req, res = response) => {
   const {id}= req.params
  
    res.json({
        msg: 'put Api',
        id
    })

}

const postUsuarios = (req, res = response) => {
        body = req.body
        console.log(body)
        res.json({
            msg: 'post Api'
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