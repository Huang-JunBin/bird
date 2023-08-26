// 飞行鸟巢服务列表
let serviceList = [
  {
    title: '专业代理运营',
    img: './image/index/service01.png',
    desc: '<li>制定运营战略</li><li>强势推广</li><li>视觉包装</li><li>用户维护</li>'
  },
  {
    title: '提供专业方案',
    img: './image/index/service02.png',
    desc: '<li>Amazon官方合作</li><li>运营大咖答疑</li><li>汇国际顶级资源</li><li>每日纯干货</li>'
  },
  {
    title: '全球开店',
    img: './image/index/service03.png',
    desc: '<li>制定运营战略</li><li>强势推广</li><li>视觉包装</li><li>用户维护</li>'
  },
  {
    title: '专业的人员服务',
    img: './image/index/service04.png',
    desc: '<li>Amazon官方合作</li><li>运营大咖答疑</li><li>汇国际顶级资源</li><li>每日纯干货</li>'
  }
]

serviceList.forEach((item, i) => {
  document.getElementById('service-body').innerHTML += `
    <div class="service-card">
      <img class="icon" src="${item.img}" alt="${item.title}">
      <div class="card-title">${item.title}</div>
      <ul class="service-desc">${item.desc}</ul>
      <div class="more-btn ${i == 0 ? 'more-btn-fill' : ''}">MORE</div>
    </div>
  `
});


// 我们的策略
let strategyList = [
  {
    img: './image/index/strategy01.png',
    text: '店铺全面分析定位'
  },
  {
    img: './image/index/strategy02.png',
    text: '搜索流量分析'
  },
  {
    img: './image/index/strategy03.png',
    text: '站内优化'
  },
  {
    img: './image/index/strategy04.png',
    text: '造爆款、刷流量、创品牌'
  },
]

strategyList.forEach(item => {
  document.querySelector('.strategy-list').innerHTML += `
    <div class="strategy-item">
      <div class="img-circle"><img src="${item.img}"></div>
      <div>${item.text}</div>
    </div>
  `
});


// 飞行鸟巢案例列表
for (let i = 0; i < 3; i++) {
  document.querySelector('.case-body').innerHTML += `
    <div class="case-card">
      <div class="case-card-body">
        <img src="./image/index/case.png">
      </div>
      <div class="case-card-footer">传统工业的成功转型</div>
    </div>
  `
}