class calculator{
    constructor(){
    this.num1 = 10;
    this.num2 = 10;
    }

Add(){
    console.log("Addition");
    return {
        num1: this.num1,
        num2: this.num2,
        result: this.num1 + this.num2,
        type: "Add"
    }
}

Sub(){
    console.log("Subtract");
    this.sub = this.num1 - this.num2
    console.log(this.sub);
}

Multiply(){
    console.log("Multiply");
    this.mul = this.num1 * this.num2
    console.log(this.mul);
}

Divide(){
    console.log("Divide");
    this.div = this.num1 / this.num2
    console.log(this.div);
}
}

class Calculation extends calculator{
    constructor(){
        super()
        this.myCalculations = [
            {
            num1: 10,
            num2: 10,
            result: 20,
            type: "Add"
            },
            {
            num1: 10,
            num2: 10,
            result: 0,
            type: "Sub"
            },
            {
            num1: 10,
            num2: 10,
            result: 100,
            type: "Mul"
            },
            {
            num1: 10,
            num2: 10,
            result: 1,
            type: "Div"
            }
        ]
    }
  
    getAllCalculations() {
        console.log("All Calculations");
        console.log(this.myCalculations);
    }
}

const mycalculations = new Calculation()
mycalculations.getAllCalculations()

    // calculation.Sub()
    // calculation.Multiply()
    // calculation.Divide()