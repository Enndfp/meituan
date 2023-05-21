// 获取节点
var addrShow = document.getElementById('addr-show');
var prov = document.getElementById('prov');
var city = document.getElementById('city');
var county = document.getElementById('county');
var btn = document.querySelector(".btn");
var commit = document.getElementById("commit");

//用于保存省市区
var current = {
    prov: '',
    city: '',
    country: ''
};

//自动加载省份信息 自执行函数
(function showProv() {
    var len = provice.length;
    for (var i = 0; i < len; i++) {
        //创建一个option的节点 将数据存放在select表单中
        var provOpt = document.createElement('option');
        //加入数据
        provOpt.value = provOpt.innerText = provice[i]['name'];
        //将创建出来的节点插入到select节点中
        prov.appendChild(provOpt);
    }
}());

//根据省的信息来显示市的信息
function showCity(obj) {
    var val = obj.options[obj.selectedIndex].value;

    //用户第二次选择城市的时候 要处理bug
    if (val != current.prov) {
        current.prov = val;
        city.length = 1;
        btn.disabled = true;
    }

    //查找省的索引
    if (val != '') {
        //省的索引
        var len = provice.length;
        var provIndex = 0;
        for (var i = 0; i < len; i++) {
            if (val == provice[i]['name']) {
                provIndex = i;
            }
        }
    }
    //遍历市的节点
    var cityLen = provice[provIndex]["city"].length;
    for (var j = 0; j < cityLen; j++) {
        //创建市的节点
        var cityOpt = document.createElement('option');
        //向下拉列表里面添加数据
        cityOpt.value = cityOpt.innerText = provice[provIndex]["city"][j].name;
        city.appendChild(cityOpt);
    }
}

//根据所选城市进行区县列表的展示
function showCounty(obj) {
    //城市的值
    var val = obj.options[obj.selectedIndex].value;
    //处理bug 两次不一样的话清空当前选项卡
    if (val != current.city) {
        current.city = val;
        county.length = 1;
        btn.disabled = true;
    }
    //查找省索引
    //省的索引
    var provlen = provice.length;
    var provIndex = 0;
    for (var i = 0; i < provlen; i++) {
        if (current.prov == provice[i]['name']) {
            provIndex = i;
            break;
        }
    }
    //查找城市索引
    var cityLen = provice[provIndex]["city"].length;
    var cityIndex = 0;
    for (var i = 0; i < cityLen; i++) {
        if (current.city == provice[provIndex]['city'][i].name) {
            cityIndex = i;
            break;
        }
    }
    //查找对应的县区
    if (val != '') {
        var countryLen = provice[provIndex]["city"][cityIndex].districtAndCounty.length;
        //如果县区存在就开始遍历
        for (var n = 0; n < countryLen; n++) {
            var countryOpt = document.createElement('option');
            countryOpt.innerText = provice[provIndex]["city"][cityIndex].districtAndCounty[n];
            countryOpt.value = provice[provIndex]["city"][cityIndex].districtAndCounty[n];
            county.appendChild(countryOpt);
        }
    }
}
//选择县区后的处理函数
function selectCountry(obj) {
    current.country = obj.options[obj.selectedIndex].value;
    if (current.city != '' && current.country != '') {
        btn.disabled = false;
    }
}
//点击确定
function showAddr() {
    addrShow.value = current.prov + '-' + current.city + '-' + current.country;
}

