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

Jet.prototype.AssignPilot = function (name, yearsOfExperience, hasChildren) {
  this.pilot = {
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
        return (this.base/4) * Math.sqrt(4*Math.pow(this.equalSide, 2) - Math.pow(this.base, 2))
    }
}

let eqTriangle = new SimpleEllipse(4)
console.log(`SimpleEllipse equal side: ${eqTriangle.majorRadius}`)
eqTriangle.majorRadius = 5

let isTriangle = new IsoscelesTriangle(4, 5)
console.log(`IsoscelesTriangle square: ${isTriangle.square()}`)
