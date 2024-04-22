const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]

function repeatCounter(param) {
  const word = {}

  for (let i = 0; i < param.length; i++) {
    if (word[param[i]] >= 1) {
      word[param[i]]++
    } else {
      word[param[i]] = 1
    }
  }
  console.log(word)
}

repeatCounter(counterWords)
