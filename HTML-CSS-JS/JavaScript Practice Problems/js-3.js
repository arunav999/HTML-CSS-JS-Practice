"use strict";

/*
JavaScript Practice Exercises for Beginners
===========================================

Beginner Exercises: Part 3
--------------------------
*/

/*
Exercise 1:
----------
Write a Javascript program to find the number of even digits in an array of integers.
*/

const countEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0).length;

console.log(countEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/*
Exercise 2:
----------
Write a Javascript program to find the number of even values up to a given number.
*/

const countEvenNum = (arr) => arr.filter((num) => num % 2 === 0).length;

const createArrayOfNumbers = (num) => {
  const returnArray = [];
  for (let i = 0; i <= num; i += 1) {
    returnArray.push(i);
  }
  return returnArray;
};

console.log(countEvenNum(createArrayOfNumbers(6)));
console.log(countEvenNum(createArrayOfNumbers(9)));

/*
Exercise 3:
----------
Write a Javascript program to check whether a given array of integers is stored in ascending order.
*/

const isAscending = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i + 1] < arr[i]) return false;
  }
  return true;
};

console.log(isAscending([-1, 0, 1, 2, 3, 4, 5]));
console.log(isAscending([-1, 0, 1, 2, 3, 2, 5]));
console.log(isAscending([-2, -1, 0, 1, 2, 3, 4, 5]));

/*
Exercise 4:
----------
Write Javascript program to get the largest even number from an array of integers.
*/

const largestEven = (arr) => Math.max(...arr.filter((num) => num % 2 === 0));

console.log(largestEven([13, 2, 14, 56, 98, 23, 10, 300]));
console.log(largestEven([13, 2, 14, 56, 98, 23, 10]));
console.log(largestEven([13, 2, 14, 56, 23, 10]));

/*
Exercise 5:
----------
Wrtie a JAvascript program to replace the first digit in a string (should contains atleast digit) with $ charahcter.
*/

const replaceFirstDigit = (str) => str.replace(/[0-9]/, "$");

console.log(replaceFirstDigit("Abcd1Abcde"));
console.log(replaceFirstDigit("A123Abcde"));
console.log(replaceFirstDigit("A1B1c2D3"));
