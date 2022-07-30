/*Create a function maxProfit, which, given a list of stock prices for a given day,
returns the maximum profit that could have been made by buying a stock at the given price
and then selling the stock later on.*/


const maxProfit = function(array) {
  let currBuyPrice = array[0]; //Set the first buy price to the first number.
  let currSellPrice = 0;
  let profit = 0;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < currBuyPrice) { //Find the best/ lowest buy price.
      currBuyPrice = array[i];
    }
    if (array[i + 1] > currSellPrice) { //Find the best/ highest sell price.
      currSellPrice = array[i + 1];
    }
    let currProfit = currSellPrice - currBuyPrice; //Update profit each time.
    if (currProfit > profit) {
      profit = currProfit;
    }
  }
  return profit;
};

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11])); // => 16
console.log(maxProfit([20, 24, 15, 41, 50, 38, 10])); // => 35
