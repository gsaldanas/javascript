class Enemy {
  constructor() {
    this.holder = document.body;
    this.ref = this.init();

    //custom events!!!
    this.value = Math.floor(Math.random() * 11);
    this.killEvent = new CustomEvent("kill", {
      detail: this.value,
    });
    this.styling();
    this.events();
    //this.listEnemies = [];
    //this.randomSpawn();
  }

  //generate html
  init() {
    this.holder.insertAdjacentHTML("afterbegin", ` <div class="enemy"></div>`);
    return this.holder.querySelector(".enemy");
  }

  // randomSpawn() {
  //   this.init();
  //   setInterval(random, 1000);
  // }
  //events on enemy
  events() {
    this.ref.onclick = (e) => {
      //pointer events none toepassen

      this.ref.style.display = "none";
      window.dispatchEvent(this.killEvent);
    };

    window.addEventListener("kill", () => {
      this.ref.style.filter = "sepia(100%)";
    });
  }

  //styling
  styling() {
    this.ref.style.left =
      Math.floor(Math.random() * (window.innerWidth - 100 + 1)) + "px";
    this.ref.style.top =
      Math.floor(Math.random() * (window.innerHeight - 100 + 1)) + "px";
  }
  //generate random posiition enemy
  randomPosition(number) {
    return Math.floor(Math.random() * number); //55
  }
  // //calcRange
  // calcRange(min,max){
  //     window.innerHeight - w

  // }
  //generate random enemy
}
export default Enemy;
// enemy komt random op het scherm, x en y random
//window . innerwidth en innerheight om scherm te breken
//O plus de helft van breedte enemy (margin left) breedte scherm - 30px random spawnen
//om de twee seconden een nieuw enemy tonen met set interval()

//een functie dat een nieuw enemy toont

//afknallen bloodspat png
//alle enemies in een array steken 10 miliseconden
//custom event
