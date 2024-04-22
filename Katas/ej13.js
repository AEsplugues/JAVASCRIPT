const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function finderName(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (element === array[i]) {
      return `${true}, posicion: ${i}`
    }
  }
  return false
}

console.log(finderName(nameFinder, 'Angel')) // true, posición 1
