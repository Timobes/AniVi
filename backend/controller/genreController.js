const db = require('../bd')
class genreController {
    async getAllgenre(req, res) {
        const genre = await db.query("SELECT * FROM genre")
        res.json(genre.rows)
    }

    async getGenreId(req, res) {
        const id = req.params.id
        const genre = await db.query("SELECT * FROM genre WHERE genre_id = $1", [id])

        res.json(genre.rows)
    }

    async getAnimegenre(req, res) {
        try {
            const id = req.params.id
            const genre = await db.query("SELECT g.name FROM anime_genre JOIN genre g ON anime_genre.genre_id = g.genre_id WHERE anime_genre.anime_id = $1", [id])
            res.json(genre.rows)
        } catch (e) {
            console.log(e)
            res.json('Error')
        }
    }

    async addGenre(req, res) {
        const {genreID, animeID} = req.body
        const genre = await db.query("INSERT INTO anime_genre(genre_id, anime_id) VALUES ($1, $2) RETURNING *", [genreID, animeID])

        res.json(genre.rows)
    }
}

module.exports = new genreController