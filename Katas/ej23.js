const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]

const shortMovies = []
const midMovies = []
const longMovies = []

for (let i = 0; i < movies.length; i++) {
  if (movies[i].durationInMinutes < 100) {
    shortMovies.push(movies[i])
  } else if (movies[i].durationInMinutes > 200) {
    longMovies.push(movies[i])
  } else {
    midMovies.push(movies[i])
  }
}
console.log('Las pelicualas cortas son:')
console.log(shortMovies)
console.log('Las pelicualas medianas son:')
console.log(midMovies)
console.log('Las pelicualas largas son:')
console.log(longMovies)
