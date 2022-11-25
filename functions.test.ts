const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('should have same length', () => {
        const array = [1, 2, 3]
        expect(shuffleArray(array)).toHaveLength(array.length)
    })
    test('should return without error', () => {
        const array = [1, 2, 3]
        expect(shuffleArray(array)).toEqual(expect.arrayContaining(array))
    })
    
})