// Write a function that checks if a given string is a palindrome

function isPalindrome(str) {
  let plainStr = str.replace(/\s/g, '').split('').reverse().join('');

  if(plainStr === str) {
    return true;
  } else {
      return false
  }
}

isPalindrome('level')
