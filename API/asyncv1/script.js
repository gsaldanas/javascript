//data ophalen
const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = () => {
  if (xhttp.readyState === 4 && xhttp.status === 200) {
    const data = JSON.parse(xhttp.responseText);
    console.log(data.drinks[0].strDrink);
    console.log(data.drinks[0].strInstructions);
    console.log(data.drinks[0].strDrinkThumb);
  }
};
xhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/random.php");
xhttp.send();
