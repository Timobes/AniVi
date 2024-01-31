const db = require('../bd')
const jwt = require('jsonwebtoken')
const {decode} = require("jsonwebtoken");

class authController {
    async reg(req, res) {
        try{
            const {email, passwords, username} = req.body
            console.log(email, passwords, username)
            const JWTpass = jwt.sign({username: username, password: passwords}, "secret", )
            console.log(JWTpass)

            const users = await db.query(`INSERT INTO users (email, passwords, username) VALUES ($1, $2, $3) RETURNING *`, [email, JWTpass, username])
            console.log(users.rows)

            res.json({message: 'Вы создали акк!', token: JWTpass})
        } catch (e) {
            console.log(e)
        }
    }

    async auth(req, res) {
        try{
            const {email, passwords} = req.body

            const pass = await db.query("SELECT passwords FROM users WHERE email = $1", [email])
            const DEJWT = jwt.decode(pass.rows[0].passwords)

            if(passwords == DEJWT.password) {
                const users = await db.query("SELECT * FROM users WHERE email = $1 AND passwords = $2", [email, pass.rows[0].passwords])

                if(users.rows) {
                    res.json(pass.rows[0].passwords)
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

    async profile(req, res){
        const token = req.headers.token

        const users = await db.query("SELECT * FROM users WHERE passwords = $1", [token])
        res.json(users.rows)
    }

    async logout(req, res) {
        try{

        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new authController