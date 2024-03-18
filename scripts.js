// function save(){
//     text = document.getElementById("text").value;
//     alert(text);
//     cont = document.getElementsByClassName("container");
//     cont.innerHtml + '<div class="element">Element</div>';
//     cont.innerHtml + '<p>hello</p>';
//     alert("greate");
// }


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


