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
// classes
class Person {
    constructor(name, username) {
        this.username = username;
        this.age = 98; // descendants of Person have access to a protected prop
        this.name = name;
    }
    printAge() {
        console.log(this.age);
    }
    setType(type) {
        this.type = type;
        console.log(this.type);
    }
}
const mickey = new Person('Mickey', 'mick'); //?
mickey.printAge();
/* mickey.setType('Hobgoblin'); */
class Henri extends Person {
    constructor(username) {
        super('Henri', username);
        this.name = 'Henri';
        this.age = 35;
        // console.log(this.type);
    }
}
const henri = new Henri('six_sigma');
henri;
// getters & setters
class Plant {
    constructor() {
        this._species = 'default';
    }
    get species() {
        return this._species;
    }
    set species(value) {
        if (value.length > 3) {
            this._species = value;
        }
        else {
            this._species = 'default';
        }
    }
}
const plant = new Plant();
plant.species = 'orchid';
plant;
// static props & methods - useful for helpers
class Helpers {
    static calcCircumference(diameter) {
        return this.PI * diameter;
    }
}
Helpers.PI = 3.41;
2 * Helpers.PI; //?
Helpers.calcCircumference(21); //?
// abastract classes - used purely for extending basic setup (archtype)
class Project {
    constructor() {
        this.projectName = 'default';
        this.budget = 10000;
    }
    calcBudget() {
        return this.budget * 4;
    }
}
class CoolProject extends Project {
    changeName(name) {
        this.projectName = name;
    }
}
const evenCoolerProject = new CoolProject();
evenCoolerProject.projectName = 'hypercool project';
evenCoolerProject; //?
// private constructors / singletons / readonly
class JustOne {
    constructor(name) {
        this.name = name;
    } // is accessible
    static getInstance() {
        if (!JustOne.instance) {
            // if doesn't exist, create singleton
            JustOne.instance = new JustOne('the only one');
        }
        return JustOne.instance;
    }
}
// let wrong = new JustOne('the only one'); can't instantiate from outside
let right = JustOne.getInstance(); //?
