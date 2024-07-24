const UserController = require('../../controllers/UserController/User')
const Router = require('express').Router();

Router.post('/register',UserController.Register)
Router.post('/login',UserController.Login)
module.exports = Router