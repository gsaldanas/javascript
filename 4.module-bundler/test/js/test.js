(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) s(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const i of t.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function h(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function s(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = h(e);
    fetch(e.href, t);
  }
})();
function r() {
  return Math.floor(Math.random() * 100);
}
function n(o) {
  return Math.floor(Math.random() * o);
}
class c {
  constructor() {
    (this.holder = document.body),
      (this.level = 10),
      (this.color = "lightblue"),
      (this.htmlRef = this.generateInitialHtml()),
      this.setStyling(),
      this.setEvents();
  }
  generateInitialHtml() {
    return (
      this.holder.insertAdjacentHTML("beforeend", '<div class="ocean"></div>'),
      this.holder.querySelector(":last-child")
    );
  }
  setStyling() {
    (this.htmlRef.style.height = this.level + "vh"),
      (this.htmlRef.style.backgroundColor = this.color),
      this.moveFish(),
      this.moveBoat();
  }
  moveFish() {
    (document.querySelector(".fa-fish").style.bottom =
      n(this.level - 1) + "vh"),
      (document.querySelector(".fa-fish").style.left = r() + "vw");
  }
  moveBoat() {
    (document.querySelector(".fa-sailboat").style.bottom = this.level + "vh"),
      (document.querySelector(".fa-sailboat").style.left = r() + "vw");
  }
  setEvents() {
    (this.htmlRef.onclick = () => {
      console.log("clicked"),
        (this.level = this.level + 10),
        (this.htmlRef.style.height = this.level + "vh"),
        this.moveFish(),
        this.moveBoat(),
        console.log(this.level),
        this.level === 50 &&
          ((this.htmlRef.style.backgroundColor = "blue"),
          (document.querySelector(".fa-fish").style.color = "white")),
        this.level === 100 &&
          ((this.htmlRef.style.backgroundColor = "black"),
          document.querySelector("audio").play()),
        this.level === 110 &&
          ((this.level = 10),
          (this.htmlRef.style.height = this.level + "vh"),
          (this.htmlRef.style.backgroundColor = "lightblue"),
          (document.querySelector(".fa-fish").style.color = "black"),
          this.moveFish(),
          this.moveBoat(),
          document.querySelector("audio").pause(),
          (document.querySelector("audio").currentTime = 0));
    }),
      (document.querySelector(".fa-fish").onmouseover = () => {
        this.moveFish();
      });
  }
}
new c();
