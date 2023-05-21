window.onload = function () {
    var submit = document.getElementById("submit");
    var str = location.href;

    //获取注册页面传过来的数据
    function getData(url) {
        var theRequest = new Object();
        var index = url.indexOf("?");
        if (index != -1) {
            var str = url.substr(index + 1);
            // phone=13709534023&password=123456
            strs = str.split("&");
            // ['phone=13709534023', 'password=123456']
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }
    var data = getData(str);

    //判断手机号码是否匹配
    var userName = document.getElementById('username');
    var userPass = document.getElementById('userpass');

    userName.onfocus = function () {
        this.parentNode.style.border = "1px solid #ff8e00";
    }
    userName.onblur = function () {
        this.parentNode.style.border = "1px solid #aaa";
        if (userName.value != "") {
            if (userName.value != data["phone"]) {
                userPass.className = "display-inline icon-times-circle";
                userPass.innerText = "手机号码不匹配";
                submit.setAttribute('disabled', true);
            } else {
                userPass.className = "display-inline icon-check-circle";
                userPass.innerText = "手机号码匹配";
                submit.removeAttribute('disabled');
            }
        }
    }

    //判断密码是否匹配
    var passWord = document.getElementById('password');
    var passTo = document.getElementById('passto');

    passWord.onfocus = function () {
        this.parentNode.style.border = "1px solid #ff8e00";
    }
    passWord.onblur = function () {
        this.parentNode.style.border = "1px solid #aaa";
        if (passWord.value != "") {
            if (passWord.value != data["password"]) {
                passTo.className = "display-inline icon-times-circle";
                passTo.innerText = "密码不匹配";
                submit.setAttribute('disabled', true);
            } else {
                passTo.className = "display-inline icon-check-circle";
                passTo.innerText = "密码匹配";
                submit.removeAttribute('disabled');
            }
        }
    }

    //点击登录跳转
    submit.onclick = function () {
        if (passWord.value == "" || userName.value == "") {
            alert('请填写信息再登录！');
        } else {
            window.location.href = "./index.html?username=" + userName.value;
        }
    }
};