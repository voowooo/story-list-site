

var notes = []

function save(){
  var theme = document.getElementById("markTheme").value;
  var text = document.getElementById("text").value;
  var id = notes.length + 1;
  notes.push ({theme, text, id})
  console.log(notes);
  saveList();
  loadList();
}

function saveList() {
  localStorage.setItem('notes', JSON.stringify(notes));
}

function loadList(){
  var place = document.getElementById("place");
  place.innerHTML = "";
  var complete = 0;
  var length = notes.length;
   
  while(complete < length) {
    let div = document.createElement('div');
    let del = document.createElement("button");
    del.textContent = 'delete ' + complete;
    del.id = complete + "del";
    del.className = "del";
    div.className = "mark"

    const textARR = notes[complete];

    var theme = "<h3>" + textARR.theme + ":</h3>";
    var text = "<p class = 'p'>" + textARR.text + "</p>";
  
    var text = theme + text;

    div.innerHTML = text;

    var place = document.getElementById("place");

    place.append(div);
    place.append(del);

    complete = complete + 1;
    console.log(complete);
  }
  const btnDel = document.querySelectorAll(".del");
  btnDel.forEach(btn => {
    btn.addEventListener("click", function () {
      delNote(this.id);
    });
  });
}

function delNote(btnId){
  console.log(btnId);
  // var btnId = btnDel.id - "del";
  // console.log("button id= " + btnId);
}

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
  document.getElementById('v').innerHTML = langArr['v'][hash];
  document.getElementById('settingsButt').innerHTML = langArr['settingsButt'][hash];
  document.getElementById('STTheme').innerHTML = langArr['STTheme'][hash];
  document.getElementById('STLanguage').innerHTML = langArr['STLanguage'][hash];
}

changeLang();

var toggleSettings = 0;

function settings() {
  const settings = document.getElementById("settings");
  if (toggleSettings == 0){
    settings.style.animation = "show 0.3s";
    settings.style.display = "flex";
    toggleSettings = 1;
  } else if (toggleSettings == 1){
    // settings.style.animation = "showOut 0.7s";
    settings.style.display = "none";
    toggleSettings = 0;
  }
}

const toggleSwitch = document.getElementById('togg');
const savedToggleState = localStorage.getItem('toggleState');

    if (savedToggleState) {
      toggleSwitch.checked = JSON.parse(savedToggleState);
    }

    // Слушаем изменения состояния переключателя и сохраняем его значение в localStorage
    toggleSwitch.addEventListener('change', function() {
      localStorage.setItem('toggleState', toggleSwitch.checked);
}); 

let language = window.navigator.language;
let languageFistTwo = language.substr(0,2); // To only keep the first 2 characters.
console.log(language);
console.log(languageFistTwo);
if (languageFistTwo == 'ru') {
  location.href = window.location.pathname + '#ru';
} else {
  location.href = window.location.pathname + '#en';
};

window.addEventListener('load', () => {
  loadList();
  console.log(localStorage);
  if(localStorage.getItem('notes')) {
    notes = JSON.parse(localStorage.getItem('notes'));
    loadList();
  } else {
    console.log("Storage is empty");
  }
});