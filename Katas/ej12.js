const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]

function removeDuplicates(param) {
  let uniqueArray = []

  for (let i = 0; i < param.length; i++) {
    if (uniqueArray.indexOf(param[i]) === -1) {
      uniqueArray.push(param[i])
    }
  }

  return uniqueArray
}

console.log(removeDuplicates(duplicates))
