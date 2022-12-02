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
//nodelist
document.querySelectorAll("ul li");
//2. hoe kan ik gebeurtenis  van de gebruiker opvangen
//3. hoe kan ik styling van elementen manipuleren
//4. hoe kan ik html injecten/manipuleren?
