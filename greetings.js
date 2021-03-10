const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings")

const USER_LS = "currentUser",
      SHOWING_CN = "showing";

function saveName(text){//사용자의 이름을 기억하는 함수
  localStorage.setItem(USER_LS,text);
}


function handleSubmit(event){
  event.preventDefault(); // 이벤트가 발생(엔터누르면)하면 실행되는 기본동작(여기서는 새로고침)을 막는다
  const currentValue = input.value; //currentValue에 input값을 넣는다
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit",handleSubmit); //무언가를 form에 제출(submit)하면 함수실행

}

function paintGreeting(text){
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser=== null) {
    askForName();
  }else{
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
