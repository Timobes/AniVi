const express = require('express')
const app = express()

const {response, json} = require("express");
const cors = require('cors')
const mainRouter = require('./router/mainRouter')
const bodyParser = require('body-parser')

const port = 8080

app.use(express.static("uploads"))
app.use(cors())
app.use(express.json())

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
        allowedHeaders: [
            "set-cookie",
            "Content-Type",
            "Access-Control-Allow-Origin",
            "Access-Control-Allow-Credentials",
        ],
    })
);

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use('/api', mainRouter)

app.get('/', function (req, res){
    res.send('<h1>AniVi backend!</h1>')
})

app.listen(port, console.log(`Бэк работает на порту ${port}`))

