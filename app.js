const S=window.SITE,$=s=>document.querySelector(s);
const img=(id,w,h)=>`https://res.cloudinary.com/${S.cloud}/image/upload/f_auto,q_auto,${h?`c_fill,g_auto,w_${w},h_${h}`:`c_limit,w_${w}`}/${id}`;
const wa=t=>`https://wa.me/${S.wa}?text=${encodeURIComponent(t)}`;
const enq=n=>wa(`Hello Nakamula Furnitures, I am interested in your ${n}. Kindly share more details and pricing.`);
const esc=s=>String(s||'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const money=p=>p?'KSh '+Number(p).toLocaleString():'Enquire for price';
let P=[],cat='All';
$('#wa1').href=wa('Hello Nakamula Furnitures, I would like to enquire about your furniture.');
document.querySelectorAll('.wa').forEach(a=>a.href=wa('Hello Nakamula Furnitures, I would like to enquire about your furniture.'));
document.querySelectorAll('.tel').forEach(a=>a.href='tel:+'+S.wa);
document.querySelectorAll('.map').forEach(a=>a.href=S.maps);
const card=(p,i)=>`<article class="card">${p.images[0]?`<img loading="lazy" width="400" height="300" src="${img(p.images[0],400,300)}" alt="${esc(p.name)} - ${esc(p.category)} at Nakamula Furnitures, Githurai 45">`:'<div class="ph"></div>'}<div class="b"><h3>${esc(p.name)}</h3><div class="pr">${money(p.price)}</div><button class="btn d" onclick="show(${i})">View Details</button><a class="btn g" target="_blank" rel="noopener" href="${enq(p.name)}">WhatsApp Enquiry</a></div></article>`;
function draw(){
  const vis=P.filter(p=>!p.hidden);
  const fe=vis.filter(p=>p.featured);
  $('#feat').innerHTML=(fe.length?fe:vis.slice(0,8)).map(p=>card(p,P.indexOf(p))).join('')||'<p class="sub">Our catalogue is being updated. Chat with us on WhatsApp to see our latest furniture.</p>';
  $('#cats').innerHTML=S.cats.slice(0,5).map(c=>{const p=vis.find(x=>x.category===c&&x.images[0]);return`<div class="cat" onclick="pick('${c}')">${p?`<img loading="lazy" src="${img(p.images[0],500,375)}" alt="${c}">`:''}<span>${c}</span></div>`}).join('');
  const used=['All',...S.cats.filter(c=>vis.some(p=>p.category===c))];
  $('#chips').innerHTML=used.map(c=>`<button class="${c==cat?'on':''}" onclick="pick('${c}')">${c}</button>`).join('');
  $('#all').innerHTML=vis.filter(p=>cat=='All'||p.category==cat).map(p=>card(p,P.indexOf(p))).join('');
  const ld={"@context":"https://schema.org","@type":"ItemList",itemListElement:vis.slice(0,30).map((p,k)=>({"@type":"ListItem",position:k+1,item:{"@type":"Product",name:p.name,description:p.description||p.name+' - '+p.category+' at Nakamula Furnitures, Githurai 45, Nairobi',category:p.category,image:p.images[0]?img(p.images[0],1000):undefined,offers:{"@type":"Offer",priceCurrency:"KES",price:p.price||undefined,availability:"https://schema.org/InStock",seller:{"@type":"Organization",name:"Nakamula Furnitures"}}}}))};
  $('#ld').textContent=JSON.stringify(ld);
}
function pick(c){cat=c;draw();document.getElementById('furniture').scrollIntoView({behavior:'smooth'})}
function show(i){const p=P[i];$('#md .in').innerHTML=`<button class="x" onclick="md.classList.remove('on')" aria-label="Close">&times;</button>${p.images[0]?`<img class="main" id="mm" src="${img(p.images[0],1000)}" alt="${esc(p.name)}">`:''}<div class="th">${p.images.map(m=>`<img src="${img(m,150,110)}" alt="" onclick="mm.src='${img(m,1000)}'">`).join('')}</div><h3>${esc(p.name)}</h3><div class="pr">${money(p.price)}</div><p>${esc(p.description)}</p><a class="btn g" target="_blank" rel="noopener" href="${enq(p.name)}">WhatsApp Enquiry</a><a class="btn d" href="tel:+${S.wa}">Call Now</a>`;md.classList.add('on')}
$('#md').onclick=e=>{if(e.target.id=='md')md.classList.remove('on')};
fetch('products.json?v='+Date.now()).then(r=>r.json()).then(d=>{P=d.products||[];draw()}).catch(()=>draw());
