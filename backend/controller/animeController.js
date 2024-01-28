const db = require('../bd')
const fs = require('fs')

class animeController {
    async getAnime(req, res) {
        try{
            const id = req.params.id
            const anime = await db.query('SELECT * FROM anime WHERE id = $1', [id])
            res.json(anime.rows)
        } catch (e) {
            console.log(e)
        }
    }
    async getAllAnime(req, res) {
        try {
            const anime = await db.query('SELECT * FROM anime')
            res.json(anime.rows)
        } catch (e) {
            console.log(e)
        }
    }

    async getEpAnime(req, res) {

    }

    async addEpAnime(req, res) {
        console.log(req.file)

        const namesFile = req.file.originalname
        const anime = await db.query('INSERT INTO files(url) VALUES ($1)', [namesFile])
        // res.json({
        //     url: `localhost:8080/uploads/${req.file.originalname}`,
        // })
        res.json('Файл отправлен')
    }

    async createAnime(req, res) {
        try{
            const {animeurl, studiourl, name, altername, description, rating, numEp, dates} = req.body
            const anime = await db.query('INSERT INTO anime(animeurl, studiourl, name, altername, description, rating, numEp, dates) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [animeurl, studiourl, name, altername, description, rating, numEp, dates])

            try {
                if (!fs.existsSync(`uploads/anime/${name}`)) {
                    fs.mkdirSync(`uploads/anime/${name}`)
                }
            } catch (err) {
                console.error(err);
            }

            res.json(anime.rows)
        } catch (e) {
            console.log(e)
        }
    }
    async deleteAnime(req, res) {
        try{
            const id = req.params.id
            const anime = await db.query('')
            res.json(`Аниме с id = ${id} удалено`)
        } catch (e) {
            console.log(e)
        }
    }
    async updateAnime(req, res) {
        try{
            const id = req.params.id
            const {animeurl, studiourl, name, altername, description, rating, numEp, dates} = req.body
            const anime = await db.query()
            res.json(anime.rows)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new animeController