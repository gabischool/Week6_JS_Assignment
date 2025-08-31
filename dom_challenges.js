(function(){
  var css = ""
    + "#__diag{position:fixed;bottom:10px;right:10px;background:#0b1220;color:#dbe4ff;border:1px solid #334155;padding:8px 10px;border-radius:8px;font:12px/1.35 ui-sans-serif,system-ui;z-index:9999;opacity:.9}"
    + "#articles-container, #cards, .articles, .news-list{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));max-width:1100px;margin:20px auto;padding:0 14px;}"
    + ".article-card{background:#fff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,.06);display:flex;flex-direction:column;}"
    + ".article-img{width:100%;height:200px;object-fit:cover;display:block;background:#f2f3f5;}"
    + ".article-body{padding:14px 16px 12px 16px;display:flex;flex-direction:column;gap:8px}"
    + ".article-title{font-size:18px;line-height:1.25;color:#1f2937;margin:0}"
    + ".article-title a{color:#1f2937;text-decoration:none}"
    + ".article-title a:hover{text-decoration:underline}"
    + ".article-date{font-size:12px;color:#6b7280}"
    + ".article-excerpt{font-size:14px;color:#374151}"
    + ".article-tags{display:flex;gap:8px;flex-wrap:wrap;margin-top:4px}"
    + ".pill{font-size:12px;color:#374151;background:#eef2ff;border:1px solid #dbe3ff;border-radius:999px;padding:4px 8px;display:inline-block}"
    + "[data-category]{cursor:pointer;background:#f3f4f6;border:1px solid #e5e7eb;border-radius:16px;padding:6px 10px;margin:0 6px 6px 0;display:inline-block;user-select:none}"
    + "[data-category].is-active{background:#e0e7ff;border-color:#c7d2fe}";
  var style=document.createElement('style'); style.textContent=css; document.head.appendChild(style);
})();

function norm(s){return (s||"").replace(/\s+/g," ").trim().toLowerCase();}
function getContainer(){
  return document.getElementById('articles-container')
      || document.getElementById('cards')
      || document.querySelector('.articles')
      || document.querySelector('.news-list')
      || document.body;
}
function getImage(a){return a&&(a.image||a.imageUrl||a.img||a.thumbnail||a.thumb||a.cover)||"";}
function getExcerpt(a){var x=a&&(a.excerpt||a.description||a.content||a.summary)||""; if(x.length>220)x=x.slice(0,217)+"..."; return x;}
function getDate(a){var d=a&&(a.date||a.publishedAt||a.time)||""; var dt=d?new Date(d):null; return dt&&!isNaN(dt)?dt.toLocaleDateString():"";}
function createCard(a){
  var card=document.createElement('div'); card.className='article-card';
  var src=String(getImage(a));
  if(src){ var img=document.createElement('img'); img.className='article-img'; img.src=src; img.alt=a&&a.title||""; card.appendChild(img); }
  else { var ph=document.createElement('div'); ph.className='article-img'; card.appendChild(ph); }
  var body=document.createElement('div'); body.className='article-body';
  var h2=document.createElement('h2'); h2.className='article-title';
  if(a&&a.url){ var link=document.createElement('a'); link.href=a.url; link.target='_blank'; link.rel='noopener'; link.textContent=a.title||'Untitled'; h2.appendChild(link); }
  else { h2.textContent=a&&a.title||'Untitled'; }
  var date=document.createElement('div'); date.className='article-date'; date.textContent=getDate(a);
  var p=document.createElement('p'); p.className='article-excerpt'; p.textContent=getExcerpt(a);
  var tags=document.createElement('div'); tags.className='article-tags';
  var cat=document.createElement('span'); cat.className='pill'; cat.textContent=a&&a.category||'News'; tags.appendChild(cat);
  if(a&&Array.isArray(a.tags)){ for(var i=0;i<a.tags.length;i++){ var tg=document.createElement('span'); tg.className='pill'; tg.textContent=String(a.tags[i]); tags.appendChild(tg); } }
  body.appendChild(h2); body.appendChild(date); body.appendChild(p); body.appendChild(tags);
  card.appendChild(body); return card;
}

function allCategoriesFromData(){
  var set={}; if(window.newsData&&Array.isArray(newsData.articles)){
    for(var i=0;i<newsData.articles.length;i++){ var c=norm(newsData.articles[i].category); if(c) set[c]=true; }
  }
  return Object.keys(set);
}

