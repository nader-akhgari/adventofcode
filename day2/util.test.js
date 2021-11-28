const convertData = require("./util");

describe("convert data", () => {
  it("should return 4", () => {
    const actual = `15-16 l: klfbblslvjclmlnqklvg
    6-13 h: pghjchdxhnjhjd
    4-13 n: nnznntzznqnzbtzj
    10-16 r: nrrrrkrjtxwrrrwx`;
    const expected = [
      { char: "l", min: "15", max: "16", password: "klfbblslvjclmlnqklvg" },
      { char: "h", min: "6", max: "13", password: "pghjchdxhnjhjd" },
      { char: "n", min: "4", max: "13", password: "nnznntzznqnzbtzj" },
      { char: "r", min: "10", max: "16", password: "nrrrrkrjtxwrrrwx" },
    ];
    expect(convertData(actual)).toHaveLength(4);
  });
});
