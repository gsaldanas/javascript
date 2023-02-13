import Crosshair from "./Crosshair";
import Enemy from "./Enemy";
new Crosshair();
new Enemy();

//spawn random enemy
function spawnEnemy() {
  setInterval(() => {
    new Enemy();
  }, 500);
}
spawnEnemy();

window.addEventListener("kill", function (e) {
  console.log(e);
  document.body.style.backgroundColor = "red";
  setTimeout(function () {
    document.body.style.backgroundColor = "black";
  }, 50);
});
