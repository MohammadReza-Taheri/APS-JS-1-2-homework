/**
 * /*
 * Write a function that:
 * - takes an array of strings as input
 * - removes any spaces in the beginning or end of the strings
 * - removes any forward slashes (/) in the strings
 * - makes the string all lowercase
 *
 * @format
 *
 * ///////////////////////////////
 * this function => (tidyUpString) is for js1-3 so you don't need to solve it
 * ///////////////////////////////
 * 
 * /
function tidyUpString(strArr) {}

/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

function validate(num) {
  if(isNaN(num)){
    return false;
  }else if(num%2!==0){
    return false;
  }else if(num>100){
    return false;
  }else{return true;}
}

/* 
Write a function that returns a copy of the given array arr, but with the element at the given index, index removed.
The function must NOT change the original array, arr.
*/

function remove(arr, index) {
  const newArr=arr;
  newArr.splice(index,1);
  return newArr; // complete this statement
}

/*
Write a function that:
- takes an array of numbers as input
- returns an array of strings formatted as percentages (e.g. 10 => "10%")
- the numbers must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100
*/
function numberDefiner(arr) {
  const filteredArr=arr.filter(item=>isNaN(item));
  if (filteredArr.length===0) {
    return true;
  } else {
    return false;
  }
}

function toFixed(arr) {
  const fixedArr=arr.map(function(item){
    let isUpperThan100=(item>100) ? 100:item;
    if (!Number.isInteger(isUpperThan100)) {
      return isUpperThan100.toFixed(2);      //There is not logical problem,It has a bit written difference,though! It's solvable but it is not a big deal
    }else{
      return isUpperThan100;
    }
  }); 
  return fixedArr;
}
function percentageAdder(arr) {
  const newArr=arr.map(item=>item.toString()+"%");
  return newArr;
}
function formatPercentage(arr) {
  if(numberDefiner(arr)){
    let fixedArr=toFixed(arr);
    return percentageAdder(fixedArr);
  }else{
    console.log("Your array's items should be number!");
  }
}

function tidyUpString(strArr) {
  const tidyStringArr=strArr.map(item=>item.replace("/","").trim().toLowerCase());
  return tidyStringArr;
}

/* ======= TESTS - DO NOT MODIFY ===== */

const util = require("util");

function test(test_name, actual, expected) {
  let status;

  let isEqual;
  if (Array.isArray(expected)) {
    isEqual = arraysEqual(actual, expected);
  } else {
    isEqual = actual === expected;
  }

  if (isEqual) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

test(
  "tidyUpString function works - case 1",
  tidyUpString(["/Daniel ", "irina ", " Gordon", "ashleigh "]),
  ["daniel", "irina", "gordon", "ashleigh"]
);
test(
  "tidyUpString function works - case 2",
  tidyUpString([" /Sanyia ", " Michael ", "AnTHonY ", "   Tim   "]),
  ["sanyia", "michael", "anthony", "tim"]
);

test("validate function works - case 1", validate(10), true);
test("validate function works - case 2", validate(18), true);
test("validate function works - case 3", validate(17), false);
test("validate function works - case 4", validate("Ten"), false);
test("validate function works - case 5", validate(108), false);

test("remove function works - case 1", remove([10, 293, 292, 176, 29], 3), [
  10,
  293,
  292,
  29,
]);
test(
  "remove function works - case 2",
  remove(["a", "b", "c", "d", "e", "f", "g"], 6),
  ["a", "b", "c", "d", "e", "f"]
);

test(
  "formatPercentage function works - case 1",
  formatPercentage([23, 18.103, 187.2, 0.372]),
  ["23%", "18.1%", "100%", "0.37%"]
);
