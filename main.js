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
    div.style.display = "none";
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
      div.style.display = "none";
    }
  }
}