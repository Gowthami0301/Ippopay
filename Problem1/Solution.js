// Write the code in Javascript. Provide comments as needed.
// Write unit tests.
// **********************
// 1. A password is considered strong if the below conditions
// are all met:
// ● It has at least 6 characters and at most 20 characters.
// ● It contains at least one lowercase letter, at least one
// uppercase letter, and at least one digit.
// ● It does not contain three repeating characters in a row
// (i.e., &quot;Baaabb0&quot; is weak, but &quot;Baaba0&quot; is strong).
// Given a string password, return the minimum number of steps
// required to make password strong. if password is already
// strong, return 0.
// In one step, you can:
// ● Insert one character to password,
// ● Delete one character from password, or
// ● Replace one character of password with another
// character.


function strongPasswordChecker(password) {
  // Initialize counters for missing character types
  let missingLowercase = 1;
  let missingUppercase = 1;
  let missingDigit = 1;

  // Initialize counter for repeating characters
  let repeatingCount = 0;

  // Check if password length is less than 6
  if (password.length < 6) {
    return Math.max(6 - password.length, 3 - missingCharacterTypes(password));
  }

  // Check if password length is greater than 20
  if (password.length > 20) {
    let deleteCount = password.length - 20;
    repeatingCount = getRepeatingCount(password);
    return deleteCount + Math.max(repeatingCount - deleteCount, missingCharacterTypes(password));
  }

  // Password length is between 6 and 20
  repeatingCount = getRepeatingCount(password);
  return Math.max(repeatingCount, missingCharacterTypes(password));

  // Function to count missing character types
  function missingCharacterTypes(password) {
    for (let i = 0; i < password.length; i++) {
      if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
        missingLowercase = 0;
      } else if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
        missingUppercase = 0;
      } else if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
        missingDigit = 0;
      }
    }
    return missingLowercase + missingUppercase + missingDigit;
  }

  // Function to count repeating characters
  function getRepeatingCount(password) {
    let count = 0;
    let i = 2;
    while (i < password.length) {
      if (
        password[i] === password[i - 1] &&
        password[i - 1] === password[i - 2]
      ) {
        count++;
        i += 3;
      } else {
        i++;
      }
    }
    return count;
  }
}

// Unit tests
console.log(strongPasswordChecker("a")); // Output: 5
console.log(strongPasswordChecker("aA1")); // Output: 3
console.log(strongPasswordChecker("1337C0d3")); // Output: 0
