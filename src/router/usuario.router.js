const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller")

router.get('/findById:id', usuarioController.findUserByIdController);
router.get('/findAll', usuarioController.findAllUsersController);

router.post('/create', usuarioController.createUserController);
router.post('/addAddres/:id', usuarioController.addUserAddresController);
router.post('/addFavProduct/:id', usuarioController.addUserAddresController);

router.put('/update/:id', usuarioController.updateUserController);

router.delete('/remove/:id', usuarioController.removeUserController);
router.delete('/removeAdress', usuarioController.removeUserAddresController);
router.delete('/removeFavProduct', usuarioController.removeUserFavProduct);

module.exports = router