const Router = require('express')
const reviewRouter = new Router()
const reviewController = require('../controller/reviewController')

reviewRouter.get('/', reviewController.getReview)

reviewRouter.get('/:id', reviewController.getOneReview)

reviewRouter.post('/:id', reviewController.createRev)

reviewRouter.delete('/:id', reviewController.delRev)


module.exports = reviewRouter