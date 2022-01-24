// const dataInput = ['BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL']
const input = require('./input')
const dataInput = input.split('\n')
const sanityCheck = (data1) => {
  const seatNums = data1.map(data => colculateSeat(data))
  return Math.max(...seatNums)
  
};

const colculateSeat = (data)=>{

  const formattedRows = data.split("").slice(0, 7);
  const formattedColumn = data.split("").slice(7, 10);
  let rows = [];
  const cols = [];
  for (let i = 0; i < 128; i++) {
    rows.push(i);
  }

  for (let i = 0, j = 64; i < 7; i++, j = j / 2) {
    if (formattedRows[i] === "F") {
      rows.splice(j, j);
    } else if (formattedRows[i] === "B") {
      rows.splice(0, j);
    }
  }
  let row = rows[0];

  for (let i = 0; i < 8; i++) {
    cols.push(i);
  }

  for (let i = 0, j = 4; i < 3; i++, j = j / 2) {
    if (formattedColumn[i] === "L") {
      cols.splice(j, j);
    } else if (formattedColumn[i] === "R") {
      cols.splice(0, j);
    }
  }
  const column = cols[0];
  return row * 8 + column;

}

console.log(sanityCheck(dataInput));
module.exports = {sanityCheck, colculateSeat}
