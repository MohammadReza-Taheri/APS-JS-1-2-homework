/** @format */
//add comments
// explain what this function does. use Google!
function whatDoIDo() {    //------------------------->Ans:This function return a random number.0<Math.random()<1 but *8 make it bigger until maximum 8.finally,the number is going to be added to one
  return Math.random() * 8 + 1;
}

// explain what does this function do, google it
function whatICanDo(word1, word2) {
  return word1.concat(word2); //------->Ans:concat() is a method incorporating two different strings or array into a string or array
}

function concatenate(firstWord, secondWord, thirdWord) {
  // do you remember how concatenation works? take a look at the tests and do it yourself
  return firstWord.concat(" "+secondWord).concat(" "+thirdWord);
}

/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.
To run these tests type `node third` into your terminal
==================================
*/

const util = require("util");

function test(test_name, actual, expected) {
  let status;
  if (actual === expected) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "concatenate function - case 1 works",
  concatenate("international", "mentors&", "developers"),
  "international mentors& developers"
);
test(
  "concatenate function - case 2 works",
  concatenate("I", "like", "pizza"),
  "I like pizza"
);
test(
  "concatenate function - case 3 works",
  concatenate("I", "am", 13),
  "I am 13"
);
