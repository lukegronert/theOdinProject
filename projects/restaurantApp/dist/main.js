(()=>{"use strict";function e(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("ul");["home","menu","contact"].forEach((e=>{const t=document.createElement("li");t.innerHTML=e,t.classList.add(e+"Button"),n.appendChild(t)})),t.appendChild(n),t.classList.add("navbarDiv"),e.appendChild(t)}function t(){const e=document.querySelector("#content"),t=document.createElement("footer");e.appendChild(t)}const n=document.querySelector("#content");function c(){n.innerHTML="",e(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("h1"),c=document.createTextNode("Luke's Restaurant");n.appendChild(c),t.appendChild(n);const d=document.createElement("p"),o=document.createTextNode("A dining experience like no other. Join us!");n.classList.add("homeTitle"),d.classList.add("homeP"),d.appendChild(o),t.appendChild(d),t.classList.add("main"),e.appendChild(t)})(),t()}document.addEventListener("click",(d=>{d.target==document.querySelector(".homeButton")&&c(),d.target==document.querySelector(".menuButton")&&(n.innerHTML="",e(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("menuMain"),[{name:"Item1",desc:"Description1",price:"$5.00"},{name:"Item2",desc:"Description2",price:"$5.00"},{name:"Item3",desc:"Description3",price:"$5.00"},{name:"Item4",desc:"Description4",price:"$5.00"},{name:"Item5",desc:"Description5",price:"$5.00"},{name:"Item5",desc:"Description5",price:"$5.00"}].forEach((e=>{const n=document.createElement("div");n.classList.add("foodItem");const c=document.createElement("h2"),d=document.createTextNode(e.name);c.appendChild(d);const o=document.createElement("p"),a=document.createTextNode(e.desc);o.appendChild(a);const i=document.createElement("p"),r=document.createTextNode(e.price);i.appendChild(r),i.classList.add("price"),n.appendChild(c),n.appendChild(o),n.appendChild(i),t.appendChild(n)})),e.appendChild(t)})(),t()),d.target==document.querySelector(".contactButton")&&(n.innerHTML="",e(),renderContact(),t())})),c()})();