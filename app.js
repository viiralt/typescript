var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// string
let myfirstName = 'Henri';
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
const returnfirstName = (myfirstName) => {
    return myfirstName;
};
returnfirstName('benny'); //?
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
    firstName: 'Henri',
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
    constructor(firstName, userfirstName) {
        this.userfirstName = userfirstName;
        this.age = 98; // descendants of Person have access to a protected prop
        this.firstName = firstName;
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
    constructor(userfirstName) {
        super('Henri', userfirstName);
        this.firstName = 'Henri';
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
        this.projectfirstName = 'default';
        this.budget = 10000;
    }
    calcBudget() {
        return this.budget * 4;
    }
}
class CoolProject extends Project {
    changefirstName(firstName) {
        this.projectfirstName = firstName;
    }
}
const evenCoolerProject = new CoolProject();
evenCoolerProject.projectfirstName = 'hypercool project';
evenCoolerProject; //?
// private constructors / singletons / readonly
class JustOne {
    constructor(firstName) {
        this.firstName = firstName;
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
const greetPerson = (person) => {
    console.log(`hello, ${person.firstName}`);
};
const person = {
    firstName: 'Henri',
    age: 99,
    hobbies: ['cooking', 'sports'],
    greet(lastName) {
        console.log(`hi there, I'm ${this.firstName} ${lastName}`);
    }
};
greetPerson(person);
person.greet('Limbojon!');
class Person2 {
    greet(lastName) {
        console.log(`hi there, I'm ${this.firstName} ${lastName}`);
    }
}
const myPerson = new Person2();
myPerson.firstName = 'John';
myPerson.greet('anything'); //?
let doubleFunc;
doubleFunc = function (val1, val2) {
    return (val1 + val2) * 2;
};
doubleFunc(10, 20); //?
const oldPerson = {
    age: 49,
    firstName: 'Steve',
    greet(lastName) {
        console.log('hello');
    }
};
oldPerson;
oldPerson.greet('buuu');
// simple generic
const echo = (data) => {
    return data;
};
echo('Henri'); //?
// <T> designates a generitc
const betterEcho = (data) => {
    return data;
};
betterEcho(27); //?
betterEcho({ name: 'henri', age: 13 }); //?
// built-in generics
const testResults = [1.94, 51.515];
testResults.push(23);
testResults;
// testResults.push('bu');
console.log(testResults);
const printAll = (args) => {
    args.map(el => console.log(el));
};
printAll(['lul', 'bubu']); //?
// generic types
// a user-specified type of func that will return the input type
const echo2 = betterEcho;
echo2('boom!'); //?
// generic classes
// type is generic, either a num or str
class SimpleMath {
    calculate() {
        return this.baseVal * +this.mutliplyVal; // using + casts prop as enumerable type? == <number>
    }
}
const simpleMath = new SimpleMath();
simpleMath.baseVal = 10;
simpleMath.mutliplyVal = 30;
simpleMath.calculate(); //?
// decorators - funcs attached to smth
const logged = (constructorFunc) => {
    console.log(constructorFunc);
};
let Human = class Human {
    constructor() {
        console.log('hola!');
    }
};
Human = __decorate([
    logged
], Human);
// factory decoratos
const logging = (value) => {
    return value ? logged : null;
};
;
class Car {
}
// advanced decorators
const printable = (constructorFunc) => {
    constructorFunc.prototype.print = function () {
        console.log(this);
    };
};
let Banana = class Banana {
    constructor() {
        this.name = 'Musa acuminata';
    }
};
Banana = __decorate([
    logging(true),
    printable
], Banana);
const commonBanana = new Banana();
commonBanana.print();
// method decorators
const editable = (value) => {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
};
// prop decorators
const overwritable = (value) => {
    return function (target, propName) {
        const newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
};
class SomeProject {
    constructor(name) {
        this.projectName = name;
    }
    calcBudget() {
        console.log(1000);
    }
}
__decorate([
    overwritable(true)
], SomeProject.prototype, "projectName", void 0);
__decorate([
    editable(false)
], SomeProject.prototype, "calcBudget", null);
const project = new SomeProject('hypercool project');
project.calcBudget();
project.calcBudget = function () {
    console.log(2000); // non-editable, will not break but logs 1000 2x
};
project.calcBudget();
// param decorator
const printInfo = (target, methodName, paramIndex) => {
    console.log(`target:${target}`);
    console.log(`methodName:${methodName}`);
    console.log(`paramIndex:${paramIndex}`);
};
class Course {
    constructor(name) {
        this.name = name;
    }
    printStudentNumbers(mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    }
}
__decorate([
    __param(1, printInfo)
], Course.prototype, "printStudentNumbers", null);
const course = new Course('massively awesome course');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anything', false);
