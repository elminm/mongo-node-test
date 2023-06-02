const express = require('express');
const { userController } = require('../controllers/userController');
const { body } = require('express-validator');
const { validate } = require('../middleware/validation');
const userRoutes = express.Router();



userRoutes.get('/', userController.getAll)
userRoutes.get('/:id', userController.getById)
userRoutes.post('/', body('name').notEmpty().withMessage('Must FIll'), validate, userController.add)
userRoutes.delete('/:id', userController.deleteById)
userRoutes.put('/:id', userController.update)


module.exports = {
    userRoutes
}