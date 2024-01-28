const db = require('../bd')

class UserController {
    async getUser(req, res) {
        try{
            const user = await db.query('select * from users')
        } catch (e) {
            console.log(e)
        }
    }
    async getUsers(req, res) {
        try {
            const user = await db.query('select * from users')
            res.json(user.rows)
        } catch (e) {
            console.log(e)
        }
    }
    async createUser(req, res) {
        try {

        } catch (e) {
            console.log(e)
        }
    }
    async deleteUser(req, res) {
        try {

        } catch (e) {
            console.log(e)
        }
    }
    async updateUser(req, res) {
        try {

        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new UserController




