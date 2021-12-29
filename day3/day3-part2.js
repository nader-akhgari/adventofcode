const day3Part2Input = require("./day3-input");

const slopsCount = (right, down, rows) => {
  let count = 0;
  for (
    let i = 0, j = 0;
    i < rows.length;
    i = i + down, j = (j + right) % rows[0].length
  ) {
    if (rows[i][j] === "#") {
      count++;
    }
  }
  return count;
};

const day3Part2 = (data) => {
  const rows = data.split("\n").map((row) => row.split(""));
  const first = slopsCount(1, 1, rows);
  const second = slopsCount(3, 1, rows);
  const third = slopsCount(5, 1, rows);
  const fourth = slopsCount(7, 1, rows);
  const fifth = slopsCount(1, 2, rows);
  return first * second * third * fourth * fifth;
};

console.log(day3Part2(day3Part2Input));
module.exports = day3Part2;
