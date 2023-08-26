// 项目服务列表
let serviceList = [
  {
    title: 'STEP 1 | PREPARATORY PHASE',
    desc: '<p>团队准备：主营、运营、策划、美工、客服、推广；</p><p>产品规划：对 Amazon 市场及竞品店铺进行分析，制定价格战略方案；初步定制有竞争力的主推款、活动款，合理预算成本，规划最大效益渠道;</p><p>店铺全新上线准备：美工图片处理，产品上传，listing 优化等;</p><p>营销计划：制定全方位品牌营销战略，站内站外活动相结合，多渠道进行产品推广，达到销量暴涨与打响品牌形象双重目标。</p>'
  },
  {
    title: 'STEP 2 | TRAIL OPERATION PHASE',
    desc: '<p>塑造品牌形象：根据产品特性、目标受众、同类竞品进行全方位分析，确定品牌定位，形成整体设计理念，</p><p>打造具有高辩识度与竞争力的品牌形象，圈定受众群体，培养顾客粘性，记录每天的各项数据并进行分析，制定正式运营计划。</p>'
  },
  {
    title: 'STEP 3 | OPERATION PHASE',
    desc: '<p>定计划：制定周期性的推广计划，分阶段完成目标；</p><p>勤跟进：根据店铺的 Session、PV、转化率、客单价等数据分析店铺可能存在的问题并及时改善，周期性地进行店铺诊断；</p><p>爆款：根据店铺销售情况及 Amazon 同类目销售情况进行分析，打造爆款；</p><p>强推广：运营期推广以Amazon 站内推广为主，站外推广为辅；</p><p>优体验：优化客户体验，及时跟。</p>'
  }
]

serviceList.forEach(item => {
  document.querySelector('.service-container').innerHTML += `
    <div class="service-step-box">
      <div class="service-step-title">${item.title}</div>
      ${item.desc}
    </div>
  `
});


// 飞行鸟巢实力模块
let titleList = ['Vash<br />运营总监', 'Mike<br />IT总监', 'Sara<br />高级外语编辑']
titleList.forEach(e => {
  document.querySelector('.strength-card-list').innerHTML += `
    <div class="card">
      <img src="./image/index/case.png">
      <div class="card-footer">${e}</div>
    </div>
  `
})


// 合作流程模块
let processList = [
  {
    title: '商务洽谈',
    desc: '全面市场分析，精准品牌定位，预算等多方面洽谈。'
  },
  {
    title: '合作提案',
    desc: '总结双方意愿，评估项目前景，公司专业人士撰写项目方案。审核后，敲定合作内容并签订。'
  },
  {
    title: '项目开展',
    desc: '<p>策划：收集市场行业信息，制定有效的店铺整体规划，推广运营方案；</p><p>运营：店铺基本运营，协助产品上下架，优化和编辑；</p>'
  },
  {
    title: '优化跟进',
    desc: '周期性店铺诊断，优化用户体验，及时推进并推广，进入品牌形象深入阶段，通过品牌而非单纯产品带来高转化率。'
  }
]

processList.forEach(item => {
  document.querySelector('.process-steps').innerHTML += `
    <div class="steps-item">
      <div class="steps-title">${item.title}</div>
      <div class="steps-desc">${item.desc}</div>
    </div>
  `
});