const Router = require('express')
const userRouter = new Router()

const userController = require('../controller/userController')

userRouter.get('/', userController.getUsers)

userRouter.get('/:id', userController.getUser)

module.exports = userRouter