import axios from 'axios';

//detail template
const detailTemplate = document.querySelector('#pokemonDetails').innerHTML;

//event listener
document.querySelector('.pokemons').addEventListener('click', (e) => {
  console.log(e.target);
  e.preventDefault();
  if (e.target.tagName != 'A') return;
  loadStats(e.target.href);
  document.querySelector('.pokemons').classList.toggle('is-hidden');
  document.querySelector('.pokemons__details').classList.toggle('is-hidden');
});

//fetching
async function loadStats(url) {
  try {
    document.querySelector('.pages').innerHTML = '';
    const response = await axios.get(url);
    console.log(response.data.name);
    document.querySelector('.pokemons__details').innerHTML += detailTemplate
      // name
      .replace('%NAME%', response.data.name)
      // moves
      .replace('%move1%', response.data.moves[0].move.name)
      .replace('%move2%', response.data.moves[1].move.name)
      .replace('%move3%', response.data.moves[2].move.name)
      .replace('%move4%', response.data.moves[3].move.name)
      //   stats
      .replace('%hp%', response.data.stats[0].base_stat)
      .replace('%attack%', response.data.stats[1].base_stat)
      .replace('%deffence%', response.data.stats[2].base_stat)
      .replace('%special%', response.data.stats[3].base_stat)
      .replace('%SRC%', response.data.sprites.other.dream_world.front_default);
  } catch (error) {
    console.error(error);
  }
}
// //go back
// document.querySelector('a.go-back').addEventListener('click', (e) => {
//   console.log(e);
//   document.querySelector('.pokemons').classList.toggle('is-hidden');
//   document.querySelector('.pokemons__details').classList.toggle('is-hidden');
// });
