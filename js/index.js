window.onload = function () {
    // 导航栏下拉菜单
    var dropdown = document.getElementById("dropdown");
    var dropdownlis = dropdown.getElementsByTagName("li");
    for (let i = 0; i < dropdownlis.length; i++) {
        if (i == 1) {
            continue;
        }
        dropdownlis[i].onmouseover = function () {
            this.children[1].classList.add("displayblock");
        }
        dropdownlis[i].onmouseout = function () {
            this.children[1].classList.remove("displayblock");
        }
    }
    // 全部分类菜单
    var dropright = document.getElementById("dropright");
    var droprightlis = dropright.getElementsByTagName("li");
    for (var i = 0; i < droprightlis.length; i++) {
        droprightlis[i].onmouseover = function () {
            this.children[3].classList.add('displayblock');
        }
        droprightlis[i].onmouseout = function () {
            this.children[3].classList.remove('displayblock');
        }
    }
    // 轮播图效果的开发
    var carousel = document.getElementById('carousel');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var image = document.getElementById('image');
    var numlist = document.getElementById('number').getElementsByTagName('li');
    // 初始化
    image.src = "images/ad01.jpg"
    var add = 1;
    numlist[0].style.backgroundColor = '#fff';
    // 鼠标移入移出轮播区域显示隐藏左右箭头
    carousel.onmouseover = function () {
        left.style.display = 'block';
        right.style.display = 'block';
        clearInterval(timer);
    }
    carousel.onmouseout = function () {
        left.style.display = 'none';
        right.style.display = 'none';
        lunbo();
    }
    // 点击左右箭头切换图片
    right.onclick = function () {
        add++;
        if (add > 6) {
            add = 1;
        }
        image.src = "images/ad0" + add + ".jpg";
        // 获取li的下标匹配
        var x = add - 1;
        for (var i = 0; i < numlist.length; i++) {
            numlist[i].style.backgroundColor = '#3e3e3e';
            if (x == i) {
                numlist[i].style.backgroundColor = '#fff';
            }
        }
    }
    left.onclick = function () {
        add--;
        if (add < 1) {
            add = 6;
        }
        image.src = "images/ad0" + add + ".jpg";
        // 获取li的下标匹配
        var x = add - 1;
        for (var i = 0; i < numlist.length; i++) {
            numlist[i].style.backgroundColor = '#3e3e3e';
            if (x == i) {
                numlist[i].style.backgroundColor = '#fff';
            }
        }
    }
    // 鼠标划过li的时候切换图片
    for (var i = 0; i < numlist.length; i++) {
        numlist[i].onmouseover = function () {
            var add = this.innerHTML;
            image.src = "images/ad0" + add + ".jpg";
            // 获取li的下标匹配
            var x = add - 1;
            for (var i = 0; i < numlist.length; i++) {
                numlist[i].style.backgroundColor = '#3e3e3e';
                if (x == i) {
                    numlist[i].style.backgroundColor = '#fff';
                }
            }
        }
    }
    // 定时轮播调用
    function lunbo() {
        timer = setInterval(function () {
            add++;
            if (add > 6) {
                add = 1;
            }
            image.src = "images/ad0" + add + ".jpg";
            // 获取li的下标匹配
            var x = add - 1;
            for (var i = 0; i < numlist.length; i++) {
                numlist[i].style.backgroundColor = '#3e3e3e';
                if (x == i) {
                    numlist[i].style.backgroundColor = '#fff';
                }
            }
        }, 3000)
    }
    // 执行轮播函数
    lunbo();

    //猫眼电影鼠标移动切换的效果
    var navItem = document.querySelectorAll('.nav-item');
    var mcb = document.querySelector('.movie-content-bottom');

    for (let i = 0; i < navItem.length; i++) {
        navItem[i].onmouseover = function () {
            for (var j = 0; j < navItem.length; j++) {
                navItem[j].children[0].style.display = 'none';
                mcb.children[j].style.display = 'none';
            }
            this.children[0].style.display = 'block';
            mcb.children[i].style.display = 'block';
        }
    }
    // 点击进行左右滑动的效果
    var slider = document.querySelectorAll('.slider');
    var sliderContent = document.querySelectorAll('.slider-content');
    var btnPre = document.getElementsByClassName('btn-pre');
    var btnNext = document.getElementsByClassName('btn-next');
    //初始化
    var x = 0;
    for (let i = 0; i < 2; i++) {
        slider[i].onmouseover = function () {
            btnPre[i].style.display = 'block';
            btnNext[i].style.display = 'block';
        }
        slider[i].onmouseout = function () {
            btnPre[i].style.display = 'none';
            btnNext[i].style.display = 'none';
        }
        btnNext[i].onclick = function () {
            x = x - 1165
            if (x < -1165) {
                x = -1165;
            }
            sliderContent[i].style.left = x + 'px';
        }
        btnPre[i].onclick = function () {
            x = x + 1165
            if (x > 0) {
                x = 0;
            }
            sliderContent[i].style.left = x + 'px';
        }
    }

    //推荐民宿的显示和隐藏
    var hotelTab = document.getElementById('hotel-tab');
    var hotelTabLi = hotelTab.getElementsByTagName('li');
    var container = document.getElementById('container');
    var containerDiv = container.getElementsByClassName('tablist');

    for (let i = 0; i < hotelTabLi.length; i++) {
        hotelTabLi[i].onmouseover = function () {
            for (var j = 0; j < hotelTabLi.length; j++) {
                hotelTabLi[j].className = '';
                containerDiv[j].style.display = 'none';
            }
            this.className = 'act';
            containerDiv[i].style.display = 'block';
        }
    }
}