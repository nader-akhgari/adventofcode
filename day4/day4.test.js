const { passportProcessing, convertData } = require("./day4.js");

describe("day4", () => {
  const rawData = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
    byr:1937 iyr:2017 cid:147 hgt:183cm

    iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
    hcl:#cfa07d byr:1929

    hcl:#ae17e1 iyr:2013
    eyr:2024
    ecl:brn pid:760753108 byr:1931
    hgt:179cm

    hcl:#cfa07d eyr:2025 pid:166559648
    iyr:2011 ecl:brn hgt:59in`;
  const inputData = [
    {
      ecl: "gry",
      pid: "860033327",
      eyr: "2020",
      hcl: "#fffffd",
      byr: "1937",
      iyr: "2017",
      cid: "147",
      hgt: "183cm",
    },
    {
      iyr: "2013",
      ecl: "amb",
      cid: "350",
      eyr: "2023",
      pid: "028048884",
      hcl: "#cfa07d",
      byr: "1929",
    },
    {
      hcl: "#ae17e1",
      iyr: "2013",
      eyr: "2024",
      ecl: "brn",
      pid: "760753108",
      byr: "1931",
      hgt: "179cm",
    },
    {
      hcl: "#cfa07d",
      eyr: "2025",
      pid: "166559648",
      iyr: "2011",
      ecl: "brn",
      hgt: "59in",
    },
  ];
  it("should return 2", () => {
    expect(passportProcessing(inputData)).toBe(2);
  });
  it("should return an array of objects", () => {
    expect(convertData(rawData)).toEqual(inputData);
  });
});
