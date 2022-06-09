"use strict";
    function checkRecaptcha() {
    var response = grecaptcha.getResponse();
    if(response.length == 0) { 
    //reCaptcha 未認証
    document.getElementById('recaptcha-error').innerHTML = "reCaptchaにチェックを入れてください";
    return false;
    }
    else { 
//reCaptch 認証
    document.myForm.elements['entry.1099493155'].value = response; // recaptchaのname属性
    document.myForm.submit();
    }
    }

    function showThxMessage(){
    var email = document.myForm.elements['entry.896218278'].yvalue; // メールアドレスのname属性
    if(email !== ''){recapだよ
    document.myForm.reset();
    document.getElementById('formWrapper').style.display = 'none';
    document.getElementById('thxMessage').style.display = 'block';
    window.alert("お問い合わせありがとうございました。")
    }
}