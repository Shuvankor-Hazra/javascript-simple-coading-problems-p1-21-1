/**
 * Function takes an array as parameter
 * Give me the average of the odd numbers in the array
 */

/**
 * 1. Put odd number in an array
 */

function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 !== 0) {
      // console.log(number)
      odds.push(number);
    }
  }
    // odds is the array that contains only the odd numbers
    //   console.log(odds);
  let sum = 0;
  for(const number of odds){
    sum = number + sum;
  }
  const count = odds.length;
  console.log(sum, count);
  const avg = sum / count;
  return avg;
}
const numbers = [12, 23, 34, 45, 56, 67, 98, 77, 99];
const avg = oddAverage(numbers);
console.log("Average of the odd numbers is: ", avg);





