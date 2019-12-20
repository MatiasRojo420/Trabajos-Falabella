const axios = require('axios')
const bodyParser = require('body-parser')

const getStarships = async (req, res) => {
    const response = await axios('https://swapi.co/api/starships/')
    const { results } = response.data;

    return results
}

module.exports = getStarships