const UserController = require('../../controllers/UserController/User')
const Router = require('express').Router();
const authMiddleware = require('../../middleware/authMiddleware')
Router.post('/register',UserController.Register)
Router.delete('/:id',UserController.DeleteUser)
Router.post('/login',UserController.Login)
Router.get("/", authMiddleware, UserController.getUserInfo);
Router.get("/allUser",UserController.getAllUser);
module.exports = Router