// (9 % 2) + 1 = 2

function TriangleArea(b = 7, height = 3) {
  let square = (b * height) / 2;
  console.log(`Square: ${b}`);
  return square;
}

TriangleArea(3, 6);
TriangleArea();

function Boat(color, maxSpeed, maxTonnage, brand, countryOfRegistration) {
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.maxTonnage = maxTonnage;
  this.brand = brand;
  this.countryOfRegistration = countryOfRegistration;
}

Boat.prototype.AssignCaptain = function (name, yearsOfExperience, hasChildren) {
  this.captain = {
    name: name,
    yearsOfExperience: yearsOfExperience,
    hasChildren: hasChildren,
  };
};

let boat2 = new Boat("blue", 400.5, 232, "Boeing", "Kyiv");
boat2.AssignCaptain("Marchak Liudmyla", "25", true);
console.log(boat2);

class SimpleCircle {
  constructor(majorRadius) {
    this.majorRadius = majorRadius;
  }
  get majorRadius() {
    return this._majorRadius;
  }
  set majorRadius(val) {
    this._majorRadius = val;
  }
}

class SimpleEllipse extends SimpleEllipse {
    constructor(majorRadius, minorRadius) {
        super(majorRadius);
        this.minorRadius = minorRadius;
    }
    square() {
        return  Math.PI * (this.majorRadius) * (this.minorRadius)
    }
}

let simCircle = new SimpleCircle(3)
console.log(`SimpleCircle major radius: ${SimpleCircle.majorRadius}`)
simEllipse.majorRadius = 4

let simEllipse = new SimpleEllipse(3, 4)
console.log(`SimpleEllipse square: ${SimpleEllipse.square()}`)

function SubGenerator(num) {
    return function(x) {
        return x - num;
    }
}

var subtractFive = SubGenerator(5)

var result1 = subtractFive(10)
console.log("Result 1:", result1) 

var subtractSeven = SubGenerator(7)

var result2 = subtractSeven(20)
console.log("Result 2:", result2)