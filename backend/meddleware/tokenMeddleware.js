const bd = require('../bd')

module.exports = async function(req, res, next)  {
    const token = req.headers.token
    console.log(token)

    const ReToken = await bd.query('SELECT email FROM users WHERE passwords = $1', [token])
    console.log(ReToken.rows)
    if(ReToken.rows.length > 0) {
        // res.json('text')
        next()
    } else {
        res.json({message: "Неверный токен!"})
    }
}

