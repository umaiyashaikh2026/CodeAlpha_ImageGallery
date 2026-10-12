const items=[
 {title:'Fern on a Sunday',cat:'nature',tag:'GREEN THINGS',h:300,id:'photo-1497250681960-ef046c08a56e'},
 {title:'Somewhere in the city',cat:'spaces',tag:'LITTLE PLACES',h:240,id:'photo-1487958449943-2429e8be8625'},
 {title:'Ocean daydream',cat:'nature',tag:'BLUE MOOD',h:330,id:'photo-1500375592092-40eb2168fd21'},
 {title:'Sunlight on the wall',cat:'spaces',tag:'SLOW MORNING',h:280,id:'photo-1511818966892-d7d671e672a2'},
 {title:'Petals & plans',cat:'details',tag:'FLOWER CLUB',h:220,id:'photo-1490750967868-88aa4486c946'},
 {title:'The forest knows',cat:'nature',tag:'TAKE A WALK',h:350,id:'photo-1441974231531-c6227db76b6e'},
 {title:'A tiny old doorway',cat:'spaces',tag:'FOUND IT',h:260,id:'photo-1511818966892-d7d671e672a2'},
 {title:'A pocket of green',cat:'nature',tag:'PLANT FRIEND',h:315,id:'photo-1448375240586-882707db888b'},
 {title:'Little everyday magic',cat:'details',tag:'SLOW DOWN',h:235,id:'photo-1490312278390-ab64016e0aa9'},
 {title:'Lake of the day',cat:'nature',tag:'POSTCARD',h:330,id:'photo-1470770841072-f978cf4d019e'},
 {title:'Shapes & shadows',cat:'spaces',tag:'LOOK UP',h:275,id:'photo-1511818966892-d7d671e672a2'},
 {title:'Growing quietly',cat:'details',tag:'NEW LEAVES',h:250,id:'photo-1501004318641-b39e6451bec6'}
];
const gallery=document.getElementById('gallery'),box=document.getElementById('lightbox');let shown=items.slice(),index=0;
function render(filter='all'){shown=items.filter(x=>filter==='all'||x.cat===filter);gallery.innerHTML=shown.map((x,i)=>`<figure class="card" data-index="${i}"><img loading="lazy" style="height:${x.h}px" src="https://images.unsplash.com/${x.id}?auto=format&fit=crop&w=760&q=85" alt="${x.title}"><figcaption><span>${x.title}</span><span>${x.tag}</span></figcaption></figure>`).join('')}
document.querySelector('.filters').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;document.querySelectorAll('.filters button').forEach(x=>x.classList.toggle('active',x===b));render(b.dataset.filter)});
function show(i){index=(i+shown.length)%shown.length;let x=shown[index];document.getElementById('large-image').src=`https://images.unsplash.com/${x.id}?auto=format&fit=max&w=1400&q=90`;document.getElementById('large-image').alt=x.title;document.getElementById('caption').textContent=x.title+'  ·  '+x.tag;box.classList.add('open')}
gallery.addEventListener('click',e=>{let c=e.target.closest('.card');if(c)show(Number(c.dataset.index))});
document.querySelector('.close').addEventListener('click',()=>box.classList.remove('open'));document.querySelector('.prev').addEventListener('click',()=>show(index-1));document.querySelector('.next').addEventListener('click',()=>show(index+1));box.addEventListener('click',e=>{if(e.target===box)box.classList.remove('open')});
document.addEventListener('keydown',e=>{if(!box.classList.contains('open'))return;if(e.key==='Escape')box.classList.remove('open');if(e.key==='ArrowLeft')show(index-1);if(e.key==='ArrowRight')show(index+1)});
render();
