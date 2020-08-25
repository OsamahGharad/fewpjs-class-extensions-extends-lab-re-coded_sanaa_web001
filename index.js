// Your code here

class Poligon {
  constructor(sides) {
    this.sides=sides;
  }
  get countSides(){
    return this.sides.count;
  }
  get perimeter(){
    return sides.reduce((sum,side) => sum +side,0);
  }
}//end class Poligon

class Triangle extends Poligon{

  get isValid(){
    if(sides.indexOf(0)+sides.indexOf(1) >sides.indexOf(2)){
      return true;
    }
    return false;
  }
}
//end class triangle

class square extends Poligon {
  get isValid(){
    return (sides[0]===sides[2] && sides[1] ===sides[3] &&sides[0]===sides[1])
  }
  get area(){
    if(this.isValid)
    return this.sides[0] * this.sides[1];
  }
}
