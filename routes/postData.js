const { Router } = require('express');
const {updateData} = require('../controllers/postData');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post('/updateData',[
    check('disp', 'El dispositivo es obligatorio').not().isEmpty(),
    check('action','La acción es obligatoria').not().isEmpty(),
    validarCampos
],updateData);

module.exports = router;