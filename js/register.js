var login = "";

function next() {
  login = document.getElementById("login").value

  // если login есть в БД то вызывать log in
  // если нет, то вызывать sign in
}

function signIn() {
  document.getElementById("password").style.display = "";
  document.getElementById("passwordTwo").style.display = "";
  document.getElementById('next').innerHTML = "sign in";
}

function logIn() {
  document.getElementById("password").style.display = "";
  document.getElementById('next').innerHTML = "log in";
}