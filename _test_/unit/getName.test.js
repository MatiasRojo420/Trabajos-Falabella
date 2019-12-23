const getName = require('../../src/getName')

describe('getName', () => {
    it('should deliver a list of names', () => {
        const resultados = [
            {name: 'Executor', model: 'Executor-class star dreadnought'},
            {name: 'Sentinel-class landing craft', model: 'Sentinel-class landing craft'},
            {name: 'Death Star', model: 'DS-1 Orbital Battle Station'}
        ]

        const names = getName(resultados) 
        expect(Array.isArray(names)).toBe(true)
        expect(names).toHaveLength(3)
        expect(names[2]).toEqual('Death Star')
    })
})
