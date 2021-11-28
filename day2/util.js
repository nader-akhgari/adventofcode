
const convertData = (data) => {
    const convertedData = data.split("\n").map((pass) => {
      const policyAndPass = pass.split(": ");
      const charAndCount = policyAndPass[0].split(" ");
      return {
        char: policyAndPass[0].split(" ")[1],
        min: charAndCount[0].split("-")[0],
        max: charAndCount[0].split("-")[1],
        password: pass.split(": ")[1]
      };
    });
    return convertedData;
  };

  module.exports = convertData