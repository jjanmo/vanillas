import"./modulepreload-polyfill-9p4a8sJU.js";(function(){const s=document.querySelectorAll(".about-button"),e=document.querySelector(".title"),r=document.querySelectorAll(".bg-button"),a=["2022년 6월 29일 수요일 밤 9시 첫방송! 본방사수","이상한 변호사 우영우의 대형 로펌 생존기","똑바로 읽어도 거꾸로 읽어도 우영우입니다"];let n=0;const i=t=>{const l=t.target,m=l.dataset.target,b=document.querySelector(`#${m}`),h=l.parentNode.children[0];b.classList.toggle("show"),h.classList.toggle("darken")},c=()=>a[Math.floor(Math.random()*3)],u=()=>{e.textContent="",n=0,o(c())},o=t=>{e.textContent.length<t.length?(e.textContent+=t.charAt(n),n++,setTimeout(()=>{o(t)},100)):setTimeout(u,3500)},d=()=>{const t=document.querySelector(".container");t.classList.toggle("bg1"),t.classList.toggle("bg2")};function g(){s.forEach(t=>t.addEventListener("click",i)),r.forEach(t=>t.addEventListener("click",d)),o(c())}g()})();
