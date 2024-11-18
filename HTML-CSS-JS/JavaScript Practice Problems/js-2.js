"use strict";

/*
JavaScript Practice Exercises for Beginners
===========================================

Beginner Exercises: Part 2
--------------------------
 */

/*
Exercise 1:
----------
Write a JavaScript program to create a new string from a given string taking the first 3 characters and the last 3 character of a string and adding them together. The string length must be 3 or more, if not, the original string is returned.
 */

const makeNewString = (str) =>
  str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

console.log(makeNewString("abc"));
console.log(makeNewString("abcdef"));
console.log(makeNewString("abc123def456"));

console.log(makeNewString("ab"));

/*
Exercise 2:
----------
Write a JavaScript program to extract the first half of a string of even length.
 */

const firstHalf = (str) => str.slice(0, str.length / 2);

console.log(firstHalf("temp"));
console.log(firstHalf("temple"));
console.log(firstHalf("temples"));

/*
Exercise 3:
----------
Write a Javascript program to concatenate two strings except their first character.
 */

const firstLetterRemove = (str1, str2) => {
  let string1 = str1.slice(1);
  let string2 = str2.slice(1);

  return `${string1 + string2}`;
};

console.log(firstLetterRemove("Arunav", "Singh"));

/*
Exercise 4:
----------
Given two values, write a Javascript program to find out which one is the nearest to 100.
*/

const nearestTo100 = (val1, val2) => {
  const diff1 = Math.abs(100 - val1);
  const diff2 = Math.abs(100 - val2);

  if (diff1 > diff2) {
    return val2;
  } else if (diff1 < diff2) {
    return val1;
  } else {
    return "Both values are equally close to 100.";
  }
};

console.log(nearestTo100(98, 76));

/*
Exercise 5:
----------
Write a Javascript program to check a given string contains 2 to 4 occurrences of a specified character.
*/

const countChars = (str, char) =>
  str.split("").filter((ch) => ch === char).length;

const contains2To4 = (str, char) =>
  countChars(str, char) >= 2 && countChars(str, char) <= 4;

console.log(contains2To4("ooh", "o"));
console.log(contains2To4("ooooooh", "o"));
console.log(contains2To4("oooh", "o"));
console.log(contains2To4("oh", "o"));

/*

*/
