const db = require('../bd')
const jwt = require('jsonwebtoken')
const {decode} = require("jsonwebtoken");

class authController {
    async reg(req, res) {
        try{
            const {username, email, passwords} = req.body
            console.log(email, passwords)

            const JWTpass = jwt.sign({password: passwords}, "secret", )
            console.log(JWTpass)

            const users = await db.query('INSERT INTO users(username, email, passwords) VALUES ($1, $2, $3)', [username, email, JWTpass])

            res.json('Вы создали акк!', JWTpass)
        } catch (e) {
            console.log(e)
        }
    }

    async auth(req, res, next) {
        try{
            const {email, passwords} = req.body

            const pass = await db.query("SELECT passwords FROM users WHERE email = $1", [email])
            const DEJWT = jwt.decode(pass.rows[0].passwords)

            if(passwords == DEJWT.password) {
                const users = await db.query("SELECT * FROM users WHERE email = $1 AND passwords = $2", [email, pass.rows[0].passwords])

                if(users.rows) {
                    res.json({"token": pass.rows[0].passwords})
                } else {
                    res.json('Пользователя нет')
                }
            } else {
                res.json('Неправильный пароль!')
            }
        } catch (e) {
            console.log(e)
            res.json('Ошибка')
        }
    }

    async logout(req, res) {
        try{

        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new authController