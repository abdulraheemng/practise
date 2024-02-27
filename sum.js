const sumOfTwoNumbers= function (num1, num2) {
    return num1 + num2 
}

//sumOfTwoNumbers(3,5)

const sumOfThreeNumbers= function (num1, num2, num3) {
    return sumOfTwoNumbers(num1, num2) + num3
}
console.log(sumOfThreeNumbers(3,5,8));

/* A sum function that can sum any number of argument */

// Two argument

const sumoftwonumbers = function (num1, num2)
{
    return num1 * num2
}

const sumofthreenumbers = function (num1, num2, num3)
{
return sumoftwonumbers(num1, num2) * num3
}
console.log (sumofthreenumbers(3,4,5))


const anyNumberOfArguement = function (arguments)

{
    let sum = 0;
    for (let argument of arguments ) sum += argument
    return sum;
}
console.log (anyNumberOfArguement(3,5))

console.log (anyNumberOfArguement(3,9,4))



/*

function sum (...arguments)

{
    let sum = 0;
    for (let argument of arguments) sum += argument
    return sum;
}
console.log (sum(3,5,88))
*/

const sumOfAnyNoOfArgument = function (...arguments)
{
    let sumOfAnyNoOfArgument = 0
    for (let argument of arguments ) sumOfAnyNoOfArgument += argument
    return sumOfAnyNoOfArgument
}
console.log (sumOfAnyNoOfArgument(3,6,99))