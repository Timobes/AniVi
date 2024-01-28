const Router = require('express')
const authRouter = new Router()

const authController = require('../controller/authController')

// Создать акк
authRouter.post('/reg', authController.reg)

// Войти в акк
authRouter.post('/log', authController.auth)


// Верификация

module.exports = authRouter