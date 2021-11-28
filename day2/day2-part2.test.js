const day2Part2 = require('./day2-part2.js')
describe('day2 part2',()=>{
    it('should return true',()=>{
        const passData = [
            { char: "l", min: "15", max: "16", password: "klfbblslvjclmlnqklvg" },
            { char: "h", min: "6", max: "13", password: "pghjchdxhnjhjd" },
            { char: "n", min: "4", max: "13", password: "nnznntzznqnzbtzj" },
            { char: "r", min: "10", max: "16", password: "nrrrrkrjtxwrrrwx" },
          ];
        expect(day2Part2(passData)).toBe(2)
    })
})