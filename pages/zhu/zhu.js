// pages/index/index.js

Page({
  data: {
    onInitChart(F2, config) {
      const chart = new F2.Chart(config);
      const data = [{
        year: '2015 年',
        sales: 121
      }, {
        year: '2016 年',
        sales: 100
      }, {
        year: '2017 年',
        sales: 97
      }, {
        year: '2018 年',
        sales: 85
      }];
      chart.source(data,);
      chart.axis('sales',false),
      chart.tooltip({
        showItemMarker: true,
        onShow: function onShow(ev) {
          console.log(items[0]);
          const items = ev.items;
          items[0].name = null;
          items[0].name = items[0].title;
          items[0].value = '¥ ' + items[0].value;
        }
      },);
      data.forEach(r=>{
        chart.guide().text({
          top: {Boolean}, // 指定 guide 是否绘制在 canvas 最上层，默认为 true, 即绘制在最上层
          position: [r.year,r.sales], // 文本的起始位置，值为原始数据值，支持 callback
          content: '销售额'+r.sales+'万元', // 显示的文本内容
          style: {
            fill: '#666', // 文本颜色
            fontSize: '12', // 文本大小
            fontWeight: 'bold', // 文本粗细
            rotate: Math.PI / -4 // 文本旋转，以弧度为单位
          }, // 文本的图形样式属性
          offsetX: 20, // x 方向的偏移量
          offsetY: -35, // y 方向偏移量
          limitInPlot: {Boolean} // 是否将 guide 元素限制在绘图区域图，默认为 false
        });
      });

      chart.interval()
        .position('year*sales')
        .color('l(90) 0:#1890ff 1:#70cdd0'); // 定义柱状图渐变色
      chart.render();
    }
  },
});