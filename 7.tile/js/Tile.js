import randomColor from "randomcolor";
class Tile {
  constructor() {
    this.color = randomColor();
    this.ref = this.init();
    this.styling();
  }
  init() {
    //div in de body vooraan te includen
    document.body.insertAdjacentHTML("afterbegin", ` <div class="tile"></div>`);
    return document.body.querySelector(".tile");
  }
  styling() {
    this.ref.style.backgroundColor = randomColor();
  }
}

export default Tile;
