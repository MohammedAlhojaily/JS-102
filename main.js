
function operation(firstNumber, secondNumber, opCallback){
    return `[${opCallback(firstNumber, secondNumber)}]`
}

console.log(operation(5,2,(firstNumber, secondNumber) => firstNumber + secondNumber))