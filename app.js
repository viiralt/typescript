// string
let myName = 'Henri';
// number
let myNumber = 24;
// boolean
let hasHobbies = true;
// arrays
const hobbies = ['cooking', 'fitness', 'photography'];
hobbies[1]; //?
typeof hobbies; //?
let myHobbies = [123, 'boom', true];
hobbies; //?
// tuples - mixed, SEQUENTIAL type
let address = ['somestreet', 132 - 22];
// address = [132 - 22, 'bububu']; nope
// enums - serialising, must be capped!
var Color;
(function (Color) {
    Color[Color["grey"] = 0] = "grey";
    Color[Color["green"] = 1] = "green";
    Color[Color["red"] = 2] = "red";
})(Color || (Color = {}));
Color; //?
let myColor = Color.red;
myColor; //?
// any - most flexible, use as exception only!
let car = 'hippo'; //?
car = { boom: 1 };
car; //?
// functions
const returnName = (myName) => {
    return myName;
};
returnName('benny'); //?
// void - in case a func doesn't return
const warning = () => {
    console.log('shazam');
};
// argument types
const multiply = (value1, value2) => {
    return value1 * value2;
};
multiply(4, 3); //?
// func types
let myMultiply;
//myMultiply = sayHello;
myMultiply = multiply;
myMultiply(5, 5); //?
// objs
let userData = {
    name: 'Henri',
    age: 98
};
// complex objs
let complex = {
    data: [1, 513.6, 99],
    output: function () {
        return this.data;
    }
};
complex; //?
// complex = true; nope
// union types - either or
let myNumberOrString;
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
let canBeNull = 12;
canBeNull = null;
// default params
const countdown = (start = 10) => {
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
const makeArr = (...args) => {
    return args;
};
makeArr(1, 2, 14941, 32); //?
