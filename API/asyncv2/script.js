const getData = (url) =>
  new Promise(function (res, rej) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        const gegevens = JSON.parse(xhttp.responseText);
        res(gegevens);
      }
      if (xhttp.readyState === 4 && xhttp.status === 404) {
        rej("server kon niet bereikt worden");
      }
    };
    xhttp.open("GET", url);
    xhttp.send();
  });

getData("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then(function (data) {
    console.log(data); // data.drinks[0].strDrink
  })
  .catch(function (error) {
    console.log(error);
  });

getData("https://api.spacexdata.com/v2/info/roadster")
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
