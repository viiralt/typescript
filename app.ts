// string
let myfirstName: string = 'Henri';

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
const returnfirstName = (myfirstName: string) => {
  return myfirstName;
};
returnfirstName('benny'); //?

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
let userData: { firstName: string; age: number } = {
  firstName: 'Henri',
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

// classes
class Person {
  firstName: string;
  private type: string;
  protected age: number = 98; // descendants of Person have access to a protected prop

  constructor(firstName: string, public userfirstName: string) {
    this.firstName = firstName;
  }

  printAge() {
    console.log(this.age);
  }

  protected setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}
const mickey = new Person('Mickey', 'mick'); //?
mickey.printAge();
/* mickey.setType('Hobgoblin'); */

class Henri extends Person {
  firstName = 'Henri';
  constructor(userfirstName: string) {
    super('Henri', userfirstName);
    this.age = 35;
    // console.log(this.type);
  }
}
const henri = new Henri('six_sigma');
henri;

// getters & setters
class Plant {
  private _species: string = 'default';

  get species() {
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = 'default';
    }
  }
}
const plant = new Plant();
plant.species = 'orchid';
plant;

// static props & methods - useful for helpers
class Helpers {
  static PI: number = 3.41;
  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}
2 * Helpers.PI; //?
Helpers.calcCircumference(21); //?

// abastract classes - used purely for extending basic setup (archtype)
abstract class Project {
  projectfirstName: string = 'default';
  budget: number = 10000;
  abstract changefirstName(firstName: string): void;
  calcBudget() {
    return this.budget * 4;
  }
}

class CoolProject extends Project {
  changefirstName(firstName: string): void {
    this.projectfirstName = firstName;
  }
}
const evenCoolerProject = new CoolProject();
evenCoolerProject.projectfirstName = 'hypercool project';
evenCoolerProject; //?

// private constructors / singletons / readonly
class JustOne {
  private static instance: JustOne;
  private constructor(public readonly firstName: string) {} // is accessible

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

// interfaces - guarantee of existing props/methods
interface firstNamedPerson {
  firstName: string;
  age?: number; // optional param ?:
  [propName: string]: any; // if not sure what the props will be called
  greet(lastName: string): void;
}

const greetPerson = (person: firstNamedPerson) => {
  console.log(`hello, ${person.firstName}`);
};

const person = {
  firstName: 'Henri',
  age: 99,
  hobbies: ['cooking', 'sports'],
  greet(lastName: string) {
    console.log(`hi there, I'm ${this.firstName} ${lastName}`);
  }
};

greetPerson(person);
person.greet('Limbojon!');

class Person2 implements firstNamedPerson {
  firstName: string;
  greet(lastName: string) {
    console.log(`hi there, I'm ${this.firstName} ${lastName}`);
  }
}

const myPerson = new Person2();
myPerson.firstName = 'John';

myPerson.greet('anything'); //?

// interface func types
interface doubleValueFunc {
  (number: number, number2: number): number;
}

let doubleFunc: doubleValueFunc;
doubleFunc = function(val1: number, val2: number) {
  return (val1 + val2) * 2;
};
doubleFunc(10, 20); //?

// interface inheritance
interface AgedPerson extends firstNamedPerson {
  age: number;
}

const oldPerson: AgedPerson = {
  age: 49,
  firstName: 'Steve',
  greet(lastName: string) {
    console.log('hello');
  }
};
oldPerson;
oldPerson.greet('buuu');

// simple generic
const echo = (data: any) => {
  return data;
};
echo('Henri'); //?

// <T> designates a generitc
const betterEcho = <T>(data: T) => {
  return data;
};
betterEcho<number>(27); //?
betterEcho<object>({ name: 'henri', age: 13 }); //?

// built-in generics
const testResults: Array<number> = [1.94, 51.515];
testResults.push(23);
testResults;
// testResults.push('bu');
console.log(testResults);

const printAll = <T>(args: T[]) => {
  args.map(el => console.log(el));
};
printAll<string>(['lul', 'bubu']); //?

// generic types
// a user-specified type of func that will return the input type
const echo2: <T>(data: T) => T = betterEcho;
echo2<string>('boom!'); //?

// generic classes
// type is generic, either a num or str
class SimpleMath<T extends number | string> {
  baseVal: T;
  mutliplyVal: T;
  calculate(): number {
    return <number>this.baseVal * +this.mutliplyVal; // using + casts prop as enumerable type? == <number>
  }
}
const simpleMath = new SimpleMath<number>();
simpleMath.baseVal = 10;
simpleMath.mutliplyVal = 30;
simpleMath.calculate(); //?

// decorators - funcs attached to smth
const logged = (constructorFunc: Function) => {
  console.log(constructorFunc);
};

@logged
class Human {
  constructor() {
    console.log('hola!');
  }
}
// factory decoratos
const logging = (value: boolean) => {
  return value ? logged : null;
};

@logging(false);
class Car {}

// advanced decorators
const printable = (constructorFunc: Function) => {
  constructorFunc.prototype.print = function() {
    console.log(this);
  };
};

@logging(true)
@printable
class Banana {
  name = 'Musa acuminata';
}
const commonBanana = new Banana();
commonBanana.print();

// method decorators
const editable = (value: boolean) => {
  return function(target: any, propName: string, descriptor: PropertyDescriptor) {
    descriptor.writable = value;
  }
}

// prop decorators
const overwritable = (value: boolean) => {
  return function(target: any, propName: string): any {
    const newDescriptor: PropertyDescriptor = {
      writable: value
    };
    return newDescriptor;
  }
}

class SomeProject {
  @overwritable(true)
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }
  @editable(false)
  calcBudget() {
    console.log(1000);
  }
}

const project = new SomeProject('hypercool project');
project.calcBudget();
project.calcBudget = function() {
  console.log(2000); // non-editable, will not break but logs 1000 2x
}
project.calcBudget();

// param decorator
const printInfo = (target: any, methodName: string, paramIndex: number) => {
  console.log(`target:${target}`);
  console.log(`methodName:${methodName}`);
  console.log(`paramIndex:${paramIndex}`);
}

class Course {
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }

  printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    if(printAll) {
      console.log(10000);
    } else {
      console.log(2000);
    }
  }
}

const course = new Course('massively awesome course');
course.printStudentNumbers('anything', true); 
course.printStudentNumbers('anything', false); 
