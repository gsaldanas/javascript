import "../css/style.scss";
import axios from "axios";
async function main() {
  //const{data:{bpi:{EUR:{rate,symbol}}}}
  const response = await axios(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  if (response.data) {
    console.log(response.data.bpi);
    console.log(response.data.bpi.EUR.rate);
    console.log(response.data.bpi.EUR.symbol);
    document.querySelector("body h1 span").innerHTML =
      response.data.bpi.EUR.rate;
  } else {
    console.log("data not loaded");
  }
}

main();
