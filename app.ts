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
