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

// classes
class Person {
  name: string;
  private type: string;
  protected age: number = 98; // descendants of Person have access to a protected prop

  constructor(name: string, public username: string) {
    this.name = name;
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
  name = 'Henri';
  constructor(username: string) {
    super('Henri', username);
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
