const input = require('./input')
const {colculateSeat} = require('./util')
const dataInput = input.split('\n')

const checkYourID = (data1) => {
  const seatNums = data1.map(data => colculateSeat(data))
  console.log('min:',Math.min(...seatNums), 'max:', Math.max(...seatNums))
  const min = Math.min(...seatNums)
  const max = Math.max(...seatNums)
  for(i= min; i < max;i++){
    if(!seatNums.includes(i)){
      return i
    }
  }
};

console.log(checkYourID(dataInput))
module.exports = checkYourID