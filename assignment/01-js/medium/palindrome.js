/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Convert the string to lowercase
  str = str.toLowerCase();

  // Array to store alphabetic characters only
  let newStr = [];

  // Iterate through the string to filter out non-alphabetic characters
  for (let k = 0; k < str.length; k++) {
    if (/[a-zA-Z]/.test(str[k])) {
      newStr.push(str[k]);
    }
  }

  // Check if the filtered string is a palindrome
  let i = 0,
    j = newStr.length - 1;
  while (i < j) {
    if (newStr[i] !== newStr[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

module.exports = isPalindrome;
