const axios = require('axios')
const getStarship = require('../../src/getStarship')
//jest.mock('axios')

describe('getStarship', () => {
    const resp = {
        data: {
            results: [
                {
                    name: 'Sentinel-class landing craft',
                    model: 'Sentinel-class landing craft',
                    manufacturer: 'Sienar Fleet Systems, Cyngus Spaceworks',
                    cost_in_credits: '240000',
                    length: '38',
                    max_atmosphering_speed: '1000',
                    crew: '5',
                    passengers: '75',
                    cargo_capacity: '180000',
                    consumables: '1 month',
                    hyperdrive_rating: '1.0',
                    MGLT: '70',
                    starship_class: 'landing craft',
                    pilots: [],
                    films: [ 'https://swapi.co/api/films/1/' ],
                    created: '2014-12-10T15:48:00.586000Z',
                    edited: '2014-12-22T17:35:44.431407Z',
                    url: 'https://swapi.co/api/starships/5/'
                  }
            ]
        }
        
    };
    //axios.get.mockResolvedValue(resp)
    it('should return a list of starships', async() => {
        const result = await getStarship()
        expect(Array.isArray(result)).toBeTruthy
        //expected(result.length.toEqual(3))
        
    })
})