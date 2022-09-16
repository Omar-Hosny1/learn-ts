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
function getDat(day) {
    if (day == "SD")
        return "SD";
    if (day == "SD")
        return "FD";
    if (day == "SD")
        return "MD";
    else
        return "TS";
}
//TUPLES
let articele;
articele = [11, "A ONE", false];
function sayHello() {
    // void dont retutn any thing
    console.log("Hello");
}
//enums
var Levels;
(function (Levels) {
    Levels[Levels["easy"] = 10] = "easy";
    Levels[Levels["medium"] = 5] = "medium";
    Levels[Levels["hard"] = 3] = "hard";
})(Levels || (Levels = {}));
// let lvl = "easy";
// if (lvl == "easy") {
//   console.log(`${Levels.easy}`);
// }
// interface => as interfaceName
const data = "omar";
// console.log((data as string).charAt(0));
//type anottation for objects
const myObj = {
    UN: "omar",
    ID: 12,
    skills: {
        1: "HTML",
        2: "CSS",
    },
};
let Omar = {
    id: 1,
    name: "omar",
    country: "Egypt",
    sayHello() {
        return "Hello " + this.name;
    },
    sayWelcome: () => {
        return "Welcome " + Omar.name;
    },
    getDouble(num) {
        return num * 2;
    },
};
// console.log(Omar);
function getData(data) {
    console.log(data.id);
    console.log(data.name);
    console.log(data.country);
}
