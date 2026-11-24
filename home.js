
var T=[
["AI PDF Assistant","Read, summarize and ask anything from your PDF.","tool.html?t=pdf-assistant","pdf summarize document ask","#7c5cf0","M6 3h9l4 4v14H6zM14 3v5h5M9 13h6M9 17h6"],
["Image to Text (OCR)","Extract text from images, receipts and documents.","tool.html?t=image-to-text","ocr image text receipt photo scan","#2f80ed","M4 5h16v14H4zM4 15l5-5 4 4 3-3 4 4"],
["Audio to Text","Convert audio or voice recordings into text.","tool.html?t=audio-to-text","audio voice speech transcribe","#e8467c","M5 10v4M9 6v12M13 9v6M17 4v16M21 10v4"],
["AI Translator","Translate text, documents and images in 100+ languages.","tool.html?t=translator","translate language text","#22b573","M4 5h9M8 3v2M6 9c1 3 4 5 7 6M12 5c-1 5-4 8-8 10M14 21l4-10 4 10M15 18h6"],
["Text Summarizer","Turn long text into a short, clear summary.","tool.html?t=summarizer","summary summarize shorten text","#f2b01e","M5 6h14M5 11h14M5 16h9"],
["AI Email Writer","Write professional and effective emails instantly.","tool.html?t=email-writer","email write draft message","#a44cf0","M3 6h18v12H3zM3 7l9 7 9-7"],
["File Converter","Convert between PDF, JPG, PNG, Word and more.","tool.html?t=file-converter","convert pdf jpg png word file","#1b9af0","M7 7h11l-3-3M17 17H6l3 3"],
["Document Assistant","Extract key details, tables and important information.","tool.html?t=document-assistant","document extract tables data scan","#f2703a","M6 3h9l4 4v14H6zM9 12h6M9 16h4"]];
function cost(){return "Free to use"}
var g=document.getElementById("grid");
T.forEach(function(t){var a=document.createElement("a");a.className="card";a.href=t[2];
a.innerHTML='<div class="ic" style="background:'+t[4]+'"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="'+t[5]+'"/></svg></div><h3>'+t[0]+'</h3><p>'+t[1]+'</p><span class="cost">Free to use</span><span class="go">Open tool →</span>';g.appendChild(a)});
var q=document.getElementById("q"),r=document.getElementById("res");
function find(s){s=s.trim().toLowerCase();if(!s)return[];var w=s.split(/\s+/);return T.filter(function(t){var h=(t[0]+" "+t[1]+" "+t[3]).toLowerCase();return w.every(function(x){return h.indexOf(x)>-1})})}
function show(){var s=q.value,m=find(s);if(!s.trim()){r.hidden=true;return}r.hidden=false;r.innerHTML="";
if(!m.length){var p=document.createElement("p");p.textContent="No tool matches “"+s.trim()+"”. Try “PDF”, “translate” or “scan”.";r.appendChild(p);return}
m.forEach(function(t){var a=document.createElement("a");a.href=t[2];a.setAttribute("role","option");var b=document.createElement("b");b.textContent=t[0];var sm=document.createElement("small");sm.textContent=t[1];a.append(b,sm);r.appendChild(a)})}
q.addEventListener("input",show);
document.getElementById("sf").addEventListener("submit",function(e){e.preventDefault();var m=find(q.value);if(m.length)location.href=m[0][2];else show()});
document.addEventListener("click",function(e){if(!e.target.closest(".search"))r.hidden=true});
var rg=document.getElementById("rg");rg.addEventListener("input",function(){document.getElementById("af").style.clipPath="inset(0 0 0 "+rg.value+"%)";document.getElementById("kn").style.left=rg.value+"%"});
// Monetization is intentionally disabled for the launch. AdSense code is added only after approval.
var ADS={enabled:false};
var nb=document.getElementById("nb"),nq=document.getElementById("nq"),no=document.getElementById("no");
nb.addEventListener("click",function(){var m=nq.value.trim();if(!m){nq.focus();return}
if(!window.DOITNOW.API_BASE){no.hidden=false;no.className="out err";no.textContent="NEXORA AI isn’t connected yet. Add your backend address (API_BASE) in config.js.";return}
no.hidden=false;no.className="out ld";no.innerHTML='<span class="sp"></span>NEXORA AI is working…';nb.disabled=true;
var c=new AbortController(),t=setTimeout(function(){c.abort()},30000);
fetch(window.DOITNOW.API_BASE.replace(/\/$/,"")+"/api/nexora",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:m}),signal:c.signal})
.then(function(r){if(!r.ok)throw new Error(r.status);return r.json()})
.then(function(d){if(!d||typeof d.reply!=="string")throw new Error("bad");no.className="out ok";no.textContent=d.reply})
.catch(function(){no.className="out err";no.textContent="NEXORA AI isn’t available right now, so there’s no answer to show. Check your connection and try again, or open a tool directly."})
.finally(function(){clearTimeout(t);nb.disabled=false})});
var bg=document.getElementById("bg"),mn=document.getElementById("menu");bg.addEventListener("click",function(){var o=mn.classList.toggle("open");bg.setAttribute("aria-expanded",o)});
mn.addEventListener("click",function(){mn.classList.remove("open")});
