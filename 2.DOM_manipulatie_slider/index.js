/*
VARS
*/
let pos = 0;
/*
DOM REFERENCES
*/

const leftBtn = document.querySelector("#slider .btn-left");
const rightBtn = document.querySelector("#slider .btn-right");
const slider = document.querySelector("#slider ul");

//verhoog pas als right aangeklikt
rightBtn.onclick = function () {
  pos++;
  animate();
  leftBtn.classList.remove("hidden");
  if (pos === 5) {
    rightBtn.classList.add("hidden");
  }
  console.log(pos);
};

//verminder met left click
leftBtn.onclick = function () {
  pos--;
  animate();
  rightBtn.classList.remove("hidden");
  if (pos === 0) {
    leftBtn.classList.add("hidden");
  }
  console.log(pos);
};

function animate() {
  slider.style.marginLeft = -800 * pos + "px";
}
