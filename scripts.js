function save(){
    theme = document.getElementById("markTheme").value;
    text = document.getElementById("text").value;
    mess = document.getElementsByClassName("alert")
    if (theme != "" & text != ""){
      br = "br";
      const header = document.createElement("div");        // создаем заголовок <h1>
      header.textContent = theme + ": " + text; // определяем текст элемента
      header.className = "mark";
      header.id = "mark";
      var place = document.getElementById("place");
      place.appendChild(header);
      // добавляем элемент h1 перед параграфом firstP
      document.body.appendChild(place);
      document.getElementById("markTheme").value = "";
      document.getElementById("text").value = "";
      saveList();
      console.log(localStorage);
    } else if (theme == "" & text != ""){
      alert("theme of the mark is empty")
    } else if (theme != "" & text == ""){
      alert("text of the mark is empty")
    } else {
      alert("fields are empty")
    }
}

function saveList(){
  localStorage.storedList = document.getElementById("place").innerHTML;
}

function loadList(){
  document.getElementById("place").innerHTML = localStorage.storedList;
}

window.addEventListener('load', () => {
  if(localStorage.length == 0){
    console.log("storage is empty");
  } else{
    loadList();
  }
});

function voowoo(){
  console.log("cleared");
  localStorage.clear();
}

function devMode(){
    clearButton = document.getElementById("clearButton");
    clearButton.style.display = "";
}


// Выбираем кнопку
const btn = document.getElementById("modeT");
// Выбираем настройки темы из localStorage
const currentTheme = localStorage.getItem("theme");
// Если текущая тема в localStorage равна "dark"…
if (currentTheme == "dark") {
  // …тогда мы используем класс .dark-theme
  document.body.classList.add("dark-theme");
}

// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function() {
  // Переключаем класс .dark-theme при каждом щелчке
  document.body.classList.toggle("dark-theme");
  // Допустим, тема светлая
  let theme = "light";
  // Если <body> содержит класс .dark-theme…
  if (document.body.classList.contains("dark-theme")) {
    // …тогда делаем тему тёмной
    theme = "dark";
  }
  // После чего сохраняем выбор в localStorage
  localStorage.setItem("theme", theme);
});