// const fs = require("fs");
const input = require("./day1-input");

function day1(coins) {
  for (let i = 0; i < coins.length; i++) {
    for (let j = i+1; j < coins.length; j++) {
      if (coins[i] + coins[j] === 2020) {
        console.log("Two Coins", coins[i], coins[j]);
        return [coins[i], coins[j]];
      }
    }
  }

  return [];
}

const day1PartTwo = (coins) => {
  for (let i = 0; i < coins.length; i++) {
    for (let j = i+1; j < coins.length; j++) {
        for(let k = j+1; k<coins.length; k++){
            if (coins[i] + coins[j] + coins[k] === 2020) {
              console.log("Three Coins", coins[i], coins[j], coins[k]);
              return [coins[i], coins[j], coins[k]];
            }
        }
    }
  }
  return [];
}

module.exports = { day1, day1PartTwo, day1Data: convertData };

function convertData(data) {
  return data.split("\n").map((str) => +str);
}

const day1Data = convertData(input);
const day1Pair = day1(day1Data);
const day1Three = day1PartTwo(day1Data)
console.log("daya1 part 1 result:", day1Pair[0] * day1Pair[1]);
console.log("daya1 part 2 result:", day1Three[0] * day1Three[1]* day1Three[2]);
