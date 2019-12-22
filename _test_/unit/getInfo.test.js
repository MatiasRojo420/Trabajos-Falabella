const getInfo = require('../../src/getInfo')

describe('getInfo', () => {
    it('should deliver a dictionary with name as key with the info associated to that name', () => {
        const resultados = [
            {name: 'Executor', model: 'Executor-class star dreadnought'},
            {name: 'Sentinel-class landing craft', model: 'Sentinel-class landing craft'},
            {name: 'Death Star', model: 'DS-1 Orbital Battle Station'}
        ]
        const info = getInfo(resultados) 
        expect(typeof(info)).toBe('object')
        expect(info["Death Star"]).toEqual({name: 'Death Star', model: 'DS-1 Orbital Battle Station'})

    })
})
