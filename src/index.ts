let num: number = 0;
let str: string = "omar";
let isMarried: boolean = false;

let all: any = "Omar";
all = 1; // its ok

function add(n1: number, n2: number): number {
  return n1 + n2;
}

// console.log(add(10, 1));

let StingOrInteger: number | string; // allows you to redeclare the variable with only these data types;

StingOrInteger = "omar"; // its ok
StingOrInteger = 0; // its ok

let myFrindes: string[] = ["omar", "hosny"];

let myFrindess: (string | number)[] = ["omar", "hosny", 0];

let multiDimensionalArray: (number | number[] | string[] | boolean[])[] = [
  1,
  [4, 5, 6],
  ["omar"],
  [true],
];

function showData(name: string, age?: number): string {
  // age ? => its optional arg
  return `${name} - ${age}`;
}
// showData("oamr");

function restParam(...nums: number[]): number {
  return nums.reduce((ele, acc) => ele + acc);
}

// console.log(restParam(12, 4, 7, 8, 9, 2));

const addWithAno = function (num1: number, num2: number) {
  num1 + num2;
};
const addWithArrow = (num1: number, num2: number) => num1 + num2;

// Type Alias

type n = number;

const number: n = 8;

type strAndInt = number | string;

let omar: strAndInt = "omar";

omar = 1;
// omar = true; err
