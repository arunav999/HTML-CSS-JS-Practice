"use strict";

/*
JavaScript Practice Exercises for Beginners
===========================================

Beginner Exercises: Part 1
--------------------------
 */

/* 
Exercise 1:
----------
Write a JavaScript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100.
*/

const isEqual = (num1, num2) =>
  num1 === 100 || num2 === 100 || num1 + num2 === 100;

console.log(isEqual(50, 20));
console.log(isEqual(100, 0));
console.log(isEqual(55, 45));
console.log(isEqual(20, 40));

/*
Exercise 2:
----------
Write a JavaScript program to get the extension of a filename.
*/

const getFileName = (fileName) => {
  if (fileName && fileName.includes(".")) {
    return fileName.substring(fileName.lastIndexOf(".") + 1);
  }
  return "No extension found";
};

const fileName1 = "example.txt";
const fileName2 = "archive.tar.gz";
const fileName3 = "ano_extension";

console.log(getFileName(fileName1));
console.log(getFileName(fileName2));
console.log(getFileName(fileName3));

// Alternate

const getFileExtension = (str) => str.slice(str.lastIndexOf("."));

console.log(getFileExtension("index.html"));

/*
Exercise 3
----------
Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
*/

const moveCharsForward = (str) =>
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

console.log(moveCharsForward("Arunav Singh"));

// for z and capital letters

const replaceWithNextChar = (input) => {
  let result = "";

  for (let i = 0; i < input.length; i++) {
    let char = input[i];

    if (char >= "a" && char <= "z") {
      result +=
        char === "z" ? "a" : String.fromCharCode(char.charCodeAt(0) + 1);
    } else if (char >= "A" && char <= "Z") {
      result +=
        char === "Z" ? "A" : String.fromCharCode(char.charCodeAt(0) + 1);
    } else {
      result += char;
      // console.log((result += char));
    }
  }

  return result;
};

let inputData = "abcdABCD xyz!XYZ";
let outputData = replaceWithNextChar(inputData);
console.log(outputData);

/*
Exercise 4:
----------
Write a JAvaScript program to get the current date.
Expected Output:
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

const formateDate = (currDate = new Date()) => {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const firstThreeLettersDays = (inputDays) => {
    return inputDays.map((str) => str.substring(0, 3));
  };

  // Get day and month names.
  const dayIndex = currDate.getDay();
  const dayFull = dayNames[dayIndex];
  const monthIndex = currDate.getMonth();
  const monthFull = monthNames[monthIndex];

  // Get first three letters for days and months.
  const shortDaysIndex = firstThreeLettersDays(dayNames);
  const shortDays = shortDaysIndex[dayIndex];
  const shortMonthsIndex = firstThreeLettersDays(monthNames);
  const shortMonths = shortMonthsIndex[monthIndex];

  const date = currDate.getDate();
  const years = currDate.getFullYear();

  const format1 = `${monthIndex}-${date}-${years}`;
  const format2 = `${monthIndex}/${date}/${years}`;
  const format3 = `${date}-${monthIndex}-${years}`;
  const format4 = `${date}/${monthIndex}/${years}`;
  const format5 = `${date}-${shortMonths}-${years}`;
  const format6 = `${dayFull}, ${date}-${monthFull}-${years}`;
  const format7 = `${dayFull} ${date}-${shortMonths}-${years}`;
  const format8 = `${shortDays}, ${date}-${shortMonths}-${years}`;

  const allFormats = `
  Format 1: ${format1},
  Format 2: ${format2},
  Format 3: ${format3},
  Format 4: ${format4},
  Format 5: ${format5},
  Format 6: ${format6},
  Format 7: ${format7},
  Format 8: ${format8},
  `;

  return allFormats;
};

console.log(formateDate());

/*
Exercise 5:
----------
Write a JavaScript program to create a new string adding "New!" in front of a given string.
If the given string begins with "New!" already then return the original string.
*/

const addNew = (str) => (str.indexOf(`New!`) === 0 ? str : `New! ${str}`);

console.log(addNew("Offers"));
console.log(addNew("New! Offers"));
