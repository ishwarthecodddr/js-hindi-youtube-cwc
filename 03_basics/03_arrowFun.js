// this keyword is used to refer the current context{block scope}

const addTwo = (num1, num2) => {
    return num1+num2             //explicit return
}
const addTwoI = (num1, num2) =>(num1+num2)     //implicit return 
console.log(addTwo(1, 2))
console.log(addTwoI(1,2))