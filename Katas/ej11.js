const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
function averageWord(param) {
  let sum = 0
  let text = 0
  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] === 'number') {
      sum = sum + param[i]
      /* console.log(sum) */
    } else if (typeof param[i] === 'string') {
      text = text + param[i].length
      /* console.log(text) */
    }
  }

  return sum + text
}

console.log(averageWord(mixedElements))
