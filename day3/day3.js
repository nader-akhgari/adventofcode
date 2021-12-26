const input = require("./day3-input");

const countTree = (data) => {

  let forestMap = data.split('\n').map(x => x.split(''))
  let treeCount = 0 
  const mapWidth = forestMap[0].length
  for(let x = 0, y = 0; y<forestMap.length; x =( x+3)%mapWidth, y++ ){
    if (forestMap[y][x] === '#'){
      treeCount ++
    }
  }
  return treeCount

};

console.log(countTree(input));
module.exports= countTree
