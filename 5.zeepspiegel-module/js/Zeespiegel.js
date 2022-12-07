class Zeespiegel {
  constructor(options = {}) {
    this.level = 10;
    this.holder = options.holder || document.body;
    this.width = options.width;
    this.height = options.height;
    this.color = options.color;
    this.position = options.position;
    this.htmlRef = this.generateInitialHTML();
    this.setStyling();
    this.setEvents();
  }
  generateInitialHTML() {
    this.holder.insertAdjacentHTML("beforeend", `<div class="wave"></div>`);
    return this.holder.querySelector(":last-child");
  }
  setStyling() {
    this.htmlRef.style.width = this.width + "vw";
    this.htmlRef.style.height = this.height + "vh";
    this.htmlRef.style.backgroundColor = this.color;
    this.htmlRef.style.position = "absolute";
    this.htmlRef.style.bottom = this.position + "px";
  }
  setDanger() {
    this.htmlRef.style.backgroundColor = "red";
  }
  playWave() {
    document.body.insertAdjacentHTML(
      "afterbegin",
      '<audio  autoplay><source src="../audio/mixkit-sea-swimming-loop-1181.wav" type="audio/ogg"></audio>'
    );
  }
  playSong() {
    document.body.insertAdjacentHTML(
      "beforeend",
      '<audio autoplay><source src="../audio/trance-20652.mp3" type="audio/ogg"></audio>'
    );
  }

  setEvents() {
    //console.log(this);
    //use arrow function not to bind
    this.htmlRef.onclick = () => {
      console.log(this.level);
      this.playWave();
      this.level = this.level + 10;
      this.htmlRef.style.height = this.level + "vh";
      if (this.level === 100) {
        this.setDanger();
      }
      if (this.level === 130) {
        this.playWave.currentTime = 0;
      }
      if (this.level === 140) {
        this.playSong();
      }
      if (this.level === 210) {
        this.level = 10;
        this.htmlRef.style.height = this.level + "vh";
        this.htmlRef.style.backgroundColor = "blue";
        this.playSong.currentTime = 0;
        //this.htmlRef.classList.add = "rainbow";
      }
    };
  }
}

export default Zeespiegel;
