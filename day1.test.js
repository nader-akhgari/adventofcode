const { day1 } = require('./day1');

describe('day1', () => {
  it('finds multiple of values that sum to 2020', () => {
    const values = [1721, 979, 366, 299, 675, 1456];
    expect(day1(values)).toEqual([1721, 299]);
  })
  it('finds multiple of values that sum to 2020', () => {
    const values = [1010, 1721, 979, 366, 299, 675, 1456];
    expect(day1(values)).toEqual([1721, 299]);
  })
})
