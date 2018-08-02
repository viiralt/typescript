"use strict";
// string
var myName = 'Henri';
myName = 28;
// number
var myNumber = 24;
myNumber = 'Henri';
// boolean
var hasHobbies;
hasHobbies = 1;
// assign types
var myRealAge;
myRealAge = '23';
// arrays
hasHobbies = ['cooking', 'fitness', 'photography'];
hasHobbies[1]; //?
typeof hasHobbies; //?
var hobbies = [123, 'boom', true];
hobbies; //?
// tuples - mixed, sequential type
var address = ['somestreet', 132 - 22];
address = [132 - 22, 'bububu'];
// enums - serialising, must be capped!
var Color;
(function (Color) {
    Color[Color["grey"] = 0] = "grey";
    Color[Color["green"] = 1] = "green";
    Color[Color["red"] = 2] = "red";
})(Color || (Color = {}));
Color; //?
var myColor = Color.red;
myColor; //?
// any
var car = 'hippo'; //?
car = { 1:  };
car; //?
