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
const btn = document.getElementById("togg");
// Выбираем настройки темы из localStorage
const currentTheme = localStorage.getItem("theme");
// Если текущая тема в localStorage равна "dark"…
if (currentTheme == "dark") {
  // …тогда мы используем класс .dark-theme
  document.body.classList.add("dark-theme");
}

// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function() {
  console.log("cheked")
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







const select = document.getElementById("select");
const allLang = ['en', 'ru'];

select.addEventListener('change', changeURL);

function changeURL() {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLang(){
  let hash = window.location.hash;
  hash = hash.substr(1);
  console.log(hash);
  if (!allLang.includes(hash)){
    location.href = window.location.pathname + '#en';
    location.reload();
  }
  select.value = hash;
  document.querySelector('title').innerHTML = langArr['unit'][hash];
  document.getElementById('vop').innerHTML = langArr['name'][hash];
  document.getElementById('markTheme').placeholder = langArr['markTheme'][hash];
  document.getElementById('text').placeholder = langArr['text'][hash];
  document.getElementById('save').innerHTML = langArr['save'][hash];
  document.getElementById('adText').innerHTML = langArr['adText'][hash];
  document.getElementById('v').innerHTML = langArr['v'][hash];
}

changeLang();

var toggleSettings = 0;

function settings() {
  const settings = document.getElementById("settings");
  if (toggleSettings == 0){
    settings.style.display = "flex";
    toggleSettings = 1;
  } else if (toggleSettings == 1){
    settings.style.display = "none";
    toggleSettings = 0;
  }
}