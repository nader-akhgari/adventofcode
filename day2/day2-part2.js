const convertData = require("./util");
const input = require("./day2-input");

const day2Part2 = (passData) => {
  const validPasses = passData.filter((pass) => {
    return (
      (pass.password[pass.min - 1] === pass.char &&
        pass.password[pass.max - 1] !== pass.char) ||
      (pass.password[pass.min - 1] !== pass.char &&
        pass.password[pass.max - 1] === pass.char)
    );
  });
  return validPasses.length;
};

const day2Part2Data = convertData(input);

console.log(day2Part2(day2Part2Data));

module.exports = day2Part2;
