var isVisible = 0;

function settingsShow() {
  const settings = document.getElementById("settings");
  if (isVisible == 0){
    settings.style.animation = "show 0.3s";
    settings.style.display = "flex";
    isVisible = 1;
  } else {
    settings.style.display = "none";
    isVisible = 0;
  }
}