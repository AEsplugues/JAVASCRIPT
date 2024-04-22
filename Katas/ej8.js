const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(param) {
  let longestWord = param[0]

  for (let i = 0; i < param.length; i++) {
    const currentWord = param[i]
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord
    }
  }

  return longestWord
}

console.log(findLongestWord(avengers))