function displayArticles(category){
  var container=getContainer(); if(!container||!window.newsData||!Array.isArray(newsData.articles)) return;
  if(container!==document.body) container.innerHTML='';
  var want=[];
  if(category==='All'){ want=newsData.articles.slice(); }
  else {
    var target=norm(category);
    for(var i=0;i<newsData.articles.length;i++){
      var it=newsData.articles[i]; if(it&&norm(it.category)===target) want.push(it);
    }
  }
  if(!want.length){
    var msg=document.createElement('div'); msg.id='__empty'; msg.style.cssText='max-width:1100px;margin:24px auto;padding:12px 16px;color:#374151;border:1px dashed #cbd5e1;border-radius:8px;background:#f8fafc';
    msg.textContent='No articles in '+category;
    if(container===document.body) document.body.appendChild(msg); else container.appendChild(msg);
    return;
  }
  var old=document.getElementById('__empty'); if(old) old.remove();
  for(var j=0;j<want.length;j++){ var card=createCard(want[j]); if(container===document.body){ document.body.appendChild(card);} else { container.appendChild(card);} }
}

function setActiveCategory(name){
  var nodes=document.querySelectorAll('[data-category]');
  for(var i=0;i<nodes.length;i++){ var el=nodes[i]; var on=el.dataset&&el.dataset.category===name; if(on){el.classList.add('is-active'); el.setAttribute('aria-pressed','true');} else {el.classList.remove('is-active'); el.setAttribute('aria-pressed','false');}}
}

function labelToCategory(txt){
  var t=norm(txt);
  if(t==='latest news') return 'All';
  if(t==='technology') return 'Technology';
  if(t==='ai & ml' || t==='ai/ml' || t==='ai ml') return 'AI & ML';
  if(t==='web development' || t==='web dev') return 'Web Development';
  if(t==='cyber security' || t==='cybersecurity') return 'Cyber Security';
  return null;
}

function ensureDataCategoryOnTabs(){
  var candidates=document.querySelectorAll('header *, nav *, .tabs *, .menu *, body *');
  for(var i=0;i<candidates.length;i++){
    var el=candidates[i]; if(el.dataset&&el.dataset.category) continue;
    var txt=(el.textContent||'').trim(); if(!txt) continue;
    var mapped=labelToCategory(txt); if(!mapped) continue;
    var clicky=el.closest('a,button,li,div,span')||el;
    clicky.setAttribute('data-category',mapped); clicky.setAttribute('role','button'); clicky.tabIndex=0;
  }
}

function delegateClicks(){
  document.addEventListener('click',function(e){
    var t=e.target.closest('[data-category], a, button, li, span'); if(!t) return;
    var cat=t.dataset&&t.dataset.category ? t.dataset.category : labelToCategory((t.textContent||'').trim());
    if(!cat) return;
    setActiveCategory(cat); displayArticles(cat);
  });
  document.addEventListener('keydown',function(e){
    if(e.key!=='Enter' && e.key!==' ') return;
    var t=e.target.closest('[data-category]'); if(!t) return;
    e.preventDefault(); var cat=t.dataset.category||'All'; setActiveCategory(cat); displayArticles(cat);
  });
}

function diag(){
  var counts={}; var cats=allCategoriesFromData(); for(var i=0;i<cats.length;i++){ counts[cats[i]]=0; }
  if(window.newsData&&Array.isArray(newsData.articles)){
    for(var k=0;k<newsData.articles.length;k++){ var c=norm(newsData.articles[k].category)||'uncategorized'; counts[c]=(counts[c]||0)+1; }
  }
  console.clear();
  console.log('Tabs found:', [].slice.call(document.querySelectorAll('[data-category]')).map(function(n){return n.dataset.category;}));
  console.log('Data categories:', counts);
  var box=document.getElementById('__diag')||document.createElement('div'); box.id='__diag';
  var tabs=[].slice.call(document.querySelectorAll('[data-category]')).map(function(n){return n.dataset.category;}).join(' | ');
  var lines=['TABS: '+tabs,'COUNTS: '+JSON.stringify(counts)];
  box.textContent=lines.join('  •  ');
  document.body.appendChild(box);
}

ensureDataCategoryOnTabs();
delegateClicks();
var first=document.querySelector('[data-category].is-active')||document.querySelector('[data-category][data-default]');
if(!first){ var all=document.querySelectorAll('[data-category]'); var pick=null; for(var i=0;i<all.length;i++){ if(all[i].dataset.category==='All'){pick=all[i];break;} } first=pick||all[0]||null; }
var initial=first?(first.dataset.category||'All'):'All';
setActiveCategory(initial);
displayArticles(initial);
diag();
