const lessons=[
[1,'不锈钢到底是什么','基础',true],[2,'为什么不容易生锈','基础',true],[3,'不锈钢五大家族','基础',true],[4,'从铬被发现到商业化','基础',false],[5,'铬：不锈钢的入场券','基础',false],[6,'镍：奥氏体的重要推手','基础',false],[7,'钼：局部腐蚀抗力','基础',false],[8,'碳：强度与晶间腐蚀','基础',false],[9,'氮：现代不锈钢角色','基础',false],[10,'锰硅铜钛铌的作用','基础',false],[11,'304为什么最常见','牌号',false],[12,'304、304L与304H','牌号',false],[13,'316与316L','牌号',false],[14,'321与347稳定化钢','牌号',false],[15,'430不等于低档','牌号',false],[16,'410、420与440系列','牌号',false],[17,'双相钢2205','牌号',false],[18,'2507与超级不锈钢','牌号',false],[19,'中国牌号怎么读','标准',false],[20,'ASTM、AISI与UNS','标准',false],[21,'国标304与美标304','标准',false],[22,'牌号标准与产品标准','标准',false],[23,'打开标准先看什么','标准',false],[24,'化学成分表怎么读','标准',false],[25,'力学性能表怎么读','标准',false],[26,'尺寸公差不是小事','标准',false],[27,'交货与表面状态','标准',false],[28,'检验取样与材质书','标准',false],[29,'六种常见腐蚀','实战',false],[30,'从询价到技术确认','实战',false]
];

const lessonSlides={
1:[
['真实问题','不锈钢是不是永远不会生锈？','不是。“不锈”是相对耐蚀能力，不是一张永不腐蚀的保证书。','教学问题'],
['标准定义','先把定义钉住','GB/T 20878—2024第3.1条规定：不锈钢是铬含量至少为10.5%，且碳含量不大于1.2%的钢。达到定义门槛，不等于适合所有腐蚀环境。','标准直接规定'],
['原理解释','铬为什么关键','Outokumpu手册指出，铬赋予不锈钢基本耐蚀性，并提高高温氧化抗力。实际表现仍受环境、表面与制造影响。','教材解释'],
['历史坐标','为什么标准如此定义','Cobb记载，Monnartz把接近12%铬、钝化与耐蚀性联系起来；Brearley于1913年熔炼商业化铬不锈钢炉次。','历史资料'],
['完成任务','本讲结论','材料名称不能替代使用环境，牌号不能替代完整技术条件。','课程归纳']
],
2:[
['情境','同样叫304，为什么服役结果不同？','牌号只是材料条件的一部分。环境、表面、加工、清洁与结构都会改变表现。','教学问题'],
['元素作用','Cr、Mo、Ni不是同一种工作','Cr赋予基本耐蚀性；Mo显著改善均匀腐蚀及局部腐蚀抗力；Ni主要促进奥氏体组织，并通常提高塑性和韧性。','教材解释'],
['判断边界','元素越多不等于处处更好','Outokumpu手册要求综合腐蚀、强度、制造、表面、温度、浓度、pH、成本及标准批准条件进行选材。','教材解释'],
['完成任务','不要绝对化','“316L在任何环境都一定比304好”不成立，因为“任何环境”已经超出资料支持边界。','课程归纳']
],
3:[
['分类','不锈钢不是一个牌号','GB/T 20878—2024按冶金学特征分为奥氏体、奥氏体—铁素体（双相）、铁素体、马氏体和沉淀硬化五类。','标准直接规定'],
['组织地图','五类一句话','奥氏体以面心立方组织为主；双相兼有奥氏体和铁素体；铁素体通常不能通过热处理硬化；马氏体可通过热处理调整性能；沉淀硬化通过时效机制强化。','标准直接规定'],
['磁性误区','带磁就是假货吗？','Outokumpu手册说明，铁素体、马氏体和双相牌号具有铁磁性；奥氏体中若存在少量铁素体或马氏体，磁性也会发生变化。','教材解释'],
['完成任务','正确提醒','带磁不足以证明材料是假货，应继续核对牌号、执行标准和检验数据。','课程归纳']
]
};

