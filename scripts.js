var currentAppVersion = "2.7"; // Устанавливаем текущую версию приложения

var textForLog = "added the ability to edit the topic and text of notes: </br> just double-click on the topic or text </br> </br> added auto-sorting of notes </br> if they have the same topic"

var tag = "0";
var tag = "0";
var notes = [];
var buttons = [];
var confirm = document.getElementById("delConf");
var confTheme = document.getElementById("confTheme");
var initTheme = "none";
var initText = "none";
var IsTheme = true;
var ShowChangeLog = true;




function closeEdit(){
  var editDiv = document.getElementsByClassName('editDiv')[0]; // Получаем первый элемент с классом 'editDiv'
  editDiv.style.display = "none";
}

function editTheme() {
  var newText = document.getElementById('edit').value;
  
  if(IsTheme == true){
    editTextDiv.innerHTML = "edit theme";
    var foundIndex = notes.findIndex(note => note.theme === initTheme); // Ищем индекс заметки с темой initTheme
    if (foundIndex !== -1) { // Если заметка найдена
      notes[foundIndex].theme = newText; // Обновляем текст заметки
      saveList(); // Сохраняем изменения
      loadList(); // Загружаем обновленный список заметок
    } else {
      console.log("Note with theme " + initTheme + " not found."); // Выводим сообщение об ошибке, если заметка не найдена
    }
  } else {
    editTextDiv = "edit text";
    var foundIndex = notes.findIndex(note => note.text === initTheme); // Ищем индекс заметки с темой initTheme
    if (foundIndex !== -1) { // Если заметка найдена
      notes[foundIndex].text = newText; // Обновляем текст заметки
      saveList(); // Сохраняем изменения
      loadList(); // Загружаем обновленный список заметок
    } else {
      console.log("Note with theme " + initTheme + " not found."); // Выводим сообщение об ошибке, если заметка не найдена
    }
  }
  var editDiv = document.getElementsByClassName('editDiv')[0]; // Получаем первый элемент с классом 'editDiv'
  editDiv.style.display = "none";
}


function save() {
  var theme = document.getElementById("markTheme").value;
  var text = document.getElementById("text").value;
  var foundIndex = notes.findIndex(note => note.theme === theme); // Ищем индекс заметки с темой initTheme
  console.log("index= " + foundIndex);
  if (foundIndex !== -1) { // Если заметка найдена
      notes[foundIndex].text = notes[foundIndex].text + "</br>" + text;
      saveList();
      loadList();
  } else {
    var id = notes.length + 1;
    notes.push({ theme, text, id });
    console.log(notes);
    saveList();
    loadList();
  }
  document.getElementById("markTheme").value = "";
  document.getElementById("text").value = "";
}

function saveList() {
  localStorage.setItem('notes', JSON.stringify(notes));
  localStorage.setItem('buttons', JSON.stringify(buttons)); // Сохраняем кнопки в localStorage
}

