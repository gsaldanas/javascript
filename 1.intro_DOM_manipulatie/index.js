console.log("test");
//1. hoe kan ik elementen selecten
console.log(document.getElementById("paragraph"));
console.log(document.getElementsByClassName("test"));
//HTML collection => [i] length
const liMetClassTest = document.getElementsByClassName("test");
for (let i = 0; i < liMetClassTest.length; i++) {
  console.log(liMetClassTest[i]);
}
document.querySelector("ul");
//nodelist(arrayLike) => [i], .length .forEach
const lijstMetLis = document.querySelectorAll("ul li");
[...lijstMetLis].forEach(function (el) {
  console.log(el);
});

for (let i = 0; i < lijstMetLis.length; i++) {
  console.log(lijstMetLis[i]);
}
//2. hoe kan ik gebeurtenis  van de gebruiker opvangen
//a. eventHandler
let clicked = 0;
function h1Handler() {
  clicked++;
  console.log("geklikt op de h1");
  if (clicked === 5) {
    document.querySelector("h1").onclick = null;
  }
}
//document.querySelector("h1").onmouseenter = h1Handler;

//b eventlistener
document.querySelector("p").addEventListener(
  "click",
  function (e) {
    console.log("clicked op p");
  },
  {
    once: true,
  }
);

//nadelen, ge kunt het alleen instellen of afzetten
// document.querySelector("h1").onclick = function () {
//   window.alert("hallo dit is inderdaad de h1 =D");
// };

//3. hoe kan ik styling van elementen manipuleren

document.querySelector("h1").onclick = function () {
  //document.querySelector("p").style.backgroundColor = "#FFFF00";
  document.querySelector("p").classList.toggle("rainbowWay");
};

//4. hoe kan ik html injecten/manipuleren?
