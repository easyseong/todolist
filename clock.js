const clockContainer = document.querySelector(".js-clock"), //js-clock이라는 class이름을 찾아준다.쿼리셀렉터는 element의 자식을 탐색
clockTitle = clockContainer.querySelector("h1");

function getTime(){
  const date = new Date(); //Date는 class다. 객체(obj)라고 생각해
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  //이제 해야할 것은 clockTitle 인데<h1>00:00</h1>에 시계정보를 넣을 것
  clockTitle.innerText= `${hours<10 ? `0${hours}` : hours}:${
    minutes<10 ? `0${minutes}` : minutes}:${
    seconds<10 ? `0${seconds}` : seconds
  }`; //innerText= 객체 안에 문자를 넣기 위한것, ``백틱기호 사용
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
