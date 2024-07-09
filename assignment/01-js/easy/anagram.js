/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Check if the lengths of the strings are equal
  if (str1.length !== str2.length) {
    return false;
  }

  // Create an object to store character frequencies
  const charCount = {};

  // Count frequencies of characters in str1
  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Compare with str2
  for (let char of str2) {
    if (!charCount[char]) {
      // If char not found or frequency is 0
      return false;
    } else {
      // Decrement the frequency of char
      charCount[char]--;
    }
  }

  // Check if all values in charCount are zero (meaning both strings have same characters with same frequencies)
  return Object.values(charCount).every((count) => count === 0);
}

module.exports = isAnagram;
