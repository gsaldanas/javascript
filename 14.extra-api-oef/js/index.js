import '../css/style.scss';
import axios from 'axios';

/* VARS */
const form = document.querySelector('form');
const grid = document.querySelector('.cocktailgrid');
const cocktailCardTemplate = document.getElementById('cocktailcard').innerHTML;
const searchInput = document.querySelector('form input');

//on form submit
form.onsubmit = async (e) => {
  //stop refresh
  e.preventDefault();
  const {
    data: { drinks },
  } = await axios(
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' +
      searchInput.value
  );
  //doorloop de data array met een map
  grid.innerHTML = drinks
    .map(({ strDrink, strDrinkThumb }) =>
      cocktailCardTemplate
        .replace('%IMG%', 'strDrinkThumb')
        .replaceAll('%COCKTAIL%', 'strDrink')
    )
    .join('');
};

//add event listener
// form.addEventListener("submit",()=>{})
