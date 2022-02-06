const input = require('./input')
const {colculateSeat} = require('./util')
const dataInput = input.split('\n')

const sanityCheck = (data1) => {
  const seatNums = data1.map(data => colculateSeat(data))
  return Math.max(...seatNums)
};

console.log(sanityCheck(dataInput));
module.exports = {sanityCheck, colculateSeat}
