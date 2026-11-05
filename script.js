(() => {
  'use strict';
  const conf = window.BEAUTY_CONFIG;
  if (!conf) return;
  const $ = (id) => document.getElementById(id);
  const services = Array.isArray(conf.services) ? conf.services : [];
  const money = value => value == null ? 'Price on enquiry' : new Intl.NumberFormat('en-GB',{style:'currency',currency:conf.currency || 'GBP',maximumFractionDigits:0}).format(value);
  const tabs = $('categoryTabs'), grid = $('serviceGrid'), picker = $('treatment');
  const categories = ['All treatments',...new Set(services.map(s => s.category))];
  let category = 'All treatments';
  function render() {
    tabs.replaceChildren();grid.replaceChildren();
    for(const cat of categories){const b=document.createElement('button');b.type='button';b.textContent=cat;b.className=cat===category?'active':'';b.setAttribute('aria-pressed',String(cat===category));b.addEventListener('click',()=>{category=cat;render()});tabs.appendChild(b)}
    services.filter(s=>category==='All treatments'||s.category===category).forEach(s=>{
      const card=document.createElement('article');card.className='service-card';
      const top=document.createElement('div');top.className='service-top';
      const cat=document.createElement('span');cat.className='service-category';cat.textContent=s.category;
      const spark=document.createElement('span');spark.className='service-spark';spark.textContent='' ;top.append(cat,spark);
      const title=document.createElement('h3');title.textContent=s.name;
      const desc=document.createElement('p');desc.textContent=s.description||'';
      const footer=document.createElement('div');footer.className='service-footer';
      const details=document.createElement('div');const price=document.createElement('div');price.className='service-price';price.textContent=money(s.price);const duration=document.createElement('div');duration.className='service-duration';duration.textContent=s.duration?`Approx. ${s.duration} mins`:'';details.append(price,duration);
      const btn=document.createElement('button');btn.type='button';btn.textContent='Enquire ↗';btn.setAttribute('aria-label',`Enquire about ${s.name}`);btn.addEventListener('click',()=>{picker.value=s.id;updatePrice();$('booking').scrollIntoView({behavior:'smooth'});picker.focus({preventScroll:true})});footer.append(details,btn);card.append(top,title,desc,footer);grid.appendChild(card)
    });
  }
  for(const s of services){const option=document.createElement('option');option.value=s.id;option.textContent=`${s.name} · ${s.duration||'?'} mins${s.price!=null?' · '+money(s.price):''}`;picker.appendChild(option)}
  render();
  const priceText=$('selectedPrice');
  function updatePrice(){const choice=services.find(s=>s.id===picker.value);priceText.textContent=choice?`Treatment price: ${money(choice.price)}`:'Select a treatment to see the price.'}
  picker.addEventListener('change',updatePrice);
  grid.addEventListener('click',()=>requestAnimationFrame(updatePrice));
  updatePrice();
  const hours=$('time');for(let h=8;h<=20;h++){for(const m of [0,30]){if(h===20&&m===30)continue;const t=`${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`;const opt=document.createElement('option');opt.value=t;opt.textContent=t;hours.appendChild(opt)}}
  // Use the visitor's LOCAL calendar day rather than UTC.
  const now=new Date();const today=[now.getFullYear(),String(now.getMonth()+1).padStart(2,'0'),String(now.getDate()).padStart(2,'0')].join('-');$('date').min=today;
  $('year').textContent=now.getFullYear();$('locationText').textContent=conf.location||'Leamington Spa';$('addressText').textContent=conf.address||conf.openingHours||'By appointment';$('policyText').textContent=conf.cancellationPolicy||'';
  if(conf.instagramHandle){let handle=String(conf.instagramHandle).replace(/^@/,'').trim();if(/^[a-zA-Z0-9._]+$/.test(handle)){const url=`https://www.instagram.com/${handle}/`;for(const id of ['instagramLink','footerInstagram']){const e=$(id);e.href=url;e.classList.remove('hidden')}}}
  if(conf.logoPath){const img=$('brandMark').querySelector('img');if(img)img.src=conf.logoPath}
  // Public Instagram permalinks are manually supplied: no fake photos or unreliable scraping.
  const igGrid=$('instagramGrid');
  const validPosts=(Array.isArray(conf.instagramPosts)?conf.instagramPosts:[]).filter(url=>{
    try {const u=new URL(url);return ['www.instagram.com','instagram.com'].includes(u.hostname)&&/^\/(p|reel)\/[a-zA-Z0-9_-]+\/?$/.test(u.pathname)}catch{return false}
  }).slice(0,3);
  if(validPosts.length){
    validPosts.forEach((url,i)=>{
      const card=document.createElement('article');card.className='instagram-post';
      const embed=document.createElement('blockquote');embed.className='instagram-media';embed.setAttribute('data-instgrm-permalink',url);embed.setAttribute('data-instgrm-version','14');
      const link=document.createElement('a');link.href=url;link.target='_blank';link.rel='noopener noreferrer';link.textContent=`View Instagram post ${i+1}`;
      embed.append(link);card.append(embed);igGrid.append(card)
    });
    const script=document.createElement('script');script.async=true;script.src='https://www.instagram.com/embed.js';document.body.append(script)
  }else{
    const card=document.createElement('div');card.className='instagram-empty';
    const text=document.createElement('p');text.textContent='Explore our latest work and treatments on Instagram.';
    const a=document.createElement('a');a.href='https://www.instagram.com/lily.b.beauty/';a.target='_blank';a.rel='noopener noreferrer';a.textContent='See @lily.b.beauty ↗';
    card.append(text,a);igGrid.append(card)
  }
  const provider=String(conf.bookingProviderUrl||'').trim();if(/^https:\/\/[^\s]+$/i.test(provider)){const e=$('liveBooking');e.href=provider;e.classList.remove('hidden')}
  let message='';
  const dialog=$('requestDialog');const actions=$('sendActions');
  $('bookingForm').addEventListener('submit',e=>{
    e.preventDefault();if(!e.currentTarget.reportValidity())return;
    const service=services.find(s=>s.id===picker.value);if(!service)return;
    const [year,month,day]=$('date').value.split('-').map(Number);
    const selectedDate=new Date(year,month-1,day,12,0);
    if(selectedDate < new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate())){$('formMessage').textContent='Please select today or a future date.';return}
    const formattedDate=new Intl.DateTimeFormat('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(selectedDate);
    message=`Hello ${conf.businessName || 'there'}! I'd like to request an appointment.\n\nTreatment: ${service.name}\nTreatment price: ${money(service.price)}\nPreferred date: ${formattedDate}\nPreferred time: ${$('time').value}\nName: ${$('clientName').value.trim()}\nPhone: ${$('clientPhone').value.trim()}\nNotes: ${$('clientNotes').value.trim()||'None'}\n\nPlease let me know if this is available. I understand this is not a confirmed booking.`;
    actions.replaceChildren();
    const wa=String(conf.whatsappNumber||'').replace(/\D/g,'');
    if(wa){const a=document.createElement('a');a.textContent='Send via WhatsApp ↗';a.href=`https://wa.me/${wa}?text=${encodeURIComponent(message)}`;a.target='_blank';a.rel='noopener noreferrer';actions.appendChild(a)}
    if(conf.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(conf.email)){const a=document.createElement('a');a.textContent='Send via email ↗';a.href=`mailto:${conf.email}?subject=${encodeURIComponent('LB Beauty booking request - '+service.name+' - '+money(service.price))}&body=${encodeURIComponent(message)}`;actions.appendChild(a)}
    $('dialogExplanation').textContent=actions.children.length?'Tap a button below to send your request. Your appointment is not booked until you receive a reply.':'The salon has not yet configured an email or WhatsApp number. Copy your request and send it directly to the salon. This is not a confirmed booking.';
    $('copyRequest').textContent='Copy enquiry text';dialog.showModal();
  });
  $('copyRequest').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(message);$('copyRequest').textContent='Copied ✓'}catch{const field=document.createElement('textarea');field.value=message;document.body.appendChild(field);field.select();document.execCommand('copy');field.remove();$('copyRequest').textContent='Copied ✓'}});
  $('closeDialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
})();
