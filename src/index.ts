let num: number = 0;
let str: string = "omar";
let isMarried: boolean = false;

let all: any = "Omar";
all = 1; // its ok

function add(n1: number, n2: number): number {
  return n1 + n2;
}

console.log(add(10, 1));

let StingOrInteger: number | string; // allows you to redeclare the variable with only these data types;

StingOrInteger = "omar"; // its ok
StingOrInteger = 0; // its ok
