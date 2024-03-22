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

// Выбираем кнопку
const btn = document.getElementById("modeT");
// Отслеживаем щелчок по кнопке
btn.addEventListener('click', function() {
  // Затем переключаем (добавляем/удаляем) класс .dark-theme для body
  document.body.classList.toggle('dark-theme'); 
})

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

