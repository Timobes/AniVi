const db = require('../bd')

class reviewController {
    async getReview(req, res) {
        try {
            const rev = await db.query('SELECT * FROM review')
            res.json(rev.rows)
        } catch (e) {
            console.log(e)
        }
    }

    async getOneReview(req, res) {
        try {
            const id = req.params.id
            const rev = await db.query('SELECT review.review_id, review.anime_id, review.rewiew_text, review.dates, users.username, users.user_id FROM review INNER JOIN users ON review.user_id = users.user_id WHERE anime_id = $1 ORDER BY review_id DESC', [id])
            res.json(rev.rows)
        } catch (e) {
            console.log(e)
        }
    }

    async createRev(req, res) {
        try {
            const animeid = req.params.id
            const {userid, text, dates} = req.body
            console.log(req.body)

            const rev = await db.query('INSERT INTO review(user_id, anime_id, rewiew_text, dates) VALUES ($1, $2, $3, $4) RETURNING *', [userid, animeid, text, dates])
            res.json(rev.rows)
        } catch (e) {
            console.log(e)
        }
    }

    async delRev(req, res) {
        try {
            const id = req.params.id
            const rev = await db.query('DELETE FROM review WHERE review_id = $1', [id])

            res.json(rev.rows)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new reviewController