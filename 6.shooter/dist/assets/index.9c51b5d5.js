(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();class c{constructor(){this.x=200,this.y=200,this.ref=this.init(),this.events()}init(){return document.body.insertAdjacentHTML("afterbegin",' <div class="crosshair"></div>'),document.querySelector(".crosshair")}events(){document.body.onmousemove=n=>{this.x=n.clientX,this.y=n.clientY,this.styling()},document.body.onclick=()=>{document.querySelector("#sound").currentTime=.5,document.querySelector("#sound").play()}}styling(){this.ref.style.left=this.x+"px",this.ref.style.top=this.y+"px"}}class s{constructor(){this.holder=document.body,this.ref=this.init(),this.events(),this.styling(),this.listEnemies=[]}init(){return this.holder.insertAdjacentHTML("afterbegin",' <div class="enemy"></div>'),this.holder.querySelector(".enemy")}events(){this.ref.onclick=n=>{this.ref.style.display="none"}}styling(){this.ref.style.left=Math.floor(Math.random()*(window.innerWidth-100+1))+"px",this.ref.style.top=Math.floor(Math.random()*(window.innerHeight-100+1))+"px"}randomPosition(n){return Math.floor(Math.random()*n)}}new c;new s;function d(){setInterval(()=>{new s},500)}d();
