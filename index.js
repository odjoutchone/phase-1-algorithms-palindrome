function isPalindrome(word) {
  // Write your algorithm here
      const reversed = word.split('').reverse().join('')
  return word === reversed;
}
  
/* 
  Add your pseudocode here
- Going to accept the string
- clean the string if needed
- reverse the string in some way(read the string in backwards)....

*/ 

/*
  Add written explanation of your solution here
  For this solution, I will use three methods: the String.prototype.split() method, the Array.prototype.reverse() method and the Array.prototype.join() method.

The split() method splits a String object into an array of string by separating the string into sub strings.
The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
The join() method joins all elements of an array into a string.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