function loadList() {
  var selectThemeMenu = document.getElementById('selectTheme');
  selectThemeMenu.innerHTML = "";
  var place = document.getElementById("place");
  place.innerHTML = "";
  var complete = 0;
  var length = notes.length;

  while (complete < length) {
    let divTheme = document.createElement('div');
    divTheme.id = "divThemeDiv";
    let divText = document.createElement('div');
    divText.id = "divTextDiv";
    let Mark = document.createElement('div');
    Mark.className = "Mark";



    const textARR = notes[complete];

    var markAreas =document.createElement('div');
    markAreas.style.display = "flex";
    markAreas.style.flexFlow = "column";

    var theme = document.createElement('h3'); // Создаем элемент h3 для темы
    theme.className = "noteTheme";
    theme.innerHTML = textARR.theme.replace(/\n/g, "<br>");
    theme.addEventListener("dblclick", function () { // Применяем метод addEventListener к элементу
      var editDiv = document.getElementsByClassName('editDiv')[0]; // Получаем первый элемент с классом 'editDiv'
      initTheme = textARR.theme;
      console.log(initTheme);
      IsTheme = true;
      var editTextDiv = document.getElementById('editTextDiv');
      editTextDiv.innerHTML = "Edit Theme";
      document.getElementById('edit').value = textARR.theme;
      editDiv.style.display = "flex";
    });

    var selectThemeMenu = document.getElementById('selectTheme');
    var optTheme = document.createElement('option');
    optTheme.innerHTML = theme.innerHTML; // Предполагается, что `theme` где-то определен
    optTheme.value = theme.innerHTML; // Предполагается, что `theme` где-то определен
    console.log(optTheme.value);

    // Добавляем пункт в меню выбора
    selectThemeMenu.appendChild(optTheme);

    // Добавляем обработчик события change к меню выбора
    selectThemeMenu.addEventListener("change", function(){
      document.getElementById("markTheme").value = selectThemeMenu.value;
      console.log(selectThemeMenu.value); // Выводим в консоль значение выбранного пункта
    });

    
    var text = document.createElement('p'); // Создаем элемент h3 для темы
    text.className = "noteText";
    text.innerHTML = textARR.text.replace(/\n/g, "<br>");
    console.log(text.innerHTML)
    text.addEventListener("dblclick", function () { // Применяем метод addEventListener к элементу
      var editDiv = document.getElementsByClassName('editDiv')[0]; // Получаем первый элемент с классом 'editDiv'
      initTheme = textARR.text;
      console.log(initTheme);
      IsTheme = false;
      var editTextDiv = document.getElementById('editTextDiv');
      editTextDiv.innerHTML = "Edit Text";
      document.getElementById('edit').value = textARR.text;
      editDiv.style.display = "flex";
    });


    divTheme.appendChild(theme);
    divText.appendChild(text);

    // Создаем кнопку удаления
    let del = document.createElement("button");
    
    del.style.width = "30px";
    del.style.height = "30px";
    del.style.padding = "0px";
    del.textContent = "×";
    del.id = complete + "del";
    del.className = "del";

    // Добавляем обработчик события для кнопки удаления
    del.addEventListener("click", function () {
      tag = this.id;
      tagTHEME = tag.replace(new RegExp("del", 'g'), '').trim();;
      console.log(tag);
      confTheme.innerHTML = notes[tagTHEME].theme;
      confirm.style.display = "flex";
    });



    // Добавляем div на страницу
    selectThemeMenu.appendChild(optTheme);
    place.appendChild(Mark);
    Mark.appendChild(markAreas);
    markAreas.appendChild(divTheme);
    markAreas.appendChild(divText);
    Mark.appendChild(del);

    complete = complete + 1;
    console.log(complete);
  }

  // Загружаем сохраненные кнопки из localStorage
  if (localStorage.getItem('buttons')) {
    buttons = JSON.parse(localStorage.getItem('buttons'));
    // Добавляем кнопки на страницу
    buttons.forEach(btnId => {
      const btn = document.getElementById(btnId);
      if (btn) {
        place.appendChild(btn);
      }
    });
  }
}


function delNote() {
  confirm.style.display = "none";
  console.log(tag);
  tag = tag.replace(new RegExp("del", 'g'), '').trim();;
  console.log("button id= " + tag);

  // Удаляем кнопку с соответствующим id из массива buttons
  const index = buttons.indexOf(tag);
  if (index !== -1) {
    buttons.splice(index, 1);
  }

  // Удаляем заметку из массива notes
  const noteIndex = parseInt(tag);
  if (!isNaN(noteIndex)) {
    notes.splice(noteIndex, 1);
  }

  saveList();
  loadList();
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
  document.getElementById('confText').innerHTML = langArr['confText'][hash];
  document.getElementById('deleteConf').innerHTML = langArr['deleteConf'][hash];
  document.getElementById('noConf').innerHTML = langArr['noConf'][hash];
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

function changeLog() {
  var ShowChangeLog = localStorage.getItem('ShowChangeLog'); // Получаем значение из localStorage
  if (ShowChangeLog === null || ShowChangeLog === "true") { // Проверяем, если значение не установлено или равно "true"
    var logDiv = document.getElementsByClassName('changelog')[0]; // Получаем первый элемент с классом 'editDiv'
    logDiv.style.display = "flex";
    var versionText = document.getElementById("version");
    versionText.innerHTML = "New Version! " + currentAppVersion;
    var logText = document.getElementById("description");
    logText.innerHTML = textForLog;
    localStorage.setItem('ShowChangeLog', false); // Устанавливаем значение в localStorage
  }
}

window.addEventListener('load', () => {
  var storedAppVersion = localStorage.getItem('appVersion'); // Получаем сохраненную версию приложения
  if (storedAppVersion !== currentAppVersion) { // Если текущая версия отличается от сохраненной
    localStorage.setItem('ShowChangeLog', true); // Устанавливаем ShowChangeLog в true, чтобы сообщение отобразилось снова
    localStorage.setItem('appVersion', currentAppVersion); // Обновляем версию приложения в localStorage
  }
  loadList();
  changeLog();
  console.log(localStorage);
  if(localStorage.getItem('notes')) {
    notes = JSON.parse(localStorage.getItem('notes'));
    loadList();
  } else {
    console.log("Storage is empty");
  }
});

function hideConfirm() {
  confirm.style.display = "none";
}

