const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
  title.classList.toggle(CLICKED_CLASS);// CLICKED_CLASS가 거기 있는지 체크해서 없으면 add 있으면 remove한다
}
function init() { //어플리케이션 초기화함수
  title.addEventListener("click",handleClick);
}
init();
