const numbers = [1, 2, 3, 5, 45, 37, 58]
let result = 0
function sumAll(param) {
  for (let i = 0; i < param.length; i++) {
    const value = param[i]
    result = value + result
  }

  return result
}

console.log(sumAll(numbers))

/* 1 sumali 2 i guardau en una constant ---> 3 */
