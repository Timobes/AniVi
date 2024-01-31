const db = require('../bd')
const fs = require('fs')
const {decode} = require("jsonwebtoken");
const jwt = require("jsonwebtoken");

class animeController {
    async getAnime(req, res) {
        try{
            const id = req.params.id
            const anime = await db.query('SELECT * FROM anime_table WHERE anime_id = $1', [id])
            res.json(anime.rows)
        } catch (e) {
            console.log(e)
        }
    }
    async getAllAnime(req, res) {
        try {
            const anime = await db.query('SELECT * FROM anime_table')
            res.json(anime.rows)
        } catch (e) {
            console.log(e)
        }
    }

    async getEpAnime(req, res) {
        try{
            const id = req.params.id
            const anime = await db.query("SELECT anime_episode_name FROM anime_episode WHERE anime_id = $1", [id])

            res.json(anime.rows)
        }catch (e) {
            console.log(e)
        }
    }

    async addEpAnime(req, res) {
        let anime_episode_name = req.file.originalname
        anime_episode_name = anime_episode_name.replace("_", "/")

        const {anime_episode_number, anime_id} = req.body

        const anime = await db.query('INSERT INTO anime_episode(anime_episode_name, anime_episode_number, anime_id) VALUES ($1, $2, $3) RETURNING  *', [anime_episode_name, anime_episode_number, anime_id])
        // res.json({
        //     url: `localhost:8080/uploads/${req.file.originalname}`,
        // })
        console.log(anime.rows)
        res.json('Файл отправлен')
    }

    async createAnime(req, res) {
        try{
            const {anime_title_rus, anime_title_eng, anime_title_jap, description, years, poster_url} = req.body
            const anime = await db.query('INSERT INTO anime_table(anime_title_rus, anime_title_eng, anime_title_jap, description, years, poster_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [anime_title_rus, anime_title_eng, anime_title_jap, description, years, poster_url])

            try {
                if (!fs.existsSync(`uploads/anime/${anime_title_eng}`)) {
                    fs.mkdirSync(`uploads/anime/${anime_title_eng}`)
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
            const {} = req.body
            const anime = await db.query()
            res.json(anime.rows)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new animeController