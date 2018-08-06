namespace MyGeo {
  const PI = 3.14;
  export const calculateCircumference = (diameter: number): number => {
    return diameter * PI;
  };
  export const calculateRetangle = (width: number, height: number): number => {
    return width * height;
  };
}

Object.keys(MyGeo); //?
MyGeo.calculateRetangle(30, 23); //?

/// <reference path='circleMath.ts'/>
