const UserController = require('../../controllers/UserController/User')
const Router = require('express').Router();

Router.post('/register',UserController.Register)

module.exports = Router