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
