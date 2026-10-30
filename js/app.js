(function(){
"use strict";

/* ---------- constants ---------- */
var ALL=["G1","G2","G3","HCL"];
var SNAME={G1:"G1 基础华文",G2:"G2 华文",G3:"G3 华文",HCL:"HCL 高级华文"};
var SHORT={G1:"基础华文",G2:"华文",G3:"华文",HCL:"高级华文"};
var VS="https://btvssclunit.github.io/VocabSummit/";
/* ---------- data: loaded from data/topics.json and data/content/<id>.json ---------- */
var REGIONS=[],TOPICS=[],C={},R={unitLessons:{},resources:[],vocabulary:{},vocabularySources:[],hub:{}},D={items:[]};
function region(id){for(var i=0;i<REGIONS.length;i++)if(REGIONS[i].id===id)return REGIONS[i];}
function topic(id){for(var i=0;i<TOPICS.length;i++)if(TOPICS[i].id===id)return TOPICS[i];}
function inRegion(t,rid){return t.region===rid||(t.also||[]).indexOf(rid)>=0;}
function getJSON(url){return fetch(url,{cache:"no-cache"}).then(function(r){if(!r.ok)throw new Error(url+" "+r.status);return r.json();});}

/* ---------- state ---------- */
var S={view:"world",region:null,topic:null,door:null,tab:"intro",mine:{s:null,lv:null},gloss:false,catS:null};
try{var saved=JSON.parse(localStorage.getItem("topicatlas-mine")||"null");if(saved&&typeof saved==="object")S.mine={s:saved.s||null,lv:saved.lv||null};}catch(e){}
function saveMine(){try{localStorage.setItem("topicatlas-mine",JSON.stringify(S.mine));}catch(e){}}
var LVNAME={s1:"中一",s2:"中二",s3:"中三",s4:"中四"};
var LVS=["中一","中二","中三","中四"];
function isMine(t){
  if(!S.mine.s||!S.mine.lv)return false;
  return t.doors.some(function(x){return x.s===S.mine.s&&x.lv===LVNAME[S.mine.lv];});
}
function regionMine(rid){return TOPICS.some(function(t){return inRegion(t,rid)&&isMine(t);});}
var app=document.getElementById("app");
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}

function top(crumbs,here){
  var c=crumbs.length>1?'<nav class="crumbs" aria-label="位置">'+crumbs.map(function(x,i){return i<crumbs.length-1?'<button data-go="'+x[1]+'">'+x[0]+'</button><span aria-hidden="true">›</span>':'<span>'+x[0]+'</span>';}).join("")+'</nav>':"";
  function nb(id,label){return '<button data-go="'+id+'"'+(here===id?' aria-current="page"':'')+'>'+label+'</button>';}
  return '<header class="top"><div class="brand"><span class="brand-lockup"><img src="assets/atlas/title-calligraphy.webp" width="224" height="81" alt="谈天说地"><span class="en">Topic Atlas</span></span><span class="tag">示范版 · 内容待审</span></div>'+
   '<nav class="nav" aria-label="主菜单">'+nb("world","话题地图")+nb("cat","课本目录")+'<a href="'+VS+'" target="_blank" rel="noopener">词山学海 ↗</a></nav></header>'+c;
}
function picker(){
  var s=ALL.map(function(x){return '<button data-ms="'+x+'" aria-pressed="'+(S.mine.s===x)+'">'+x+'</button>';}).join("");
  var l=["s1","s2","s3","s4"].map(function(x){return '<button data-ml="'+x+'" aria-pressed="'+(S.mine.lv===x)+'">'+LVNAME[x]+'</button>';}).join("");
  return '<section class="picker" aria-label="我的课本"><span class="lbl">我的课本</span><div class="seg" role="group" aria-label="源流">'+s+'</div><div class="seg" role="group" aria-label="年级">'+l+'</div><span class="note">选好源流和年级，地图会标出你这一年的话题。选择只存在这台设备上。</span></section>';
}
function foot(){return '<footer class="foot"><span>百德中学 母语部 华文组 制作 · 统筹：HOD/MTL Mdm Chun Kai Xin</span><span>本网站不需要登录，不收集任何个人资料。网站内容均为华文组原创，课文只列出篇名。</span></footer>';}
function countR(rid){return TOPICS.filter(function(t){return t.region===rid;}).length;}

function unitLesson(t,stream){
  var d=t.doors.filter(function(x){return x.s===stream;})[0];
  if(!d)return null;
  var i=LVS.indexOf(d.lv)*6+d.un-1,url=(R.unitLessons[stream]||[])[i];
  if(!url)return null;
  return {src:"百德中学华文资源站 · SLS",tt:d.lv+(stream==="HCL"?"高级华文":stream+"华文")+d.u+"（综合课件）",url:url,access:"sls",checked:R.checked};
}
function safeURL(url){try{var u=new URL(url);return u.protocol==="https:"?u.href:null;}catch(e){return null;}}
function mediaFor(t,stream){
  var list=R.resources.filter(function(r){return r.topics.indexOf(t.id)>=0&&safeURL(r.url);}),chosen={};
  list.forEach(function(r){
    var key=r.tt.replace(/^【(?:普华|高华快华)】/,'');
    var preferred=(stream==="G1"||stream==="G2")?r.tt.indexOf('【普华】')===0:r.tt.indexOf('【高华快华】')===0;
    if(!chosen[key]||preferred)chosen[key]=r;
  });
  return Object.keys(chosen).map(function(k){return chosen[k];}).sort(function(a,b){
    return (a.access==="public"?0:1)-(b.access==="public"?0:1)||(b.published||'').localeCompare(a.published||'');
  });
}
function vocabularyFor(t){return (R.vocabulary[t.id]||[]).filter(function(v){return v.terms&&v.terms.length;});}
function vocabularyLinks(t){
  return vocabularyFor(t).map(function(v){return R.vocabularySources.filter(function(r){return r.id===v.source;})[0];}).filter(Boolean);
}
function topicResources(t,stream){
  var unit=unitLesson(t,stream);
  return (unit?[unit]:[]).concat(mediaFor(t,stream),vocabularyLinks(t),[{src:"词山学海",tt:SNAME[stream],url:VS+stream+"_index.html",access:"external"}]);
}
/* ---------- department practice (teacher-made tasks, guides and model texts) ---------- */
function deptFor(t,stream,tab){
  return (D.items||[]).filter(function(x){return x.topics.indexOf(t.id)>=0&&x.streams.indexOf(stream)>=0&&(x.tab||x.kind)===tab;});
}
function topicReady(t){return t.active||t.doors.some(function(d){return !!unitLesson(t,d.s);})||R.resources.some(function(r){return r.topics.indexOf(t.id)>=0;})||(D.items||[]).some(function(x){return x.topics.indexOf(t.id)>=0;});}
function list(cls,arr,tag){if(!arr||!arr.length)return '';return '<'+tag+' class="'+cls+'">'+arr.map(function(x){return '<li>'+(tag==='ol'&&cls==='steps'?'<span>'+esc(x)+'</span>':esc(x))+'</li>';}).join('')+'</'+tag+'>';}
function deptModel(m){
  if(!m||!(m.paras||[]).length)return '';
  return '<article class="model dept-model"><h3>'+esc(m.title||'范文')+'</h3><p class="by">'+esc(m.tag||'教师示范稿')+'</p>'+m.paras.map(function(p){return '<p>'+rich(p)+'</p>';}).join('')+'</article>'+
   ((m.notes||[]).length?'<div class="box"><h3>写作亮点<span class="gl">What to notice</span></h3>'+list('notes',m.notes,'ol')+'</div>':'');
}
function deptCard(x){
  var h='<span class="typ">'+esc(x.type||'')+'</span><h3 class="dept-title">'+esc(x.title||'')+'</h3>'+(x.focus?'<p class="snote">'+esc(x.focus)+'</p>':'');
  var body='';
  if(x.stimulus)body+='<blockquote class="stimulus">'+esc(x.stimulus).replace(/\n/g,'<br>')+'</blockquote>';
  if(x.prompt)body+='<p class="prompt">'+esc(x.prompt).replace(/\n/g,'<br>')+'</p>';
  var cols='';
  if((x.points||[]).length)cols+='<div><h3>内容要点<span class="gl">What to include</span></h3>'+list('ticks',x.points,'ul')+'</div>';
  if((x.fmt||[]).length)cols+='<div><h3>格式与语气<span class="gl">Format and tone</span></h3>'+list('ticks',x.fmt,'ul')+'</div>';
  if(cols)body+='<div class="two">'+cols+'</div>';
  if((x.steps||[]).length)body+='<h3>'+(x.kind==='guide'?'方法':'写作思路')+'<span class="gl">Plan</span></h3>'+list('steps',x.steps,'ol');
  if((x.frame||[]).length)body+='<h3>写作支架<span class="gl">Frame</span></h3>'+x.frame.map(function(f){return '<p class="frame">'+esc(f)+'</p>';}).join('');
  if((x.questions||[]).length)body+='<h3>练习题<span class="gl">Practice questions</span></h3><p class="notice">选一题，对着题目大声说一遍。</p>'+list('qs',x.questions,'ol');
  if((x.expr||[]).length)body+='<h3>常用表达<span class="gl">Useful expressions</span></h3>'+x.expr.map(function(f){return '<p class="frame">'+esc(f)+'</p>';}).join('');
  if((x.checks||[]).length)body+='<h3>自检<span class="gl">Check</span></h3>'+list('ticks',x.checks,'ul');
  body+=deptModel(x.model);
  return '<section class="task dept" id="dept-'+esc(x.id)+'">'+h+body+'<p class="dept-src">华文组教学材料'+(x.year?' · '+esc(x.year):'')+'</p></section>';
}
function deptBlock(t,s,tab){
  var rows=deptFor(t,s,tab);
  if(!rows.length)return '';
  return '<div class="dept-list"><h3 class="dept-head">华文组练习与方法<span class="gl">Department practice</span></h3>'+rows.map(deptCard).join('')+'</div>';
}
function resourceCards(rows){
  return '<div class="res">'+rows.filter(function(r){return safeURL(r.url);}).map(function(r){
    var access={sls:"SLS 登录",subscription:"需订阅","may-subscribe":"可能需订阅",public:"公开资源",external:"外部资源"}[r.access]||"外部资源";
    return '<a class="rc" href="'+esc(safeURL(r.url))+'" target="_blank" rel="noopener noreferrer"><span class="src">'+esc(r.src)+'</span><span class="tt">'+esc(r.tt)+' ↗</span>'+
      (r.audience?'<span class="ds">'+esc(r.audience)+'</span>':'')+'<span class="resource-meta"><span>'+access+'</span>'+(r.published?'<time datetime="'+esc(r.published)+'">'+esc(r.published)+'</time>':'')+'</span></a>';
  }).join('')+'</div>';
}

/* ---------- world ---------- */
var ATLAS_SCENES={
 geren:{area:'M0 760L170 735L460 792L760 850L820 950L710 1024H0Z',marker:[65,995]},
 jiating:{area:'M30 640L250 550L300 570L350 550L435 550L490 615L490 690L640 740L700 790L660 840L435 802L306 769L110 779L0 790Z',marker:[616,777]},
 xiaoyuan:{area:'M110 510L370 435L680 450L825 510L1000 580L1080 690L950 744L650 720L490 690L490 615L435 550L350 550L300 570L250 550L50 600Z',marker:[1030,675]},
 shequ:{area:'M290 336L548 305L699 338L876 323L1116 345L1370 373L1460 476L1430 560L1040 535L758 471L335 450Z',marker:[1432,530]},
 guojia:{area:'M490 211L720 185L1049 224L1389 208L1500 293L1536 363L1145 357L926 325L590 322Z',marker:[665,309]},
 shijie:{area:'M390 112L500 30L627 34L736 49L882 56L1060 68L1259 100L1320 21L1420 20L1536 132V224L1279 207L1038 188L725 203L445 222Z',marker:[1456,201]}
};
var SCHOOL_IDENTITY='<g id="school-identity" aria-hidden="true" pointer-events="none"><image href="assets/atlas/bvss-crest.png" x="560" y="507" width="30" height="30"/></g>';
var ATLAS_BRANDING="<g aria-hidden=\"true\" pointer-events=\"none\">\n<image class=\"title-sprite\" href=\"assets/atlas/title-vertical.webp\" x=\"1375\" y=\"643\" width=\"115\" height=\"354\" preserveAspectRatio=\"xMidYMid meet\"/>\n<text transform=\"translate(1335 709) rotate(90)\" fill=\"#465248\" font-family=\"Georgia, Times New Roman, serif\" font-size=\"25\" letter-spacing=\"2\">Topic Atlas</text>\n<image href=\"assets/atlas/school-seal.webp\" x=\"1291\" y=\"892\" width=\"88\" height=\"88\" preserveAspectRatio=\"xMidYMid meet\"/>\n</g>";
function atlasName(r){return r.id==="shijie"?"天下":r.name;}
function atlasScene(r,i){
  var g=ATLAS_SCENES[r.id],mine=regionMine(r.id),label=atlasName(r)+'，'+countR(r.id)+'个话题';
  return '<g class="atlas-scene'+(mine?' mine':'')+'" data-reg="'+r.id+'" role="button" tabindex="0" aria-label="'+esc(label)+'">'+
   '<path class="atlas-hit" d="'+g.area+'"/><g class="atlas-marker" transform="translate('+g.marker.join(' ')+')">'+
   '<circle r="22"/><text y="8" text-anchor="middle">'+(i+1)+'</text></g></g>';
}
// Replace complete playground figures together so heads, necks and bodies stay coherent.
function playgroundFigures(){
  return '<defs><filter id="play-scene-feather" x="-5%" y="-10%" width="110%" height="120%"><feGaussianBlur stdDeviation="2"/></filter><mask id="play-scene-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="1536" height="1024"><rect x="972" y="402" width="382" height="132" fill="white" filter="url(#play-scene-feather)"/></mask></defs><image href="assets/atlas/playground-figures-v44.webp" width="1536" height="1024" mask="url(#play-scene-mask)" aria-hidden="true" pointer-events="none"/>';
}
function atlasMap(){
  return '<div class="atlas-stage"><div class="mapbox atlas-map"><svg viewBox="0 0 1536 1024" role="group" aria-label="话题地图">'+
   '<image href="assets/atlas/watercolor-map-v42.webp" width="1536" height="1024" aria-hidden="true"/>'+
   playgroundFigures()+SCHOOL_IDENTITY+REGIONS.map(atlasScene).join("")+ATLAS_BRANDING+'</svg></div></div>'+
   '<nav class="atlas-regions" aria-label="话题地图">'+REGIONS.map(function(r,i){
    return '<button data-reg="'+r.id+'" class="atlas-region'+(regionMine(r.id)?' mine':'')+'"><span class="atlas-index" aria-hidden="true">'+(i+1)+'</span><span><b>'+atlasName(r)+'</b><span class="atlas-meta">'+(r.motto?esc(r.motto)+' · ':'')+countR(r.id)+' 个话题</span></span>'+(regionMine(r.id)?'<span class="atlas-mine">我的课本</span>':'')+'</button>';
   }).join("")+'</nav>';
}
function world(){
  var openPanel=app.querySelector('dialog[open]');
  var panelId=openPanel?openPanel.id:null;
  var focused=document.activeElement;
  var pickerFocus=focused&&focused.matches('[data-ms],[data-ml]')?{key:focused.hasAttribute('data-ms')?'data-ms':'data-ml',value:focused.getAttribute(focused.hasAttribute('data-ms')?'data-ms':'data-ml')}:null;
  app.innerHTML='<div class="view atlas-home">'+top([["话题地图","world"]],"world")+
   '<h1 class="atlas-heading">华文话题地图</h1><div class="atlas-tools"><button data-panel="atlas-intro">华文话题地图</button><button data-panel="atlas-picker">我的课本</button></div>'+
   atlasMap()+
   '<dialog class="atlas-panel" id="atlas-intro" aria-labelledby="atlas-heading"><button class="panel-close" data-close aria-label="Close">×</button>'+
   '<section class="hero"><h2 id="atlas-heading">华文话题地图</h2><p class="quote">《大学》：修身、齐家、治国、平天下。</p><p>学华文，也是认识自己、认识世界的过程。地图从个人出发，一路走向家庭、校园、社区、国家和世界。走进话题，选择你的源流，使用已有的学习材料与资源。</p></section>'+
   '<div class="maplegend"><span>点一个地方，看那里的话题。</span><span>各话题已有按源流和单元整理的学习资源。</span><span>想按课本顺序找？用上面的「课本目录」。</span></div>'+
   '<details class="team"><summary>给华文组老师：这个示范版展示什么？</summary><ul>'+
   '<li>按话题组织，代替印刷的话题校本。四个源流 92 个单元，整理成 37 个话题。</li>'+
   '<li>地图按话题的范围分区：个人（再分心态品格、成长追梦、学习生活）、家庭、校园、社区、国家、世界。这是初步分类，欢迎大家调整。</li>'+
   '<li>同一个话题只建一次，里面按源流开门：G1、G2、G3、HCL，顺序固定，往左支持多一点，往右挑战多一点。所有门都开放。</li>'+
   '<li>每个话题只显示已有学习材料的部分。</li>'+
   '<li>「我的课本」会在地图上标出学生这一年的话题；「课本目录」按单元顺序列出所有话题。</li>'+
   '<li>所有题目、导读和范文都是原创草稿，待审。课文只列篇名，不转载内容。</li></ul></details>'+
   foot()+'</dialog><dialog class="atlas-panel" id="atlas-picker" aria-label="我的课本"><button class="panel-close" data-close aria-label="Close">×</button>'+picker()+'</dialog></div>';
  if(panelId){
    document.getElementById(panelId).showModal();
    if(pickerFocus)app.querySelector('['+pickerFocus.key+'="'+pickerFocus.value+'"]').focus();
  }
}

/* ---------- region ---------- */
function unitsOf(t){
  var g={},order=[];
  t.doors.forEach(function(x){var k=x.lv+" "+x.u;if(!g[k]){g[k]=[];order.push(k);}g[k].push(x.s);});
  return order.map(function(k){return '<span class="unit">'+k+'</span>'+g[k].map(function(s){return '<span class="dot s-'+s+'">'+s+'</span>';}).join("");});
}
function lmCard(t){
  var ready=topicReady(t);
  var st=ready?'<span class="state on">可以进入</span>':'<span class="state">建设中</span>';
  return '<button class="lm'+(isMine(t)?" mine":"")+'" '+(ready?'data-topic="'+t.id+'"':'disabled')+'><span class="nm">'+t.name+'</span>'+
   unitsOf(t).map(function(r){return '<span class="row">'+r+'</span>';}).join("")+
   '<span class="row">'+st+(t.note?'<span class="state">· '+t.note+'</span>':"")+'</span></button>';
}
function regionView(rid){
  var r=region(rid),list=TOPICS.filter(function(t){return t.region===rid;}),body="";
  var linked=TOPICS.filter(function(t){return t.region!==rid&&(t.also||[]).indexOf(rid)>=0;});
  if(r.subs){
    body=r.subs.map(function(sb){return '<section class="district"><h2>'+sb[1]+'</h2><div class="grid">'+list.filter(function(t){return t.sub===sb[0];}).map(lmCard).join("")+'</div></section>';}).join("");
  }else body='<div class="grid">'+list.map(lmCard).join("")+'</div>';
  if(linked.length)body+='<section class="district"><h2>也连接到这里的话题</h2><div class="grid">'+linked.map(lmCard).join("")+'</div></section>';
  app.innerHTML='<div class="view">'+top([["话题地图","world"],[r.name,""]],"")+
   '<section class="isle-head"><h1>'+r.name+(r.motto?'<span class="motto-h">'+r.motto+'</span>':'')+'</h1><p>'+r.blurb+'每张卡片列出这个话题在哪个年级、哪个单元，以及哪些源流学它。</p></section>'+picker()+body+foot()+'</div>';
}

/* ---------- textbook order ---------- */
function catView(){
  var s=S.catS||S.mine.s||"G3";S.catS=s;
  var rows=[];
  TOPICS.forEach(function(t){t.doors.forEach(function(x){if(x.s===s)rows.push({lv:x.lv,un:x.un,u:x.u,t:t});});});
  rows.sort(function(a,b){return LVS.indexOf(a.lv)-LVS.indexOf(b.lv)||a.un-b.un;});
  var seg='<div class="seg" role="group" aria-label="源流">'+ALL.map(function(x){return '<button data-cs="'+x+'" aria-pressed="'+(x===s)+'">'+SNAME[x]+'</button>';}).join("")+'</div>';
  var body=LVS.map(function(lv){
    var rr=rows.filter(function(x){return x.lv===lv;});
    return '<section class="district"><h2>'+lv+'</h2><ol class="cat">'+rr.map(function(x){
      var inner='<span class="cu">'+x.u+'</span><span class="ct">'+x.t.name+'</span><span class="cr">'+region(x.t.region).name+'</span><span class="state'+(topicReady(x.t)?' on':'')+'">'+(topicReady(x.t)?'可以进入':'建设中')+'</span>';
      return '<li>'+(topicReady(x.t)?'<button class="crow" data-topic="'+x.t.id+'" data-pref="'+s+'">'+inner+'</button>':'<div class="crow off">'+inner+'</div>')+'</li>';}).join("")+'</ol></section>';
  }).join("");
  app.innerHTML='<div class="view">'+top([["课本目录",""]],"cat")+
   '<section class="isle-head"><h1>课本目录</h1><p>按课本的单元顺序，列出一个源流四年的话题。地图上的同一个话题，在这里会出现在它所属的单元。</p></section>'+seg+body+foot()+'</div>';
}

/* ---------- topic ---------- */
var TABS=[["intro","话题导读","Topic intro"],["oral","口试会话","Oral"],["func","实用文","Functional writing"],["compo","作文","Composition"],["model","范文","Model essay"],["vocab","词语锦囊","Vocabulary"],["res","资源库","Resources"]];
function rich(p){return esc(p).replace(/\[\[(.+?)\|(\d+)\]\]/g,'<mark>$1<sup>$2</sup></mark>');}
function availableTabs(t,c,stream){
  var oral=(c.oral||{})[stream],func=(c.func||{})[stream];
  var present={intro:!!(c.intro||(c.keywords||[]).length),oral:!!(oral&&(oral.q||[]).length)||!!deptFor(t,stream,"oral").length,func:!!(func&&func.prompt)||!!deptFor(t,stream,"func").length,compo:!!(c.compo||[]).length||!!deptFor(t,stream,"compo").length,model:!!(c.model&&(c.model.paras||[]).length),vocab:!!vocabularyFor(t).length,res:!!topicResources(t,stream).length};
  return TABS.filter(function(tab){return present[tab[0]];});
}
function panel(t,c,s){
  var o=(c.oral||{})[s],f=(c.func||{})[s];
  switch(S.tab){
  case "intro":
    return '<h2>话题导读<span class="gl">About this topic</span></h2><p class="lead">'+esc(c.intro||'')+'</p>'+
     '<div class="box"><h3>关键词<span class="gl">Key words</span></h3><div class="chips">'+(c.keywords||[]).map(function(k){return '<span class="chip">'+k+'</span>';}).join("")+'</div></div>'+resourceCards([{src:"词山学海",tt:SNAME[s],url:VS+s+"_index.html",access:"external"}]);
  case "oral":
    return '<h2>口试会话<span class="gl">Oral: conversation</span></h2>'+(o&&(o.q||[]).length?
     ((c.scenes||[]).length?'<div><h3 style="margin-bottom:8px">情境<span class="gl">Scenes to talk about</span></h3><div class="scenes">'+c.scenes.map(function(x,i){return '<div class="scene"><b>情境 '+(i+1)+'</b>'+x+'</div>';}).join("")+'</div></div>':'')+
     '<div class="box"><h3>会话题<span class="gl">Practice questions</span></h3><p class="notice">选一题，对着题目大声说一遍。</p><ol class="qs">'+o.q.map(function(q){return '<li>'+q+'</li>';}).join("")+'</ol></div>'+
     '<div class="two"><div class="box"><h3>好回答的特点<span class="gl">What a good answer does</span></h3><ul class="ticks">'+(c.good||[]).map(function(x){return '<li>'+x+'</li>';}).join("")+'</ul></div>'+
     '<div class="box"><h3>常用表达<span class="gl">Useful expressions</span></h3>'+(o.expr||[]).map(function(x){return '<p class="frame">'+x+'</p>';}).join("")+'</div></div>':'')+deptBlock(t,s,"oral");
  case "func":
    return '<h2>实用文<span class="gl">Functional writing</span></h2>'+(f&&f.prompt?
     '<div class="task"><span class="typ">'+f.type+'</span><p class="prompt">'+f.prompt+'</p>'+
     '<div class="two"><div><h3>内容要点<span class="gl">What to include</span></h3><ul class="ticks">'+f.points.map(function(x){return '<li>'+x+'</li>';}).join("")+'</ul></div>'+
     '<div><h3>格式与语气<span class="gl">Format and tone</span></h3><ul class="ticks">'+f.fmt.map(function(x){return '<li>'+x+'</li>';}).join("")+'</ul></div></div></div>':'')+deptBlock(t,s,"func");
  case "compo":
    return '<h2>作文<span class="gl">Composition</span></h2>'+((c.compo||[]).length?'<p class="snote"><b>'+SNAME[s]+'：</b>'+((c.snote||{})[s]||'')+'</p><div class="genres">'+
     c.compo.map(function(g){return '<section class="genre"><span class="g">'+g.g+'</span><h3 style="font-family:var(--f-display);font-size:1.2rem">'+g.title+'</h3><p class="prompt">'+g.prompt+'</p><h3>写作思路<span class="gl">Plan</span></h3><ol class="steps">'+g.steps.map(function(x){return '<li><span>'+x+'</span></li>';}).join("")+'</ol></section>';}).join("")+
     '</div>':'')+deptBlock(t,s,"compo");
  case "model":
    var m=c.model;
    return '<h2>范文<span class="gl">Model essay</span></h2><article class="model"><h3>'+m.title+'</h3><p class="by">'+m.tag+'</p>'+m.paras.map(function(p){return '<p>'+rich(p)+'</p>';}).join("")+'</article>'+
     '<div class="box"><h3>写作亮点<span class="gl">What to notice</span></h3><ol class="notes">'+m.notes.map(function(x){return '<li>'+x+'</li>';}).join("")+'</ol></div>';
  case "vocab":
    return '<h2>词语锦囊<span class="gl">Vocabulary</span></h2>'+vocabularyFor(t).map(function(v){
      var source=R.vocabularySources.filter(function(r){return r.id===v.source;})[0];
      return '<section class="box vocab-section"><h3>'+esc(source.tt)+'</h3><div class="chips">'+v.terms.map(function(term){return '<span class="chip">'+esc(term)+'</span>';}).join('')+'</div>'+resourceCards([source])+'</section>';
    }).join('');
  case "res":
    return '<h2>资源库<span class="gl">Resources</span></h2>'+resourceCards(topicResources(t,s));
  }
}
function topicView(id){
  var t=topic(id),c=C[id];
  if(!c&&!t.active){c={};C[id]=c;}
  if(!c){app.innerHTML='<div class="view">'+top([["话题地图","world"]],"")+'<p>正在载入……</p></div>';
    getJSON("data/content/"+id+".json").then(function(j){C[id]=j;if(S.view==="topic"&&S.topic===id)render();})
    .catch(function(){app.innerHTML='<div class="view">'+top([["话题地图","world"]],"")+'<p>这个话题载入失败，请检查网络后再试。</p></div>';});
    return;}
  var avail=t.doors.map(function(x){return x.s;});
  if(!S.door||avail.indexOf(S.door)<0){S.door=(S.mine.s&&avail.indexOf(S.mine.s)>=0)?S.mine.s:avail[0];}
  var s=S.door;
  document.body.classList.toggle("glosses",S.gloss&&(s==="G1"||s==="G2"));
  var doors=ALL.filter(function(x){return avail.indexOf(x)>=0;}).map(function(x){
    var dd=t.doors.filter(function(y){return y.s===x;})[0];
    return '<button class="door s-'+x+'" data-door="'+x+'" aria-pressed="'+(x===s)+'"><span class="s">'+x+'</span><span class="u">'+SHORT[x]+' · '+dd.lv+' '+dd.u+'</span><span class="knob"></span></button>';}).join("");
  var r=region(t.region),sub=r.subs&&t.sub?r.subs.filter(function(x){return x[0]===t.sub;})[0][1]:"";
  var crumb=[["话题地图","world"],[r.name,"reg:"+r.id],[t.name,""]];
  var shownTabs=availableTabs(t,c,s);
  if(!shownTabs.some(function(x){return x[0]===S.tab;})){var firstTab=shownTabs.filter(function(x){return x[0]!=="vocab";})[0]||shownTabs[0];S.tab=firstTab[0];}
  var tabs=shownTabs.map(function(x){return '<button role="tab" id="topic-tab-'+x[0]+'" aria-controls="topic-panel" tabindex="'+(S.tab===x[0]?'0':'-1')+'" data-tab="'+x[0]+'" aria-selected="'+(S.tab===x[0])+'">'+x[1]+'<span class="gl">'+x[2]+'</span></button>';}).join("");
  var gl=(s==="G1"||s==="G2")?'<div class="tools"><button class="toggle" data-gloss aria-pressed="'+S.gloss+'">显示英文提示 English hints</button></div>':"";
  app.innerHTML='<div class="view">'+top(crumb,"")+
   '<section class="thead"><h1>'+t.name+'</h1><div class="meta"><span class="cr">'+r.name+(sub?' · '+sub:'')+'</span>'+((t.also||[]).length?'<span class="cr">也连接：'+t.also.map(function(a){return region(a).name;}).join("、")+'</span>':'')+unitsOf(t).map(function(x){return '<span class="row">'+x+'</span>';}).join("")+'</div></section>'+
   '<div class="doors" role="group" aria-label="选择源流之门">'+doors+'</div>'+
   '<div class="ladder"><span>← 多一点支持</span><span>多一点挑战 →</span></div>'+gl+
   '<div class="tabs" role="tablist">'+tabs+'</div><section class="panel" id="topic-panel" role="tabpanel" aria-labelledby="topic-tab-'+S.tab+'">'+panel(t,c,s)+'</section>'+foot()+'</div>';
}

/* ---------- routing ---------- */
function render(){
  document.body.classList.toggle("atlas-world",S.view==="world");
  if(S.view==="world")world();
  else if(S.view==="region")regionView(S.region);
  else if(S.view==="cat")catView();
  else topicView(S.topic);
}
function go(v){
  if(v==="world")S.view="world";
  else if(v==="cat")S.view="cat";
  else if(v.indexOf("reg:")===0){S.view="region";S.region=v.slice(4);}
  render();window.scrollTo(0,0);
  var heading=app.querySelector("h1");if(heading){heading.setAttribute("tabindex","-1");heading.focus({preventScroll:true});}
}
app.addEventListener("click",function(e){
  var b=e.target.closest("[data-panel],[data-close],[data-go],[data-reg],[data-topic],[data-door],[data-tab],[data-ms],[data-ml],[data-cs],[data-gloss]");
  if(!b||b.disabled)return;
  if(b.dataset.panel){document.getElementById(b.dataset.panel).showModal();return;}
  if(b.hasAttribute("data-close")){b.closest("dialog").close();return;}
  if(b.hasAttribute("data-go")){if(b.dataset.go)go(b.dataset.go);return;}
  if(b.dataset.reg){go("reg:"+b.dataset.reg);return;}
  if(b.dataset.topic){S.view="topic";S.topic=b.dataset.topic;S.door=b.dataset.pref||null;S.tab="intro";render();window.scrollTo(0,0);return;}
  if(b.dataset.door){S.door=b.dataset.door;render();return;}
  if(b.dataset.tab){S.tab=b.dataset.tab;render();app.querySelector('[data-tab="'+S.tab+'"]').focus();return;}
  if(b.dataset.ms){S.mine.s=S.mine.s===b.dataset.ms?null:b.dataset.ms;saveMine();render();return;}
  if(b.dataset.ml){S.mine.lv=S.mine.lv===b.dataset.ml?null:b.dataset.ml;saveMine();render();return;}
  if(b.dataset.cs){S.catS=b.dataset.cs;render();return;}
  if(b.hasAttribute("data-gloss")){S.gloss=!S.gloss;render();return;}
});
app.addEventListener("close",function(e){
  if(!e.target.matches('.atlas-panel'))return;
  var trigger=app.querySelector('[data-panel="'+e.target.id+'"]');
  if(trigger)trigger.focus();
},true);
app.addEventListener("keydown",function(e){
  var current=e.target.closest('[role="tab"][data-tab]');
  if(current&&["ArrowLeft","ArrowRight","Home","End"].indexOf(e.key)>=0){
    e.preventDefault();var tabs=Array.from(app.querySelectorAll('[role="tab"][data-tab]')),i=tabs.indexOf(current);
    var next=e.key==="Home"?0:e.key==="End"?tabs.length-1:(i+(e.key==="ArrowRight"?1:-1)+tabs.length)%tabs.length;
    S.tab=tabs[next].dataset.tab;render();app.querySelector('[data-tab="'+S.tab+'"]').focus();return;
  }
  if(e.key!=="Enter"&&e.key!==" ")return;
  var g=e.target.closest("g[data-reg]");
  if(g){e.preventDefault();go("reg:"+g.dataset.reg);}
});
Promise.all([getJSON("data/topics.json"),getJSON("data/topic-resources.json"),getJSON("data/dept-practice.json")]).then(function(data){
  REGIONS=data[0].regions;TOPICS=data[0].topics;R=data[1];D=data[2];render();
})
.catch(function(){app.innerHTML='<p style="padding:24px">话题资料载入失败。若在本机测试，请用本地服务器打开（例如 python3 -m http.server），不要直接双击文件。</p>';});
})();
