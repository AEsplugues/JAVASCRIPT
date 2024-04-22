const placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
]

/* Tengo que crear un bucle for que recorra el array y elimine la id 11 y 14, después haré un console del resultado */

const newPlaces = []

for (let i = 0; i < placesToTravel.length; i++) {
  if (placesToTravel[i].id !== 11 && placesToTravel[i].id !== 14) {
    newPlaces.push(placesToTravel[i])
  }
}

console.log(newPlaces)
