function save(){
    text = document.getElementById("text").value;
    const header = document.createElement("div");        // создаем заголовок <h1>
    header.textContent = text; // определяем текст элемента
    header.className = "mark";
    // получаем первый параграф
    const place = document.getElementById("text");
    // добавляем элемент h1 перед параграфом firstP
    document.body.appendChild(header); 
}

// Выбираем кнопку
const btn = document.getElementById("modeT");
// Отслеживаем щелчок по кнопке
btn.addEventListener('click', function() {
  // Затем переключаем (добавляем/удаляем) класс .dark-theme для body
  document.body.classList.toggle('dark-theme'); 
})