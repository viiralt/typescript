var MyGeo;
(function (MyGeo) {
    const PI = 3.14;
    MyGeo.calculateCircumference = (diameter) => {
        return diameter * PI;
    };
    MyGeo.calculateRetangle = (width, height) => {
        return width * height;
    };
})(MyGeo || (MyGeo = {}));
Object.keys(MyGeo); //?
MyGeo.calculateRetangle(30, 23); //?
/// <reference path='circleMath.ts'/>
