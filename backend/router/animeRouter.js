const Router = require('express')
const animeRouter = new Router()
const tokenMeddleware = require('../meddleware/tokenMeddleware')
const animeController = require('../controller/animeController')
const upload = require('../meddleware/fileUpload')

// Вывод всех аниме
animeRouter.get('/', animeController.getAllAnime)

// Вывод аниме по id
animeRouter.get('/:id', animeController.getAnime)

// Поиск серии по id аниме
animeRouter.get('/ep/:id', animeController.getEpAnime)

// Добавить серию
animeRouter.post('/series', upload.single('anime'), tokenMeddleware, animeController.addEpAnime)
// Создание аниме
animeRouter.post('/', tokenMeddleware, animeController.createAnime)

// Обновление аниме по id
animeRouter.put('/:id', tokenMeddleware, animeController.updateAnime)

// Удалить аниме по id
animeRouter.delete('/:id', tokenMeddleware, animeController.deleteAnime)

module.exports = animeRouter