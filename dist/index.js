"use strict";
let num = 0;
let str = "omar";
let isMarried = false;
let all = "Omar";
all = 1; // its ok
function add(n1, n2) {
    return n1 + n2;
}
// console.log(add(10, 1));
let StingOrInteger; // allows you to redeclare the variable with only these data types;
StingOrInteger = "omar"; // its ok
StingOrInteger = 0; // its ok
let myFrindes = ["omar", "hosny"];
let myFrindess = ["omar", "hosny", 0];
let multiDimensionalArray = [
    1,
    [4, 5, 6],
    ["omar"],
    [true],
];
function showData(name, age) {
    // age ? => its optional arg
    return `${name} - ${age}`;
}
// showData("oamr");
function restParam(...nums) {
    return nums.reduce((ele, acc) => ele + acc);
}
// console.log(restParam(12, 4, 7, 8, 9, 2));
const addWithAno = function (num1, num2) {
    num1 + num2;
};
const addWithArrow = (num1, num2) => num1 + num2;
const number = 8;
let omar = "omar";
omar = 1;
// omar = true; err
