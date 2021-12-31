const convertData = (data) => {
  const convertedData = data
    .replace(/^\s*\n/gm, ",")
    .replace(/\n/gm, " ")
    .split(",")
    .map((x) => x.trim().split(" "));
  const newData = convertedData.map((pass) => {
    const obj = Object.fromEntries(pass.map((x) => x.split(":")));
    return obj;
  });
  return newData;
};

const passportProcessing = (data) => {
  const newData = data.filter((passport) => {
    return (
      passport.hcl !== undefined &&
      passport.ecl !== undefined &&
      passport.pid !== undefined &&
      passport.eyr !== undefined &&
      passport.byr !== undefined &&
      passport.iyr !== undefined &&
      passport.hgt !== undefined
    );
  });
  return newData.length;
};

const inputData = require("./input");
const formattedData = convertData(inputData);
console.log(passportProcessing(formattedData));

module.exports = { passportProcessing, convertData };
