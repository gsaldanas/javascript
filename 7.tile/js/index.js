import randomColor from "randomcolor";
import Tile from "./Tile";

const tiles = [];
let teller = 0;

document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    console.log("Space pressed");
    tiles.push(new Tile());
    teller++;
    console.log(teller);
    console.log(tiles);
    if (teller >= 2) {
      startChanging();
    }
  }
  function changeSize(tileObj) {
    tileObj.ref.classList.toggle("active");
  }

  function startChanging() {
    tiles.forEach(function (tile) {
      setInterval(function () {
        changeSize(tile);
      }, 1000);
    });
  }

  function shrinkSize(tileObj) {
    tileObj.ref.classList.toggle("active");
  }

  // document.addEventListener("click", (event) => {
  //   tiles.forEach(function (tileObj) {
  //     tileObj.ref.classList.remove("active");
  //   });

  //   console.log("clicked");
  // });

  // setInterval(function () {
  //   allTiles.forEach(function (event) {
  //     event.ref.classList.remove("active");
  //   });
  // }, 1000);
  // event.ref.classList.add("active");
  // // .ref.classList.remove("active");
});

// changeSize = function () {
//   allTiles[teller].ref.classList.add("active");
// };

// setInterval(function () {
//   allTiles.forEach(function (tileObj) {
//     tileObj.ref.classList.remove("active");
//   });

//   allTiles[teller].ref.classList.add("active");
// }, 200);
