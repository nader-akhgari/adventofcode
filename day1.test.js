const { day1, day1Data } = require("./day1");

describe("day1", () => {
  it("finds multiple of values that sum to 2020", () => {
    const values = [1721, 979, 366, 299, 675, 1456];
    expect(day1(values)).toEqual([1721, 299]);
  });
  it("returns the results with different numbers", () => {
    const values = [979, 366, 1010, 1721, 299, 675, 1456];
    expect(day1(values)).toEqual([1721, 299]);
  });

  it("return an array of numbers", () => {
    const values = `1760
    1888
    1639
    1282
    1633
    1619`;
    expect(day1Data(values)).toEqual([1760, 1888, 1639, 1282, 1633, 1619]);
  });
});
