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
    this.holder.insertAdjacentHTML(
      "afterend",
      `<audio  autoplay><source src="" type="audio/ogg"></audio>`
    );

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
    let soundTag = document.querySelector("audio");
    soundTag.src = "mixkit-sea-swimming-loop-1181.wav";
    return soundTag;
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

      if (this.level === 190) {
        document.querySelector(".wave").classList.add("rainbow");
        document.querySelector("audio").src =
          "mixkit-retro-video-game-bubble-laser-277.wav";
      }
      if (this.level === 200) {
        document.querySelector(".wave").classList.remove("rainbow");
        this.level = 10;
        this.htmlRef.style.height = this.level + "vh";
        this.htmlRef.style.backgroundColor = "blue";
        this.playWave().currentTime = 0;
        this.playWave().pause();
      }
    };
  }
}

export default Zeespiegel;