const sourceText={
1:'依据：GB/T 20878—2024第3.1条；Outokumpu《Handbook of Stainless Steel》合金元素章节；Cobb《The History of Stainless Steel》第2—3章。',
2:'依据：Outokumpu《Handbook of Stainless Steel》合金元素与材料选择章节。',
3:'依据：GB/T 20878—2024第3.2—3.6条及第6.1条；Outokumpu手册物理性能章节。'
};

let state=JSON.parse(localStorage.getItem('inoxStart')||'{"role":"业务","done":[],"score":0}');
let currentLesson=1,currentSlide=0;
function save(){localStorage.setItem('inoxStart',JSON.stringify(state));}

function chooseRole(el){document.querySelectorAll('.role').forEach(x=>x.classList.remove('on'));el.classList.add('on');state.role=el.dataset.r;save();}

function renderLessons(filter='全部'){
 const root=document.getElementById('lessons');root.innerHTML='';
 lessons.filter(x=>filter==='全部'||x[2]===filter).forEach(item=>{
  const el=document.createElement('article');
  el.className='lesson '+(item[3]?'free':'lock')+(state.done.includes(item[0])?' done':'');
  el.innerHTML=`<small>第${String(item[0]).padStart(2,'0')}讲 · ${item[2]}</small><strong>${item[1]}</strong><span class="tag">${state.done.includes(item[0])?'已完成':item[3]?'可体验':'正式版解锁'}</span>`;
  if(item[3])el.addEventListener('click',()=>openLesson(item[0]));
  root.appendChild(el);
 });
}
function filterLessons(filter,button){document.querySelectorAll('.chip').forEach(x=>x.classList.remove('on'));button.classList.add('on');renderLessons(filter);}

function updateProgress(){
 const percent=Math.min(100,Math.round(state.done.length/3*55+state.score/5*45));
 document.getElementById('pc').textContent=percent;
 document.getElementById('ring').style.setProperty('--pc',percent+'%');
 const names=['识别牌号类别','区分标准角色','读取成分性能','补全询价条件','说明证据边界'];
 const values=[state.score*15+state.done.length*8,state.score*14+state.done.length*10,state.done.length*18,state.score*12+state.done.length*9,state.done.length*21];
 document.getElementById('abilities').innerHTML=names.map((name,i)=>{const v=Math.min(100,values[i]);return `<div class="ability"><span>${name}</span><div class="bar"><i style="--w:${v}%"></i></div><b>${v}</b></div>`;}).join('');
}

function openLesson(number){currentLesson=number;currentSlide=0;document.getElementById('lt').textContent=`第${number}讲｜${lessons[number-1][1]}`;drawSlide();document.getElementById('lessonM').classList.add('open');}
function drawSlide(){
 const slides=lessonSlides[currentLesson],item=slides[currentSlide],last=currentSlide===slides.length-1;
 document.getElementById('lc').innerHTML=`<span class="eye">${item[0]}</span><h2>${item[1]}</h2><div class="statement">${item[2]}</div><div class="ev"><i class="sig ${item[3]==='标准直接规定'?'green':'yellow'}"></i><div><b>${item[3]}</b><p>${sourceText[currentLesson]}</p></div></div><div class="slidebar"><button class="btn secondary" onclick="moveSlide(-1)" ${currentSlide===0?'disabled':''}>上一页</button><span>${currentSlide+1}/${slides.length}</span>${last?`<button class="btn primary" onclick="finishLesson(${currentLesson})">完成本讲</button>`:`<button class="btn primary" onclick="moveSlide(1)">下一页</button>`}</div>`;
}
function moveSlide(step){currentSlide+=step;drawSlide();}
function finishLesson(number){if(!state.done.includes(number))state.done.push(number);save();updateProgress();renderLessons();closeModal('lessonM');}

