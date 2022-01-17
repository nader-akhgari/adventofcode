const inputData = require("./input");
const {checkWeight} = require("./util");

const convertData = (data) => {
  const convertedData = data
  .replace(/^\s*\n/gm, ",")
  .replace(/\n/gm, " ")
  .split(",")
  .map((x) => x.trim().split(" "));
  const newData = convertedData.map((pass) => {
    return pass.map(passItem => passItem.split(':'))
  });
  const objData = newData.map(pass => Object.fromEntries(pass))
  return objData;
};

const passControl = (data) => {
  const newData = data.filter((passport) => {
    return (/^#[a-f0-9]{6}$/.test(passport.hcl) &&
      ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(passport.ecl) &&
      /^[0-9]{9}$/.test(passport.pid) &&
      +passport.eyr >= 2020 && +passport.eyr <= 2030 &&
      +passport.byr >= 1920 && +passport.byr <= 2002 &&
      +passport.iyr >= 2010 && +passport.iyr <= 2020 &&
      passport.hgt ? checkWeight(passport.hgt) : false);
  });
  return newData.length;
};

const formattedData = convertData(inputData);
console.log(passControl(formattedData));
module.exports = passControl;
