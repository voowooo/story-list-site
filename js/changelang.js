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
  // document.querySelector('title').innerHTML = langArr['unit'][hash];
  // document.getElementById('vop').innerHTML = langArr['name'][hash];
  // document.getElementById('markTheme').placeholder = langArr['markTheme'][hash];
  // document.getElementById('text').placeholder = langArr['text'][hash];
  // document.getElementById('save').innerHTML = langArr['save'][hash];
  // document.getElementById('v').innerHTML = langArr['v'][hash];
  // document.getElementById('settingsButt').innerHTML = langArr['settingsButt'][hash];
  // document.getElementById('STTheme').innerHTML = langArr['STTheme'][hash];
  // document.getElementById('STLanguage').innerHTML = langArr['STLanguage'][hash];
  // document.getElementById('confText').innerHTML = langArr['confText'][hash];
  // document.getElementById('deleteConf').innerHTML = langArr['deleteConf'][hash];
  // document.getElementById('noConf').innerHTML = langArr['noConf'][hash];
  // document.getElementById('close').innerHTML = langArr['close'][hash];
  for(let key in langArr) {
    document.getElementById('.lng-' + key).innerHTML = langArr[key][hash];
  }
}

changeLang();