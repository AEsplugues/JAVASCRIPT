/* 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]; */
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers[0])

console.log('------------------------------')

/* 1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]; */
avengers[0] = 'IRONMAN'
console.log(avengers)

console.log('------------------------------')

/* 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]; */

console.log(avengers.length)

console.log('------------------------------')

/* 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"]; */
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']

rickAndMortyCharacters.push('Morty', 'Summer')
/* console.log(rickAndMortyCharacters) */
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])

console.log('------------------------------')

/* 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]; */

const rickAndMortyCharactersSecondArray = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]

rickAndMortyCharactersSecondArray.pop()
/* console.log(rickAndMortyCharactersSecondArray) */
console.log(rickAndMortyCharactersSecondArray[0])
console.log(
  rickAndMortyCharactersSecondArray[
    rickAndMortyCharactersSecondArray.length - 1
  ]
)

console.log('------------------------------')

/* 1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]; */
rickAndMortyCharactersSecondArray.splice(1, 1)
console.log(rickAndMortyCharactersSecondArray)
