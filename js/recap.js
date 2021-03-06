"use strict";

function checkRecaptcha() {
    var response = grecaptcha.getResponse();
    if (response.length == 0) {
        //reCaptcha 未認証
        window.alert("reCaptchaが未認証です");
        return false;
    } else {
        //reCaptch 認証
        document.myForm.elements['entry.1099493155'].value = response; // recaptchaのname属性
        document.myForm.submit();
    }
}

function showThxMessage() {
    var text = document.myForm.elements['entry.896218278'].value; // ニックネームのname属性
    if (text !== '') {
        document.myForm.reset();
        window.alert("ご協力ありがとうございました")
    }
}
