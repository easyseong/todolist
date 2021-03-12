const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event){//event를 넣는 이유뭐냐
  const btn = event.target;
  const li = btn.parentNode; //event.target.parentNode
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo){
    return toDo.id !== parseInt(li.id);//parseInt 스트링을 숫자로
  }); //filterFn 함수가 배열 안의 모든 toDos을 통과한다. 그리고 ㅅtrue인 toDos만 return 한다.
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos(){
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //뭐냐 이거???? 리스트의 값을 TODOS_LS에 저장
}

function paintToDo(text){
  const li =document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length+1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo); //버튼이 눌리는 것을 인식
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);  //뭔가를 그의 father element안에 넣는다
  li.id = newId;//버튼을 클릭했을 때 어떤 li를 지워야 하는지 알 기위해 li들에게 id를 지정
  toDoList.appendChild(li);
  const toDoObj = { //toDos array에 할일을 추가하기 위한 객체,스토리지에 저장하기위해 이렇게 저장
    text:text,
    id: newId
  };
  toDos.push(toDoObj); // push를 써서 array안에 element하나(여기서는 toDoObj)를 넣어줄 수 있다.
  saveToDos();
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value=""; //글씨 지우기
}


function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null){//toDos를 불러오는 작업
      const parsedToDos = JSON.parse(loadedToDos); //스트링을 object로 변환
      //array의 forEach:배열에 담겨있는 것들 각각에 한번씩 기본적으로 함수를 실행
      parsedToDos.forEach(function(a) {
        paintToDo(a.text);
      });//함수를 함수안에서 선언핤구도 있구나
  }
} //toDos를 가져온 것을 object로변환하고 각각에대해 paintToDo 실행

function init(){
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
