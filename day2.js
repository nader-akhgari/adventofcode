const input = require("./day2-input");

const day2 = (passData) => {
  const validPasses = passData.filter((pass) => {
    const countChar = pass.password
      .split("")
      .filter((char) => char === pass.char);
    return countChar.length >= pass.min && countChar.length <= pass.max;
  });
  return validPasses.length;
};

const convertData = (data) => {
  const passes = data.split("\n");
  const newData = passes.map((pass) => {
    const obj = {};
    const policyAndPass = pass.split(":");
    const charAndCount = policyAndPass[0].split(" ");
    const minMax = charAndCount[0].split("-");
    obj.char = charAndCount[1];
    obj.min = minMax[0];
    obj.max = minMax[1];
    obj.password = policyAndPass[1];
    return obj;
  });
  return newData;
};

const day2Data = convertData(input);
console.log(day2(day2Data));

module.exports = { day2 };
