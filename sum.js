const sumOfTwoNumbers= function (num1, num2) {
    return num1 + num2 
}

//sumOfTwoNumbers(3,5)

const sumOfThreeNumbers= function (num1, num2, num3) {
    return sumOfTwoNumbers(num1, num2) + num3
}
console.log(sumOfThreeNumbers(3,5,8))