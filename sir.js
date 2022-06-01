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

Multiply(){
    console.log("Multiply");
    return {
        num1: this.num1,
        num2: this.num2,
        result: this.num1 * this.num2,
        type: "Mul"
    }
}

static Divide(v1, v2){
    console.log("Divide");
    return {
        num1: v1,
        num2: v2,
        result: v1 / v2,
        type: "Div"
    }
  }
}

class Calculation extends calculator{
    constructor(){
        super()
        this.myCalculations = []   
    }
  
    // getAllCalculations() {
    //     console.log("All Calculations");
    //     console.log(this.myCalculations);
    // }

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

    doDivision(v1, v2){
        const result = this.Divide(v1, v2)
        this.myCalculations.push(result)
    }
  }
  
//   const mycalculations = new Calculation()
  
//    Calculation.doAddition()
//    Calculation.doSubtraction()
//    Calculation.doMultiplication()

console.log( calculator.Divide(50, 2))
   console.log("All Calculations");
//    console.log(a);
//    console.log(mycalculations.myCalculations);


   //    mycalculations.getAllCalculations()


//        console.log(Ans);
    // calculation.Sub()
    // calculation.Multiply()
    // calculation.Divide()