const { day2 } = require("./day2");
describe("password philosophy", () => {
  const fackData = [
    { char: "v", min: "11", max: "12", password: "vvvvvvfvvvhvvv" },
    { char: "h", min: "2", max: "8", password: "hlhhkhhchhhghh" },
    { char: "t", min: "4", max: "5", password: "stntztttmp" },
    { char: "v", min: "3", max: "5", password: "vvvmbvhvvvlvn" },
  ];
  it("should return 2", () => {
    expect(day2(fackData)).toEqual(2);
  });
});
