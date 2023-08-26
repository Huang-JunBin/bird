let result = {}
window.onload = function () {
  let currentIndex = 0
  // 当前阅读的文章ID
  let id = getParam('id')

  // 获取文章列表
  const data = caseList()
  // 查找指定 ID 的文章
  data.some((value, index) => {
    if (value.id == id) {
      currentIndex = index
      return true
    }
  })

  // 获取详情页面需要展示的数据
  result = getData(data, currentIndex)
  init()
}


// 初始化页面数据
function init() {
  document.getElementById('title').innerText = result.article.title
  document.getElementById('time').innerText = result.article.time
  document.getElementById('content').innerHTML = result.article.content
  document.getElementById('pre').innerText = result.pre.title
  document.getElementById('next').innerText = result.next.title
}

// 获取当前页面相关数据
function getData(data, currentIndex) {
  let temp = {}
  let preIndex = (currentIndex == 0) ? data.length - 1 : currentIndex - 1
  let nextIndex = (currentIndex == data.length - 1) ? 0 : currentIndex + 1
  temp['article'] = data[currentIndex]
  temp['pre'] = { id: data[preIndex]['id'], title: data[preIndex]['title'] }
  temp['next'] = { id: data[nextIndex]['id'], title: data[nextIndex]['title'] }
  return temp
}

// 切换文章
function toDetail(cmd) {
  window.open('./case_detail.html?id=' + result[cmd]['id'])
}

// 获取路径参数值
function getParam(param) {
  let href = window.location.href
  if (href.split('?').length != 2) {
    return
  }

  let params = href.split('?')[1].split('&')
  let kv = params.find(e => e.split('=')[0] == param)
  if (kv) {
    return kv.split('=')[1]
  }
}