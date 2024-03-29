// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
// A string is represented by an array if the array elements concatenated in order forms the string.
// Example 1:
// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.
// Example 2:
// Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
// Output: false
// Example 3:
// Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
// Output: true
// Constraints:
// 1 <= word1.length, word2.length <= 103
// 1 <= word1[i].length, word2[i].length <= 103
// 1 <= sum(word1[i].length), sum(word2[i].length) <= 103
// word1[i] and word2[i] consist of lowercase letters.

/**
 * @param {string[]} word1
 *  @param {string[]} word2
 * @return {boolean}
 * */
const arrayStringsAreEqual = (word1, word2) => {
 // DESTRUCTURING THE ARRAY INTO A STRING AND THEN COMPARING THEM
 return word1.join('') === word2.join('');    // join() method returns the array as a string. 

 // OR THE LONG JOURNEY OF THE SAME RESULT 
 // let str1 = word1.join('');  // 1. join the arrays into strings
 // let str2 = word2.join('');
 // if (str1 === str2) {        // 2. compare the strings 
 // return true;                // 3. return true if they are equal
 // } else {
  // return false;              // 4. return false if they are not equal
 // }
}

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));   // true
console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]));   // false
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));   // true

