// Создание кнопки удаления и добавление ее к каждому элементу списка
let myNodelist = document.getElementsByTagName("LI");
//Создание счетчика
let i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Логика кнопки удаления
let close = document.getElementsByClassName("close");
//Создание счетчика
let j;
for (j = 0; j < close.length; j++) {
  close[j].onclick = function() {
    let div = this.parentElement;
    div.remove();
  }
}

// Добавление галочки и класса "сhecked" к элементу , который выбран
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Добавление нового дела в список после нажатия кнопки "Добавить"
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
 
//Проверка на наличие одинаковых дел в списке и добавление или нет такого же 
  let liItem = document.getElementsByTagName('li');
  let arr = []; 
  for(let k = 0; k <= liItem.length - 1; k++){
  arr.push(liItem.item(k).innerText.replace(/×/,''));
  if(arr[k].trim() == inputValue){
        let oneMore = confirm('Такое дело уже есть, желаете добавить еще одно?');
        if(oneMore == false){
          document.getElementById("myInput").value = "";
          return;
      }
    }
  }
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  //Проверка на заполненность поля ввода
  if (inputValue === '') {
    alert("Пусто!Вы должны что-то ввести!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.remove();
    }
  }
}
