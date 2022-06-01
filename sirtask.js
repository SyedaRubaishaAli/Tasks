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
    return {
        num1: this.num1,
        num2: this.num2,
        result: this.num1 - this.num2,
        type: "Sub"
    }
}

Mul(){
    console.log("Multiply");
    return {
        num1: this.num1,
        num2: this.num2,
        result: this.num1 * this.num2,
        type: "Mul"
    }
}

Div(){
    console.log("Divide");
    return {
        num1: this.num1,
        num2: this.num2,
        result: this.num1 / this.num2,
        type: "Div"
    }
  }
}
class Calculation extends calculator{
    constructor(){
        super()
        this.myCalculations = []   
    }

    doAddition(){
        const result = this.Add()
        this.myCalculations.push(result)
    }

    doSubtraction(){
        const result = this.Sub()
        this.myCalculations.push(result)
    }

    doMultiplication(){
        const result = this.Multiply()
        this.myCalculations.push(result)
    }

    doDivision(){
        const result = this.Divide()
        this.myCalculations.push(result)
    }
  }
  
  const mycalculations = new Calculation()
   Calculation.doAddition()
   Calculation.doSubtraction()
   Calculation.doMultiplication()
   Calculation.doDivision()
   console.log(mycalculations.myCalculations);
