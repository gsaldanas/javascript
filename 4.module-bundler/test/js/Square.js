import randomColor from "randomColor";
import rc from "randomColor";
class Sqaure {
  constructor(options = {}) {
    this.clicked = 0;
    this.holder = options.holder || document.body;
    this.size = options.size || this.generateRandomNumber(300);
    this.x = options.x || this.generateRandomNumber(600);
    this.y = options.y || this.generateRandomNumber(450);
    this.color = options.color || randomColor();
    this.htmlRef = this.generateInitialHTML();
    this.setStyling();
    this.setEvents();
    this.animationLoop();
  }
  animationLoop() {
    setInterval(function () {
      document.body.style.backgroundColor = randomColor();
    }, 2000);
  }
  generateInitialHTML() {
    this.holder.insertAdjacentHTML(
      "beforeend",
      `<div class="square">${this.clicked}</div>`
    );
    return this.holder.querySelector(":last-child");
  }
  generateRandomNumber(number) {
    return Math.floor(Math.random() * number);
  }

  setStyling() {
    this.htmlRef.style.width = this.size + "px";
    this.htmlRef.style.height = this.size + "px";
    this.htmlRef.style.backgroundColor = this.color;
    this.htmlRef.style.position = "absolute";
    this.htmlRef.style.left = this.x + "px";
    this.htmlRef.style.top = this.y + "px";
  }
  updateNr() {
    this.htmlRef.innerText = this.clicked;
  }
  setEvents() {
    //console.log(this);
    //use arrow function not to bind
    this.htmlRef.onclick = () => {
      this.clicked++;
      this.htmlRef.style.backgroundColor = randomColor();
      this.updateNr();
    };
  }
}
export default Sqaure;
