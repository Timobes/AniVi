const Router = require('express')
const userRouter = new Router()

const userController = require('../controller/userController')

userRouter.get('/', userController.getUsers)

module.exports = userRouter