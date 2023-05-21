window.onload = function () {
    var phone = document.getElementById("phone");
    var spans = document.getElementsByTagName("span");

    //获取焦点函数
    phone.onfocus = function () {
        this.style.border = "1px solid #ff8e00";
    }
    //失去焦点函数
    phone.onblur = function () {
        this.style.border = "1px solid #aaa";
        //判断手机号码
        var phoneValue = phone.value;
        if (phoneValue == "") {
            spans[0].className = "display-inline icon-times-circle";
            spans[0].innerText = "手机号码不能为空";
            formSubmit.setAttribute("disabled", "true");
        }
        else {
            //正则匹配手机号码
            var isPhone = /^[1][3,4,5,6.7,8,9][0-9]{9}$/.test(phoneValue);
            if (isPhone) {
                spans[0].className = "display-inline icon-check-circle";
                spans[0].innerText = "手机号码格式正确";
                formSubmit.removeAttribute("disabled");
            }
            else {
                spans[0].className = "display-inline icon-times-circle";
                spans[0].innerText = "手机号码格式错误";
                formSubmit.setAttribute("disabled", "true");
            }
        }
    }

    //验证码发送和校验
    var button = document.getElementsByTagName("button");
    var code = document.getElementById("code");

    //生成验证码
    function randomNumber() {
        return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
    }
    button[0].onclick = function () {
        //生成四位验证码
        spans[1].className = "display-inline";
        spans[1].innerText = randomNumber();
    };

    //验证码校验
    code.onfocus = function () {
        this.style.border = "1px solid #ff8e00";
    }
    code.onblur = function () {
        this.style.border = "1px solid #aaa";
        //生成的验证码
        var spanValue = spans[1].innerText;
        //用户填写的验证码
        var codeValue = code.value;

        if (codeValue == "") {
            spans[2].className = "display-inline icon-times-circle";
            spans[2].innerText = "验证码不能为空";
            formSubmit.setAttribute("disabled", "true");
        }
        else {
            if (codeValue == spanValue) {
                spans[2].className = "display-inline icon-check-circle";
                spans[2].innerText = "验证码匹配正确";
                formSubmit.removeAttribute("disabled");
            }
            else {
                spans[2].className = "display-inline icon-times-circle";
                spans[2].innerText = "验证码匹配错误";
                formSubmit.setAttribute("disabled", "true");
            }
        }
    }

    //密码强度判定
    var password = document.getElementById("password");
    var tipsB = document.getElementById("tips").getElementsByTagName("b");

    //检测用户输入密码内容判断等级
    function checkPasswordLevel(pwdValue) {
        let level = 0;
        if (pwdValue.length > 6) level++;
        if (/\d/.test(pwdValue)) level++; //数字
        if (/[a-z]/.test(pwdValue)) level++; //小写字母
        if (/[A-Z]/.test(pwdValue)) level++; //大写字母
        return level;
    }

    password.onfocus = function () {
        this.style.border = "1px solid #ff8e00";
    }
    password.onblur = function () {
        this.style.border = "1px solid #aaa";
        var pwdValue = password.value;
        if (pwdValue == "") {
            spans[3].className = "display-inline icon-times-circle";
            spans[3].innerText = "密码不能为空";
            formSubmit.setAttribute("disabled", "true");
        }
    }

    //密码键盘弹起事件
    password.onkeyup = function () {
        var pwdValue = password.value;
        //判断密码等级
        var level = checkPasswordLevel(pwdValue);
        if (pwdValue == "") {
            for (let i = 0; i < tipsB.length; i++) {
                tipsB[i].style.background = "#EEEEEE";
            }
        } else {
            spans[3].className = "display-none";
        }
        if (level == 1 || level == 2) {
            for (let i = 0; i < tipsB.length; i++) {
                tipsB[i].style.background = "#EEEEEE";
            }
            tipsB[0].style.background = "red";
        }
        if (level == 3) {
            for (let i = 0; i < tipsB.length; i++) {
                tipsB[i].style.background = "#EEEEEE";
            }
            tipsB[0].style.background = "orange";
            tipsB[1].style.background = "orange";
        }
        if (level == 4) {
            for (let i = 0; i < tipsB.length; i++) {
                tipsB[i].style.background = "#EEEEEE";
            }
            tipsB[0].style.background = "green";
            tipsB[1].style.background = "green";
            tipsB[2].style.background = "green";
        }
    };

    //密码校验
    var repeatPwd = document.getElementById("repeatPwd");

    repeatPwd.onfocus = function () {
        this.style.border = "1px solid #ff8e00";
    }
    repeatPwd.onblur = function () {
        this.style.border = "1px solid #aaa";
        var passwordValue = password.value;
        //判断密码是否一样
        if (repeatPwd.value == passwordValue && passwordValue != "") {
            spans[4].className = 'display-inline icon-check-circle';
            spans[4].innerText = "密码相匹配";
            formSubmit.removeAttribute("disabled");
        }
        else {
            spans[4].className = 'display-inline icon-times-circle';
            spans[4].innerText = "密码不匹配";
            formSubmit.setAttribute("disabled", "true");
        }
    }

    //点击注册跳转页面
    var formSubmit = document.getElementById("formSubmit");
    formSubmit.onclick = function () {
        window.location.href = "./login.html?phone=" + phone.value + "&password=" + password.value;
    }
};