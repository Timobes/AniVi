const db = require('../bd')

class filterController {
    async getTagsAnime(req, res) {
        const name = req.params.query
        const filter = await db.query("SELECT * FROM anime_table JOIN anime_genre ON anime_table.anime_id = anime_genre.anime_id JOIN genre ON anime_genre.genre_id = genre.genre_id WHERE genre.name = $1", [name])
        res.json(filter.rows)
    }
}

module.exports = new filterController