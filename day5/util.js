const colculateSeat = (data)=>{
    const formattedRows = data.split("").slice(0, 7);
    const formattedColumn = data.split("").slice(7, 10);
    let rows = buildSeats(64, 7, 'F', 'B', formattedRows)
    const cols = buildSeats(4, 3, 'L', 'R',formattedColumn);
    let row = rows[0];
    const column = cols[0];
    return row * 8 + column;
  }

  const buildSeats = (row, col, low, high, allRows)=>{
    const cols =[]
    for (let i = 0; i < (row * 2); i++) {
      cols.push(i);
    }
    for (let i = 0, j = row; i < col; i++, j = j / 2) {
      if (allRows[i] === low) {
        cols.splice(j, j);
      } else if (allRows[i] === high) {
        cols.splice(0, j);
      }
    }
    return cols
  }

  module.exports = {colculateSeat}