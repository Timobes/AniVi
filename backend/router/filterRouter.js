const Router = require('express')
const filterRouter = new Router()

const filterController = require('../controller/filterController')

// Вывести все аниме с таким тегом
filterRouter.get('/tags/:query', filterController.getTagsAnime)


module.exports = filterRouter