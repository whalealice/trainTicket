var path = require('path'); //系统路径模块
var fs = require('fs'); //文件模块
const express = require('express')

const app = express();

app.get('/', (request, response) => {
    response.status(200)
    response.send('hello node')
    response.end()
});

app.get('/rest/cities', (request, response) => {
    // response.send({
    //     data: [{ "value": "110000", "label": "北京市", "children": [{ "value": "110100", "label": "北京城区", "children": [{ "value": "110101", "label": "东城区" }, { "value": "110102", "label": "西城区" }, { "value": "110105", "label": "朝阳区" }, { "value": "110106", "label": "丰台区" }, { "value": "110107", "label": "石景山区" }, { "value": "110108", "label": "海淀区" }, { "value": "110109", "label": "门头沟区" }, { "value": "110111", "label": "房山区" }, { "value": "110112", "label": "通州区" }, { "value": "110113", "label": "顺义区" }, { "value": "110114", "label": "昌平区" }, { "value": "110115", "label": "大兴区" }, { "value": "110116", "label": "怀柔区" }, { "value": "110117", "label": "平谷区" }, { "value": "110118", "label": "密云区" }, { "value": "110119", "label": "延庆区" }] }] },
    //     { "value": "120000", "label": "天津市", "children": [{ "value": "120100", "label": "天津城区", "children": [{ "value": "120101", "label": "和平区" }, { "value": "120102", "label": "河东区" }, { "value": "120103", "label": "河西区" }, { "value": "120104", "label": "南开区" }, { "value": "120105", "label": "河北区" }, { "value": "120106", "label": "红桥区" }, { "value": "120110", "label": "东丽区" }, { "value": "120111", "label": "西青区" }, { "value": "120112", "label": "津南区" }, { "value": "120113", "label": "北辰区" }, { "value": "120114", "label": "武清区" }, { "value": "120115", "label": "宝坻区" }, { "value": "120116", "label": "滨海新区" }, { "value": "120117", "label": "宁河区" }, { "value": "120118", "label": "静海区" }, { "value": "120119", "label": "蓟州区" }] }] },
    //     ],
    //     success: true,
    //     msg: '城市获取成功'
    // })
    var file = path.join(__dirname, 'city.json');
    // 读取json文件
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) {
            response.send('文件读取失败');
        } else {
            // console.log('qqqq', data, typeof data)
            response.send({
                data: eval(data),
                success: true,
                msg: '城市获取成功'
            })
        }
    });
   
})

app.listen(5000)