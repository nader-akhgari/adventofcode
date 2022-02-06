const checkYourID = require('./day5Part2')
const {colculateSeat} = require('./util')

describe('day5 part 2', ()=>{
    const fakeData = ['FFFFFFFLLL', 'FFFFFFFLLR', 'FFFFFFFLRL', 'FFFFFFFLRR','FFFFFFFRLL', 'FFFFFFFRRL', 'FFFFFFFRRR', 'FFFFFFBLLL']// missing 5
    it('should return 5', ()=>{
        expect(checkYourID(fakeData)).toBe(5)
    })
})

describe('colculate seat',()=>{
    const fakeData = 'BFFFBBFRRR'
    it('should return 820',()=>{
        expect(colculateSeat(fakeData)).toBe(567)
    })
})