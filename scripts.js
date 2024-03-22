function save(){
    theme = document.getElementById("markTheme").value;
    text = document.getElementById("text").value;
    mess = document.getElementsByClassName("alert")
    if (theme != "" & text != ""){
      v = document.getElementById("v");
      br = "br";
      const header = document.createElement("div");        // создаем заголовок <h1>
      header.textContent = theme + ": " + text; // определяем текст элемента
      header.className = "mark";
      header.id = "mark";
      var place = document.getElementById("place");
      place.appendChild(header);
      // добавляем элемент h1 перед параграфом firstP
      document.body.appendChild(place);
      v.style = "display:;"
      document.getElementById("markTheme").value = "";
      document.getElementById("text").value = "";
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

