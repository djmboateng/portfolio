const loader=document.getElementById('loader'),loadStart=performance.now();
let loaderClosed=false;
function hideLoader(){
  if(loaderClosed)return;loaderClosed=true;
  loader.classList.add('done');
  document.documentElement.classList.remove('is-loading');
  setTimeout(()=>loader.remove(),700);
}
window.addEventListener('load',()=>setTimeout(hideLoader,Math.max(0,1600-(performance.now()-loadStart))));
setTimeout(hideLoader,5000);

document.querySelectorAll('nav a').forEach(a=>a.onclick=e=>{e.preventDefault();document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});});

document.querySelectorAll('[data-tab-group]').forEach(group=>{
  const section=group.closest('section');
  const items=section.querySelectorAll('[data-category]');
  group.querySelectorAll('.tab').forEach(tab=>tab.addEventListener('click',()=>{
    group.querySelector('.active').classList.remove('active');
    tab.classList.add('active');
    const category=tab.dataset.tab;
    items.forEach(item=>item.classList.toggle('is-hidden',category!=='all'&&item.dataset.category!==category));
  }));
});

const lb=document.getElementById('lightbox'),lbImg=lb.querySelector('img');
document.querySelectorAll('.project-media img').forEach(t=>t.onclick=()=>{lbImg.src=t.src;lbImg.alt=t.alt;lb.classList.add('open');});
lb.onclick=()=>lb.classList.remove('open');
document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('open');});