function day1(coins) {
  for(let i=0; i<coins.length; i++){
   for(let j=1; j<coins.length; j++){
     if(coins[i] + coins[j] === 2020){
       console.log('coin',coins[i] , coins[j])
       return[coins[i], coins[j]]
     }
     
   }
  }
  
  return [];
}

module.exports = { day1 };
