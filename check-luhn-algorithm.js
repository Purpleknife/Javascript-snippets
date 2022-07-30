//Write a function check, which, given a number, returns whether it is valid or not (according to the Luhn Algorithm).

//According to Wikipedia:
//Drop last digit
//Calculate check digit
//Compare with original check digit


//1 - Calculate Multipliers:
const calculateMultipliers = function(array) {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    
    output.push(Number(array[i]));
    output.push(Number(array[i + 1]) * 2);
    i++;
  }
  return output;
};

// => Output: [7, 18, 9, 4, 7, 6, 9, 16, 7, 2]


//2 - When a number is more than one digit, sum the digits: => 18 & 16 should become 9 & 7.
const checkDoubleDigit = function(array) {
  let moreThanOneDigit = [];
  let sum = 0;

  for (let nb of array) {
    const nbToStr = nb.toString(); //Convert to string so we can check length.
    
    if (nbToStr.length === 1) {
      moreThanOneDigit.push(nb);
    }
    if (nbToStr.length > 1 && nb > 0) { //More than 1 digit.
      for (let i = 0; i < nbToStr.length; i++) {
        sum += parseInt(nbToStr.charAt(i), 10);
        
      }
      moreThanOneDigit.push(sum);
      sum = 0; //Reset sum for next nb with more than 1 digit.
    }
   
  }
  return moreThanOneDigit;
};

//console.log(checkDoubleDigit([7, 18, 9, 4, 7, 6, 9, 16, 7, 2]));
//=> [7, 9, 9, 4, 7, 6, 9, 7, 7, 2]


//3 - Sum the digits:
const calculateSumDigits = function(array) {
  let total = 0;

  for (let digits of array) {
    total += digits;
  }

  return total;
};

// [7, 9, 9, 4, 7, 6, 9, 7, 7, 2] => 67.


//Final - Check if the calculated check digit matches with number (original check digit):
const check = function(number) {
  
  const removeLastDigit = Math.floor(number / 10); //Remove the last digit.
  const numberArr = String(removeLastDigit).split(''); //Turn into a string, then an array, se we can loop through it.

  const MultipliersArr = calculateMultipliers(numberArr);
  const sumDigits = calculateSumDigits(checkDoubleDigit(MultipliersArr));
  
  const calculatedLastDigit = 10 - (sumDigits % 10); // => 3
  const originalLastDigit = Number(String(number).slice(-1)); // => 3 too.
  
  
  if (calculatedLastDigit === originalLastDigit) {
    console.log(`==> ✅ Oh, Valid, they match! Original last digit is: ${originalLastDigit} and Calculated through Luhn Algorithm is: ${calculatedLastDigit}!`);
  }
  if (!calculatedLastDigit === originalLastDigit) {
    console.log(`==> 🛑 Oops, not valid, they don't match! Original last digit is: ${originalLastDigit} and Calculated through Luhn Algorithm is: ${calculatedLastDigit}!`);
  }
};

check(79927398713);
