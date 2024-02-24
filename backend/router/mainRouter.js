const Router = require('express')
const router = new Router()

const userRouter = require('../router/usersRouter')
const animeRouter = require('../router/animeRouter')
const authRouter = require('../router/authRouter')
const genreRouter = require('../router/genreRouter')
const filterRouter = require('../router/filterRouter')

router.use('/users', userRouter)
router.use('/anime', animeRouter)
router.use('/auth', authRouter)
router.use('/genre', genreRouter)
router.use('/filter', filterRouter)

module.exports = router