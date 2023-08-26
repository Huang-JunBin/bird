// 获取案例文章列表
const data = caseList()

let template = ''
data.forEach(e => {
  template += `
    <div class="case-item" onclick="toDetail(${e.id})">
      <div class="case-img"><img src="${e.picture}"></div>
      <div class="case-text">
        <div class="case-title text-row-1">${e.title}</div>
        <p class="text-row-3">${e.desc}</p>
        <time>
          <img src="./image/case_presentation/time.png" />${e.time}
        </time>
      </div>
    </div>
  `
})
// 渲染列表
document.getElementById('case-list').innerHTML = template

// 跳转详情页
function toDetail(id) {
  window.open('./case_detail.html?id=' + id)
}