const db = require('../bd')

class genreController {
    async getAllgenre(req, res) {
        const genre = await db.query("SELECT * FROM genre")
        res.json(genre.rows)
    }

    async getGenreId(req, res) {
        const [id] = req.params.id
        const genre = await db.query("SELECT * FROM genre WHERE genre_id = $1", [id])

        res.json(genre.rows)
    }

    async getAnimegenre(req, res) {
        const [id] = req.params.id
        const genre = await db.query("SELECT g.name FROM anime_genre ag JOIN genre g ON ag.genre_id = g.genre_id\n WHERE ag.anime_id = $1", [id])

        res.json(genre.rows)
    }

    async creategenre(req, res) {
        const {} = req.body
        const genre = await db.query("")

        res.json(genre.rows)
    }
}

module.exports = new genreController