function openDiag(){
 const questions=[
 ['GB/T 20878—2024能否单独作为板材订货标准？','不能，需要产品标准或技术协议'],
 ['按GB/T 20878—2024，不锈钢定义的最低铬含量是多少？','10.5%'],
 ['哪项最能描述双相不锈钢？','基体兼有奥氏体和铁素体两相'],
 ['客户只写“316L设备用”，优先动作是什么？','确认用途、执行标准和交货技术条件'],
 ['五本资料未覆盖某钢厂内控值时怎么办？','明确资料未覆盖，并补充企业文件']
 ];
 document.getElementById('dq').innerHTML=questions.map((q,i)=>`<div class="quiz"><b>${i+1}. ${q[0]}</b><label><input type="radio" name="q${i}" value="1"> ${q[1]}</label><label><input type="radio" name="q${i}" value="0"> 凭经验直接判断</label></div>`).join('')+'<button class="btn primary full" onclick="submitDiag()">生成诊断报告</button><div class="feedback" id="df">完成全部题目后生成建议。</div>';
 document.getElementById('diagM').classList.add('open');
}
function submitDiag(){let score=0;for(let i=0;i<5;i++){const selected=document.querySelector(`input[name=q${i}]:checked`);if(!selected){document.getElementById('df').textContent='请完成全部5题。';return;}score+=Number(selected.value);}state.score=score;save();document.getElementById('df').innerHTML=`诊断得分：<b>${score}/5</b>。${score<3?'建议从前三讲建立定义、分类和标准边界。':score<5?'已有基础，建议重点训练标准定位和询价补全。':'基础判断较好，可以进入岗位实战训练。'}`;updateProgress();}

function checkScenario(){
 const selected=[...document.querySelectorAll('.choices input:checked')].map(x=>x.value);
 const required=['执行标准','是否承压','状态表面','尺寸公差','检验证书'];
 const hit=required.filter(x=>selected.includes(x)).length;
 const feedback=document.getElementById('fb');
 feedback.innerHTML=hit===5&&!selected.includes('颜色')?'<b style="color:#72c18f">判断完整。</b> 牌号和尺寸不足以形成可执行订单，还需明确用途、标准、状态、公差及检验要求。':`已识别 ${hit}/5 个关键条件。${selected.includes('颜色')?'“客户喜欢的颜色”不是本案例的必需技术项。':''}`;
}

function coachReply(){
 const input=document.getElementById('ask'),text=input.value.trim();if(!text)return;
 const chat=document.getElementById('chat');
 const user=document.createElement('div');user.className='bubble usr';user.textContent=text;chat.appendChild(user);
 const keys=['标准','承压','用途','表面','状态','公差','检验','证书'];const hits=keys.filter(x=>text.includes(x));
 const answer=document.createElement('div');answer.className='bubble bot';answer.textContent=hits.length>=3?`你已经指出${hits.join('、')}。下一步请说明：它们分别影响标准中的哪类要求？`:hits.length?`你提到了${hits.join('、')}，还需要从用途、状态、公差或检验中继续补充。`:'先不要谈价格。材料用于什么设备、执行什么标准、以什么状态交货、如何验收？';chat.appendChild(answer);input.value='';chat.scrollTop=chat.scrollHeight;
}

function buy(plan,price){
 document.getElementById('bt').textContent=`${plan} · ¥${price}`;
 const text=`课程：${plan}\n价格：¥${price}\n岗位：${state.role}\n姓名：\n手机：\n公司：\n备注：申请购买不锈钢新人学习系统`;
 document.getElementById('order').textContent=text;
 document.getElementById('mail').href='mailto:ask304@outlook.com?subject='+encodeURIComponent('购买'+plan)+'&body='+encodeURIComponent(text);
 document.getElementById('buyM').classList.add('open');
}
function copyOrder(){navigator.clipboard.writeText(document.getElementById('order').textContent).then(()=>alert('购买信息已复制。'));}
function closeModal(id){document.getElementById(id).classList.remove('open');}
document.querySelectorAll('.modal').forEach(modal=>modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open');}));
renderLessons();updateProgress();