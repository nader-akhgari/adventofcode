const {sanityCheck, colculateSeat} = require('./day5.js')

describe("day 5", ()=>{
    const fakeData = ['BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL']
    it.only('should return 820', ()=>{
        expect(sanityCheck(fakeData)).toBe(820)
    })
})