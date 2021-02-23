class square {
  constructor (side){
    this.side = side;
  }
  //add methods
  perimeter(){
    this.perimeter = this.side * 4;
  }
  area(){
    this.area = this.side ** 2;
  }
  diagonal(){
    this.diagonal = (Math.sqrt(2))*(this.side ** 2);
  }
  //return description
  describe(){
    return `Square with side ${this.side} has perimeter of ${this.perimeter}, area of ${this.area}, and diagonal of ${this.diagonal}`;
  }
}

const newSquares = [];
// add 3 squares to the list
newSquares.push(new square(5));
newSquares.push(new square(7));
newSquares.push(new square(12));