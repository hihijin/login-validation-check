const username = document.querySelector("#username");
const password = document.querySelector("#password");
const passwordRetype = document.querySelector("#password-retype");
const button = document.querySelector("button");
const successMessage = document.querySelector(".success-message");
const failureMessage = document.querySelector(".failure-message");
const mismatchMessage = document.querySelector(".mismatch-message");
const requiredMessage = document.querySelector(".required-message");
const user = document.querySelector(".user");
const welcome = document.querySelector(".welcome");
const login = document.querySelector(".login");
const splashScreen = document.querySelector(".splash-screen");
const success = document.querySelector(".success");

username.onkeyup = function(){ //이 함수는 eventhandler

    if(isMoreThan4Length(username.value)){
        successMessage.classList.remove("hide");
        failureMessage.classList.add("hide");
        console.log(username.value);
    }
    else{
        failureMessage.classList.remove("hide");
        successMessage.classList.add("hide");
        console.log(username.value);
    }
}

function isMoreThan4Length(value){
    return value.length >=4
}

passwordRetype.onkeyup = function(){
    if(isMatch(password.value,passwordRetype.value)){
        mismatchMessage.classList.add("hide");
    }
    else{
        mismatchMessage.classList.remove("hide");
    }
}
//isMatch함수사용하기
function isMatch(password1, password2){
    if(password1===password2){
        return true;
    }
    return false;
}

button.onclick = function(){
    if(username.value !== "" && password.value !== "" && passwordRetype.value !== "" ){
        requiredMessage.classList.add("hide");
        welcome.classList.remove("hide");
        success.classList.remove("hide");
        splashScreen.classList.remove("hide");
        login.classList.add("hide");
        user.textContent = "환영합니다, " + username.value +"님";      
    }
    else{
        requiredMessage.classList.remove("hide");}
}



//~할 때라는 것은 event, event에 따라 실행되는 함수는 eventhandler
//아이디 입력창(username)에 글자를 키보드로 입력할 때(onkeyup),
//글자수가 4개이상이면(isMoreThan4Length 함수로 빼기)
//"사용할 수 있는 아이디입니다"가 메시지로 출력된다.
//글자수가 4개이하라면
//"아이디는 네 글자 이상이어야 합니다"가 메시지로 출력된다.

//[비밀번호 확인] 입력창에서 값을 입력(keyup)하면
//[비밀번호] 값과 [비밀번호 확인] 값이 일치하는지 확인하고,
//일치하지 않은 경우, 불일치 메시지를 화면에 표시합니다.
//"비밀번호가 일치하지 않습니다" 메시지 출력
//일치하다면 출력하지 않기

//회원가입 완료 버튼을 눌렀을 때
//아직 입력하지 않은 곳이 있다면 모두 입력해야 누를 수 있습니다.라는 메시지 출력