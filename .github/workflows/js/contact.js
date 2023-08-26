// 创建Map实例
var map = new BMapGL.Map("map");


// 创建点坐标 
var point_1 = new BMapGL.Point(121.426857, 31.270178)
// 初始化地图，设置中心点坐标和地图级别
map.centerAndZoom(point_1, 16);
// 自定义标记点
var GPS_01_gif = 'data:image/gif;base64,R0lGODlhEwAaANUqAO0tLdokL8sgNf///+1GR800SdZWUthic+IqMey0uPrn6fK+wvFYVv77++43N+F8iOiEkfGKivna3vjg4OqtsrmTXPbIyv35+e59ffrT1fNhX+SXm/339uyMmf39/vOcmdp3dstOevh0cPjk5vzx8fe0tPvr7PGTi+ppaPnw6////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwNjcgNzkuMTU3NzQ3LCAyMDE1LzAzLzMwLTIzOjQwOjQyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0E5MUU4MkZCQ0EwMTFFODlGNDQ5OUEwQTJENEY0ODUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0E5MUU4MzBCQ0EwMTFFODlGNDQ5OUEwQTJENEY0ODUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3QTkxRTgyREJDQTAxMUU4OUY0NDk5QTBBMkQ0RjQ4NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3QTkxRTgyRUJDQTAxMUU4OUY0NDk5QTBBMkQ0RjQ4NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAACoALAAAAAATABoAAAbQQJVQ2DBJEonFhDRsDieQgkAQmBo2CqeqQSkECAwGwQFABAwL50ZAwIgIgLg8ULAMF+wTXM4H0CcqKSEOEXt9fAEPDXgaDHIOGIWHAgoQARqPEwMDHI6IFAcIhhGbmyV9iQdkch+lAxaoEAcBfAwepRGxoX0oFhm5qA+Wh8RxAkkCxcSUCgYIyogPFyoJydBlBRJDD7TQAhRNzd3EASAcThJe5AZZWtWHCAUZWkMd1nLH9EMNs/gd+k1GGKAV4EADgE3SnZmG0IkAgBUiNnQSBAA7';
var icon_1 = new BMapGL.Icon(GPS_01_gif, new BMapGL.Size(15, 20));
// 创建点标记
var marker_1 = new BMapGL.Marker(point_1, { icon: icon_1 });
// 在地图上添加点标记
map.addOverlay(marker_1);
// 创建图文信息窗口
var DOM_1 = `<div style="width:300px;padding-bottom: 10px;">
              <img style="width:100%;" id="img_1" src="./image/contact/address_1.png"/>
              <h3 align="center">上海飞行鸟巢商业管理有限公司</h3>
              <p>地址：①上海市普陀区交暨路207弄5号A座1层</p>
            </div>`;
var infoWindow_1 = new BMapGL.InfoWindow(DOM_1);
// marker添加点击事件
marker_1.addEventListener('click', function () {
  this.openInfoWindow(infoWindow_1);
  // 图片加载完毕重绘infoWindow
  document.getElementById('img_1').onload = function () {
    // 防止在网速较慢时生成的信息框高度比图片总高度小，导致图片部分被隐藏
    infoWindow_1.redraw();
  };
});


// 创建点坐标 
var point_2 = new BMapGL.Point(121.428369, 31.268431)
// 初始化地图，设置中心点坐标和地图级别
// map.centerAndZoom(point_2, 16);
// 自定义标记点
var GPS_02_gif = 'data:image/gif;base64,R0lGODlhEwAZANUiAEWoLyiKGf///+fx5tfo1DqINK3OqjeVKRFwCRx9ECF6G8DbvlSwP/r9+lmkT5jThH6xe2y5XlOZSneuc3OrbobHdqPSnGOzVY2/iPX69fj7+P39/melXnfFZEOZNUuiPfn6/fD27////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwNjcgNzkuMTU3NzQ3LCAyMDE1LzAzLzMwLTIzOjQwOjQyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzkwQkM3MEZCQkY5MTFFOEIzQjA4ODM1ODBFOUVFNUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzkwQkM3MTBCQkY5MTFFOEIzQjA4ODM1ODBFOUVFNUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozOTBCQzcwREJCRjkxMUU4QjNCMDg4MzU4MEU5RUU1RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozOTBCQzcwRUJCRjkxMUU4QjNCMDg4MzU4MEU5RUU1RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAACIALAAAAAATABkAAAbIQJFQ2BgQDMhBaMgcEiYFRGKKKGAGTVHDoPBcIheA+BAoLJoYRaXCELvHirNwUXiE3/hAgCAaSDBteIIBFA10EW8MFRaBbwgDEA6JAwICGYhvCQYSH28PG5UCC3kTDgdvFqENBKQSp24RoJUPra9uHQQEtHkUEAGCwGKaCwnBwAkDAwW2xgABHCAiBgjNcHxCFL/NCBZMytrAzxlNBArMbmVYWdOCBwrXWSK+eAgG8UMaDuABEPfeBb8CONDgj0m5MuMKNkHgLwgAOw==';
var icon_2 = new BMapGL.Icon(GPS_02_gif, new BMapGL.Size(15, 20));
// 创建点标记
var marker_2 = new BMapGL.Marker(point_2, { icon: icon_2 });
// 在地图上添加点标记
map.addOverlay(marker_2);
// 创建图文信息窗口
var DOM_2 = `<div style="width:300px;padding-bottom: 10px;">
              <img style="width:100%;" id="img_2" src="./image/contact/address_2.png"/>
              <h3 align="center">上海飞行鸟巢商业管理有限公司</h3>
              <p>地址：②上海市普陀区交暨路152号A座115室</p>
            </div>`;
var infoWindow_2 = new BMapGL.InfoWindow(DOM_2);
// marker添加点击事件
marker_2.addEventListener('click', function () {
  this.openInfoWindow(infoWindow_2);
  // 图片加载完毕重绘infoWindow
  document.getElementById('img_2').onload = function () {
    // 防止在网速较慢时生成的信息框高度比图片总高度小，导致图片部分被隐藏
    infoWindow_2.redraw();
  };
});


//开启鼠标滚轮缩放
map.enableScrollWheelZoom(true);