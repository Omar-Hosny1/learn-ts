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

type days = "SD" | "MD" | "TS" | "FD";

function getDat(day: string): days {
  if (day == "SD") return "SD";
  if (day == "SD") return "FD";
  if (day == "SD") return "MD";
  else return "TS";
}

//TUPLES
let articele: readonly [number, string, boolean];
articele = [11, "A ONE", false];

function sayHello(): void {
  // void dont retutn any thing
  console.log("Hello");
}

//enums

enum Levels {
  easy = 10,
  medium = 5,
  hard = 3,
}

// let lvl = "easy";
// if (lvl == "easy") {
//   console.log(`${Levels.easy}`);
// }

// interface => as interfaceName
const data: any = "omar";
// console.log((data as string).charAt(0));

//type anottation for objects

const myObj: {
  UN: string;
  ID: number;
  skills: {
    1: string;
    2: string;
  };
} = {
  UN: "omar",
  ID: 12,
  skills: {
    1: "HTML",
    2: "CSS",
  },
};

// console.log(myObj);

// Interface

interface User {
  id: number;
  name: string;
  country: string;
  sayHello(): string;
  sayWelcome: () => string;
  getDouble(num: number): number;
}
let Omar: User = {
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

function getData(data: User) {
  console.log(data.id);
  console.log(data.name);
  console.log(data.country);
}
// getData({ id: 1, name: "omar", country: "Eg", sayHello( ) });

// ReOpen The Interface
interface Settings {
  theme: boolean;
}

interface Settings {
  fontSize: number;
}

interface person {
  name: string;
  gender: string;
}

interface person1 extends person {
  age: number;
}

let person2: person1 = { age: 10, gender: "male", name: "Omar" };
