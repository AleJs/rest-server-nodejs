const { Router } = require('express');
const { check,validationResult } = require('express-validator');

const {rolValid, emailDb} = require('../helpers/db-validators')


const valid = require('../middleware/valid-field')

const { 
  getUsuarios, 
  deleteUsuarios, 
  putUsuarios, 
  postUsuarios } = require('../controllers/usuarios.controllers')

const router = Router();

router.get('/', getUsuarios);

router.put('/:id', putUsuarios);

router.post('/',[
    // NO FUNCIONA TO - DO 
    check('password').isLength({ min: '5' }).withMessage('must be at least 5 chars long'),
    check('name','this nombre not is valid').not().isEmpty(),
    check('email').custom((email )=>emailDb(email )),
    check('rol').custom((rol )=>rolValid(rol )), valid
  ],postUsuarios);

router.delete('/', deleteUsuarios);





module.exports = router;