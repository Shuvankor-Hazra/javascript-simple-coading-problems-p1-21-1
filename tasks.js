// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
console.log(celsiusToFahrenheit(20));
console.log(celsiusToFahrenheit(40));

// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

const numbers = [5, 6, 11, 12, 98, 5];

function repeatedNumber(number) {
  let count = 0;
  for (const num of numbers) {
    if (num === number) {
      count = count + 1;
    }
  }
  return count;
}

console.log(repeatedNumber(5));
console.log(repeatedNumber(13));

// Task-3:
// Write a function to count the number of vowels in a string.
function vowelCount(strings) {
  const vowels = "AaEeIiOoUu";
  let count = 0;
  for (const character of strings) {
    if (vowels.includes(character)) {
      count = count + 1;
    }
  }
  return count;
}

console.log(vowelCount("Write a function to count the number of vowels in a string"));
console.log(vowelCount("Convert temperature from Celsius to Fahrenheit"));

// Task-4:
// Write a function to find the longest word in a given string.

function findLongestWord(str) {
  let words = str.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestWord("I am learning Programming to become a programmer"));
console.log(findLongestWord("Write a function to count the number of vowels in a string."));

// Task-5:
// Generate a random number between 10 to 20.

function generateRandomNumber() {
  return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
}

console.log(generateRandomNumber());
console.log(generateRandomNumber());
