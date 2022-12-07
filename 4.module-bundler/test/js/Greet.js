function Greet(name) {
  this.name = name;
}

Greet.prototype.sayHi = function () {
  return `Hello ${this.name} how are you doing`;
};

export default Greet;
