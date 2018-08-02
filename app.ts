// string
let myName: string = 'Henri';

// number
let myNumber: number = 24;

// boolean
let hasHobbies: boolean = true;

// arrays
const hobbies: string[] = ['cooking', 'fitness', 'photography'];
hobbies[1]; //?
typeof hobbies; //?

let myHobbies: any[] = [123, 'boom', true];
hobbies; //?

// tuples - mixed, SEQUENTIAL type
let address: [string, number] = ['somestreet', 132 - 22];
// address = [132 - 22, 'bububu']; nope

// enums - serialising, must be capped!
enum Color {
  grey,
  green,
  red
}
Color; //?

let myColor: Color = Color.red;
myColor; //?

// any - most flexible, use as exception only!
let car: any = 'hippo'; //?
car = { boom: 1 };
car; //?

// functions
const returnName = (myName: string) => {
  return myName;
};
returnName('benny'); //?

// void - in case a func doesn't return
const warning = (): void => {
  console.log('shazam');
};

// argument types
const multiply = (value1: number, value2: number) => {
  return value1 * value2;
};
multiply(4, 3); //?

// func types
let myMultiply: (val1: number, val2: number) => number;
//myMultiply = sayHello;
myMultiply = multiply;
myMultiply(5, 5); //?

// objs
let userData: { name: string; age: number } = {
  name: 'Henri',
  age: 98
};

// type alias
type Complex = {
  data: number[];
  output: (all: boolean) => number[];
};

// complex objs
let complex: Complex = {
  data: [1, 513.6, 99],
  output: function(): number[] {
    return this.data;
  }
};

complex; //?
// complex = true; nope

// union types - either or
let myNumberOrString: number | string;
myNumberOrString = '21';
myNumberOrString = 21;
// myNumberOrString = false; nope

// check types
let finalValue = 'a string';
if (typeof finalValue == 'string') {
  console.log(`oh weee, yeas, it's a string`);
}

// never
/* const neverReturns = (): never => {
  throw new Error('wooooh, something is wrong');
};
neverReturns(); */

// nullable tsconfig: strictNullChecks: true
let canBeNull: number | null = 12;
canBeNull = null;

// default params
const countdown = (start: number = 10): void => {
  while (start > 0) {
    start--;
  }
  console.log('finished', start);
};
countdown(32); //?

// spread - flatten an arr, passed as a single arg?
const nums = [1, 99, 31105.5, 10];
const newNums = [...nums, 50485, 2341, 1]; //?

// rest - multiple args turned into an arr of vals
const makeArr = (...args: number[]) => {
  return args;
};

makeArr(1, 2, 14941, 32); //?
