class calculator{
    constructor(num1= 30, num2 = 20){
    this.num1 = 30;
    this.num2 = 20;
    }

Add(){
    console.log("Addition");
    this.add = this.num1 + this.num2
    console.log(this.add);
    return    {
        num1: this.num1,
        num2: this.num2,
        result: this.num1 + this.num2,
        type: "Add"
        },
}

Sub(){
    console.log("Substract");
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
            result: 100,
            type: "Mul"
            },
    ]
    }

    getAllCalculations() {

    }
}

const calculation = new calculator()

    a = calculation.Add()
    console.log(a);
    calculation.Sub()
    calculation.Multiply()
    calculation.Divide()