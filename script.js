import {client,imageUrl,projectsQuery,settingsQuery,sanityConfigured} from './sanity.js'
import fallbackProjects from './data/projects.json'
const menu=document.querySelector('.menu'),nav=document.querySelector('nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const projectsRoot=document.querySelector('.projects');
const aboutSection=document.querySelector('#about'),workSection=document.querySelector('#work');if(aboutSection&&workSection)workSection.before(aboutSection);
const PAGE_SIZE=6;
let allProjects=[],projectPage=0;
const normalizeMedia=m=>(m||[]).map(x=>x._type==='image'?{type:'image',src:imageUrl(x.asset),alt:x.alt||''}:{type:(x.mime||'').startsWith('video/')?'video':'file',src:x.src,alt:x.alt||''});
const resumeDownloadName=originalName=>{const extension=String(originalName||'').match(/\.[a-z0-9]+$/i)?.[0]||'.pdf';const monthYear=new Intl.DateTimeFormat('en',{month:'long',year:'numeric'}).format(new Date());return `Linoy Stephen Sr Designer CV ${monthYear}${extension}`};
async function loadProjects(){
  allProjects=fallbackProjects.filter(p=>p.published!==false);
  renderProjects();
  if(!sanityConfigured)return;
  try{
    const projects=(await client.fetch(projectsQuery)).map(p=>({...p,media:normalizeMedia(p.media)}));
    if(projects.length){allProjects=projects;projectPage=0;renderProjects()}
    const settings=await client.fetch(settingsQuery);
    if(settings?.resumeUrl){const link=document.querySelector('#resumeLink');const filename=resumeDownloadName(settings.resumeName);const separator=settings.resumeUrl.includes('?')?'&':'?';link.href=`${settings.resumeUrl}${separator}dl=${encodeURIComponent(filename)}`;link.download=filename}
  }catch(e){console.warn('Sanity content unavailable; showing local portfolio content.',e)}
}
function renderProjects(){const start=projectPage*PAGE_SIZE;const projects=allProjects.slice(start,start+PAGE_SIZE);projectsRoot.innerHTML=projects.map((p,i)=>{const image=p.media?.find(m=>m.type==='image');return `<article class="project" data-project="${esc(p.id)}" tabindex="0" role="button" aria-label="View ${esc(p.title)} project"><div class="media">${image?`<img src="${esc(image.src)}" alt="${esc(image.alt)}">`:''}<span class="project-category">${esc(p.category)}</span></div><div class="project-copy"><b>${String(start+i+1).padStart(2,'0')}</b><div><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p></div><button class="project-open">View more ↗</button></div></article>`}).join('');projectsRoot.querySelectorAll('[data-project]').forEach((el,i)=>{const open=()=>openProject(projects[i]);el.onclick=open;el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}}});const next=document.querySelector('#loadMoreProjects'),previous=document.querySelector('#previousProjects'),count=document.querySelector('#projectCount');const end=Math.min(start+projects.length,allProjects.length);if(count)count.textContent=`Projects ${start+1}–${end} of ${allProjects.length}`;if(previous)previous.hidden=projectPage===0;if(next)next.hidden=end>=allProjects.length}
const changeProjectPage=nextPage=>{projectPage=nextPage;renderProjects();requestAnimationFrame(()=>projectsRoot.scrollIntoView({behavior:'smooth',block:'start'}))};
document.querySelector('#loadMoreProjects')?.addEventListener('click',()=>changeProjectPage(projectPage+1));
document.querySelector('#previousProjects')?.addEventListener('click',()=>changeProjectPage(Math.max(0,projectPage-1)));
function videoEmbed(url){if(!url)return'';let src=url;if(/youtu\.be|youtube\.com/.test(url)){const id=url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{6,})/)?.[1];if(id)src=`https://www.youtube.com/embed/${id}`}else if(/vimeo\.com/.test(url)){const id=url.match(/vimeo\.com\/(\d+)/)?.[1];if(id)src=`https://player.vimeo.com/video/${id}`}return `<iframe src="${esc(src)}" title="Project video" allow="autoplay; fullscreen" allowfullscreen></iframe>`}
function openProject(p){
  let modal=document.querySelector('#projectModal');
  if(!modal){modal=document.createElement('dialog');modal.id='projectModal';document.body.appendChild(modal)}
  const media=[...(p.media||[])];
  if(p.videoUrl)media.push({type:'embed',src:p.videoUrl,alt:'Project video'});
  const services=(p.services||[]).join?.(', ')||p.services||'';
  const thumb=m=>m.type==='image'?`<img src="${esc(m.src)}" alt="">`:`<span class="thumb-play">▶</span>`;
  modal.innerHTML=`<button class="modal-close" aria-label="Close">×</button><section class="case-viewer"><div class="case-stage" aria-live="polite"></div>${media.length>1?`<button class="slide-arrow slide-prev" aria-label="Previous media">←</button><button class="slide-arrow slide-next" aria-label="Next media">→</button>`:''}<div class="case-thumbs">${media.map((m,i)=>`<button class="case-thumb${i===0?' active':''}" data-slide="${i}" aria-label="Show ${m.type==='image'?'image':'video'} ${i+1}">${thumb(m)}</button>`).join('')}</div><span class="slide-count"></span></section><header><span>${esc(p.category)} · ${esc(p.year)}</span><h2>${esc(p.title)}</h2><p>${esc(p.summary)}</p></header><div class="case-meta"><div><b>Client</b><span>${esc(p.client||'Selected project')}</span></div><div><b>Services</b><span>${esc(services)}</span></div>${p.websiteUrl?`<a href="${esc(p.websiteUrl)}" target="_blank" rel="noopener">Visit website ↗</a>`:''}</div><div class="case-copy"><p>${esc(p.description)}</p></div>`;
  let active=0;
  const show=index=>{active=(index+media.length)%media.length;const m=media[active];const stage=modal.querySelector('.case-stage');stage.innerHTML=m.type==='image'?`<img src="${esc(m.src)}" alt="${esc(m.alt)}">`:m.type==='video'?`<video controls src="${esc(m.src)}"></video>`:videoEmbed(m.src);modal.querySelectorAll('.case-thumb').forEach((el,i)=>el.classList.toggle('active',i===active));const count=modal.querySelector('.slide-count');if(count)count.textContent=`${active+1} / ${media.length}`};
  modal.querySelectorAll('.case-thumb').forEach(el=>el.onclick=()=>show(Number(el.dataset.slide)));
  modal.querySelector('.slide-prev')?.addEventListener('click',()=>show(active-1));
  modal.querySelector('.slide-next')?.addEventListener('click',()=>show(active+1));
  modal.querySelector('.modal-close').onclick=()=>modal.close();
  if(media.length)show(0);
  modal.showModal();
}
loadProjects();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
