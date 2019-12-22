const express = require("express");
const redis = require("redis");
const bodyParser = require("body-parser");
const getStarship = require('./getStarship')
const getInfo = require('./getInfo')
const getName = require('./getName')


const port = process.env.PORT || 3000

const redis_client = redis.createClient()

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.post('/starships', (req, res) =>{
    redis_client.keys('*', async (err, resp) =>{
         if (resp.length <= 0){
            res.send('You have no ships in the database moron')
        }
        res.json(resp)
    }) 
})

app.post('/starships/:name', async (req, res) => {
    redis_client.get(req.params.name, async (err, resp) => {
        const respuesta = JSON.parse(resp)
        const response = respuesta
        if (response === null) {
            res.send("Esa nave no existe inculto de mierda")
        }
        console.log(response)
        res.json(response)
    })
    
})


app.post('/starships/:name/:info', async (req, res) => {
    const informacion = req.params.info
    redis_client.get(req.params.name, async (err, resp) => {
        const respuesta = JSON.parse(resp)
        const response = respuesta[informacion]
        if (response === undefined) {
            res.send("Qué te fumaste? has visto star wars alguna vez en tu vida?")
        }
        res.json(respuesta[informacion])
        
    })
    
})

app.get('/starships', async (req, res) =>{
    
    const results = await getStarship()
    const StarshipsInfo = getInfo(results)
    const names = getName(results)
    for (i = 0; i <= names.length - 1; i++){
        console.log(names[i])
        redis_client.setex(names[i], 80600, JSON.stringify(StarshipsInfo[names[i]]))

    }
    res.send('Database succesfully created, proceed to check for the information with method POST and check for particular ships using /(name of the ship)')
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}!`)
})


