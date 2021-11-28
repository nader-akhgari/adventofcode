const input = require("./day2-input");
const convertData = require("./util");

const day2 = (passData) => {
  const validPasses = passData.filter((pass) => {
    const countChar = pass.password
      .split("")
      .filter((char) => char === pass.char);
    return countChar.length >= pass.min && countChar.length <= pass.max;
  });
  return validPasses.length;
};

const day2Data = convertData(input);
console.log(day2(day2Data));

module.exports = { day2 };
