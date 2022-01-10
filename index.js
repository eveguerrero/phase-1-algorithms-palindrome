function isPalindrome(word) {
  // Write your algorithm here
  let wordArray = word.split('');
  let reversed = wordArray.reverse().join('');
 
    if(word === reversed){
      return true;
    } else {
    return false;
    }
  }



/* 
  Add your pseudocode here
  let wordArray be string solit into array
  reverse array
  if(word at index is the same as wordReversed at index)
  return true
  else 
  return false 
*/

/*
  Add written explanation of your solution here

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
