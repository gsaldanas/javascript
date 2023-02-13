import '../css/style.scss';
import axios from 'axios';

//variables
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
const pokemonTemplate = document.querySelector('#pokemonlist').innerHTML;
const pagTemplate = document.querySelector('#pagination');
console.log(pokemonTemplate);

//get pokemon api url
async function getPokemons(base_url) {
  try {
    document.querySelector('.pokemons').innerHTML = '';
    const response = await axios.get(base_url);

    //showPokemons(response.data.results);
    response.data.results.forEach(async (pokemon) => {
      const pokemonDetail = await axios.get(pokemon.url);

      //console.log(pokemonDetail.data);
      document.querySelector('.pokemons').innerHTML += pokemonTemplate
        .replace('%NAME%', pokemonDetail.data.name)
        .replace(
          '%IMG%',
          pokemonDetail.data.sprites.other.dream_world.front_default
        )
        .replace('%TYPE%', pokemonDetail.data.types[0].type.name)
        .replace('%URL%', pokemon.url);
      // console.log(pokemonDetail.data.sprites);
      // if (pokemonDetail.data.types[0].type.name == 'grass') {
      //   document.querySelector('.pokemonCard').style.background = '#47D0B3';
      // }
      //console.log(pokemonDetail.data.versions.generation-v.black-white.animated);
      //console.log(pokemonDetail.data.sprites.other.official-artwork);
    });

    const pagNode = pagTemplate.content.cloneNode(true);
    // console.log(pagNode.querySelector('.next'));
    pagNode.querySelector('.next').addEventListener('click', (e) => {
      getPokemons(response.data.next);
    });
    pagNode.querySelector('.prev').addEventListener('click', (e) => {
      if (response.data.previous != null) {
        getPokemons(response.data.previous);
      }
    });
    document.querySelector('.pages').innerHTML = '';
    document.querySelector('.pages').appendChild(pagNode);
    console.log(pagNode);
  } catch (error) {
    console.error(error);
  }
}
getPokemons(BASE_URL);

//show pokemons and show output in html template
// function showPokemons(data, url) {
//   console.log(data);
//   document.querySelector('.pokemons').innerHTML = data
//     .map(({ name, sprites }) =>
//       pokemonTemplate
//         .replace('%NAME%', name)
//         .replace('%IMG%', sprites.front_default)
//         .replace('%URL%', url)
//     )
//     .join('');
// }

// //get pokemons sprites
// async function getPokemonImage(url) {
//   try {
//     const response = await axios.get(url);
//     console.log(response.data.sprites.front_default);

//     //const imageUrl = response.data.sprites.front_default;
//   } catch (error) {
//     console.error(error);
//   }
// }

//show pokemons
// async function showPokemons(data, prev, next) {
//   console.log(data);
//   const pokemonImages = await Promise.all(
//     data.map(async ({ name, url }) => {
//       const imageUrl = await getPokemonImage(url);
//       console.log(imageUrl);
//       return pokemonTemplate
//         .replace('%NAME%', name)
//         .replace('%IMG%', imageUrl)
//         .replace('%URL%', url);
//     })
//   );

//   document.querySelector('.pokemons').innerHTML = pokemonImages.join('');
// }
//TESTING
// function getImages(data) {
//   data.forEach((pokemon) => {
//     let image = getPokemonImage();
//     console.log(image);
//   });
// }

// function showPokemons(data, prev, next) {
//   console.log(data);
//   console.log(pokemonTemplate);
//   let pokemonsCards = data
//     .map((pokemon) =>
//       pokemonTemplate.replace('%NAME%', pokemon.name).replace('%IMG%', '#')
//     )
//     .join('');
//   console.log(pokemonsCards);
//   document.querySelector('.pokemons').innerHTML = pokemonsCards;
// }
