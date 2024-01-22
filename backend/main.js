const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 8080

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

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

app.use(express.json())

app.get('/',(req, res) =>{
    res.send('Home')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

