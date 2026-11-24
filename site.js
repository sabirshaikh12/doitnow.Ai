// Auto-detects images by file name. Upload logo / robot / before / after / favicon with any of
// .webp .png .jpg .svg into the assets folder (or the repo root) and they appear. No code edits.
(function(){var EXT=["webp","png","jpg","svg"],DIR=["assets/",""];
function probe(u){return new Promise(function(r){var i=new Image();i.onload=function(){r(u)};i.onerror=function(){r(null)};i.src=u})}
function find(n){var l=[];DIR.forEach(function(d){EXT.forEach(function(e){l.push(d+n+"."+e)})});
return Promise.all(l.map(probe)).then(function(r){return r.filter(Boolean)[0]||null})}
document.querySelectorAll("img[data-asset]").forEach(function(el){find(el.dataset.asset).then(function(u){if(!u)return;
el.src=u;el.hidden=false;el.decoding="async";var h=el.dataset.hide&&document.querySelector(el.dataset.hide);if(h)h.style.display="none"})});
find("favicon").then(function(u){if(!u)return;var l=document.querySelector("link[rel=icon]");if(l)l.href=u})})();
