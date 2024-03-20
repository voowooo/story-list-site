function save(){
    text = document.getElementById("text").value;
    const header = document.createElement("div");        // создаем заголовок <h1>
    header.textContent = text; // определяем текст элемента
    header.className = "mark";
    header.id = "mark";
    // добавляем элемент h1 перед параграфом firstP
    document.body.appendChild(header);

    theme = document.getElementById("markTheme").value;
    const voo = document.createElement("div");
    voo.textContent = theme;
    const placev = document.getElementById("text");
    document.body.appendChild(voo);
}

// Выбираем кнопку
const btn = document.getElementById("modeT");
// Отслеживаем щелчок по кнопке
btn.addEventListener('click', function() {
  // Затем переключаем (добавляем/удаляем) класс .dark-theme для body
  document.body.classList.toggle('dark-theme'); 
})

