const axios = require('axios')
const getStarship = require('../../src/getStarship')
jest.mock('axios')

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
                  },
                  {
                    name: 'Imperial shuttle',
                    model: 'Lambda-class T-4a shuttle',
                    manufacturer: 'Sienar Fleet Systems',
                    cost_in_credits: '240000',
                    length: '20',
                    max_atmosphering_speed: '850',
                    crew: '6',
                    passengers: '20',
                    cargo_capacity: '80000',
                    consumables: '2 months',
                    hyperdrive_rating: '1.0',
                    MGLT: '50',
                    starship_class: 'Armed government transport',
                    pilots: [
                      'https://swapi.co/api/people/1/',
                      'https://swapi.co/api/people/13/',
                      'https://swapi.co/api/people/14/'
                    ],
                    films: [
                      'https://swapi.co/api/films/2/',
                      'https://swapi.co/api/films/3/'
                    ],
                    created: '2014-12-15T13:04:47.235000Z',
                    edited: '2014-12-22T17:35:44.795405Z',
                    url: 'https://swapi.co/api/starships/22/'
                  },
                  {
                    name: 'EF76 Nebulon-B escort frigate',
                    model: 'EF76 Nebulon-B escort frigate',
                    manufacturer: 'Kuat Drive Yards',
                    cost_in_credits: '8500000',
                    length: '300',
                    max_atmosphering_speed: '800',
                    crew: '854',
                    passengers: '75',
                    cargo_capacity: '6000000',
                    consumables: '2 years',
                    hyperdrive_rating: '2.0',
                    MGLT: '40',
                    starship_class: 'Escort ship',
                    pilots: [],
                    films: [
                      'https://swapi.co/api/films/2/',
                      'https://swapi.co/api/films/3/'
                    ],
                    created: '2014-12-15T13:06:30.813000Z',
                    edited: '2014-12-22T17:35:44.848329Z',
                    url: 'https://swapi.co/api/starships/23/'
                  }
            ]
        }
        
    };
    axios.get.mockResolvedValue(resp)
    it('should return a list of starships', async() => {
        const result = await getStarship()
        expect(Array.isArray(result)).toBeTruthy
        expect(result).toHaveLength(3)
        expect(axios.get).toHaveBeenCalledTimes(1)
        
    })
})
