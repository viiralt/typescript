// string
let myName = 'Henri';
myName = 28;

// number
let myNumber = 24;
myNumber = 'Henri';

// boolean
let hasHobbies: string[];
hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = '23';

// arrays
hasHobbies = ['cooking', 'fitness', 'photography'];
hasHobbies[1]; //?
typeof hasHobbies; //?

let hobbies: any[] = [123, 'boom', true];
hobbies; //?

// tuples - mixed, sequential type
let address: [string, number] = ['somestreet', 132 - 22];
address = [132 - 22, 'bububu'];

// enums - serialising, must be capped!
enum Color {
  grey,
  green,
  red
}
Color; //?

let myColor: Color = Color.red;
myColor; //?

// any - most flexible, use as exception!
let car: any = 'hippo'; //?
car = { boom: 1 };
car; //?

// functions
const returnName = (myName: string) => {
  return myName;
};
returnName('benny'); //?

// void - in case a func doesn't return
const sayHello = (text: void) => {
  console.log('hola!');
};

// argument types
const multiply = (value1: number, value2: number) => {
  return value1 * value2;
};

multiply(4, 3); //?
multiply('sven', true);

// func types
let myMultiply: (val1: number, val2: number) => number;
myMultiply = sayHello;
myMultiply = multiply;
myMultiply(5, 5); //?

// objs
let userData: { name: string; age: number } = {
  name: 'Henri',
  age: 98
};

// complex objs
let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [1, 513.6, 99],
  output: function(all: boolean): number[] {
    return this.data;
  }
};

complex; //?
complex = true;
