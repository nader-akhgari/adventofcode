const checkWeight = (str) => {
  var regex = new RegExp("([0-9]+)|([a-z]+)", "g");
  var newStr = str.match(regex);
  if (newStr[1] === "cm") {
    if (newStr[0] >= 150 && newStr[0] <= 193) {
      return true;
    } else {
      return false;
    }
  } else if (newStr[0] === "in") {
    if (newStr[0] >= 59 && newStr[0] <= 76) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};



const checkHairColor = (color) => {
  return /^#[a-f0-9]{6}$/.test(color);
};

const checkEyeColor = (color) => {
  return ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(color);
};

module.exports = { checkWeight, checkHairColor, checkEyeColor };
