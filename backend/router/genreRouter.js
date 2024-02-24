const Router = require('express')
const genreRouter = new Router()

const genreController = require('../controller/genreController')

// Все жанры
genreRouter.get('/', genreController.getAllgenre)

genreRouter.get('/:id', genreController.getGenreId)

genreRouter.get('/anime/:id', genreController.getAnimegenre)

genreRouter.post('/add', genreController.addGenre)

module.exports = genreRouter