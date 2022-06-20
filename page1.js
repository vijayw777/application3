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
function Sub(num1, num2) {
  console.log(`${num1}-${num2} = ${num1 - num2}`)
}
Sub(20, 10)
