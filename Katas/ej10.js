const numbers = [12, 21, 38, 5, 45, 37, 6]

let sum = 0
function average(param) {
  for (let i = 0; i < param.length; i++) {
    const sumAll = param[i]
    sum = sumAll + sum
  }

  return sum / param.length
}

console.log(average(numbers))
