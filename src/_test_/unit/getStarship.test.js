const axios = require('axios')
const getStarship = require('../../getStarship')
jest.mock('axios')


describe('getStarship', () => {
    const resp = {
        data: {
            results: []
        }
        
    };
    axios.get.mockResolvedValue(resp)
    it('should return a list of starships', async() => {
        const result = await getStarship()
        expect(Array.isArray(result)).toBeTruthy
        expected(result.length.toEqual(3))
        
    })
})