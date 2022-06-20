function isEven(number) {
  if (number % 2 == 0) {
    console.log(`${number} is EVEN`)
  } else {
    console.log(`${number} is NOT EVEN`)
  }
}
isEven(10)
isEven(11)

function isOdd(number) {
  if (number % 2 != 0) {
    console.log(`${number} is ODD`)
  } else {
    console.log(`${number} is NOT ODD`)
  }
}
isOdd(10)
isOdd(11)

function Add(num1, num2) {
  console.log(`${num1}+${num2} = ${num1 + num2}`)
}
Add(10, 20)

function Sub(num1, num2) {
  console.log(`${num1}-${num2} = ${num1 - num2}`)
}
Sub(20, 10)

function Mul(num1, num2) {
  console.log(`${num1}*${num2} = ${num1 * num2}`)
}
Mul(20, 10)
function Div(num1, num2) {
  console.log(`${num1}/${num2} = ${num1 / num2}`)
}
Div(20, 5)

function Sqr(num) {
  console.log(`${num}^2 = ${num * num}`)
}
Sqr(5)
