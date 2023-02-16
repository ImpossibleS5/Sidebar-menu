const body = document.querySelector("body");

const sideBar = body.querySelector(".sidebar");
const toggle = body.querySelector(".toggle");
const searchButton = body.querySelector(".search-box");
const modeSwitch = body.querySelector(".toggle-switch");
const modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", function () {
  sideBar.classList.toggle("close");
});

searchButton.addEventListener("click", function () {
  sideBar.classList.remove("close");
});

modeSwitch.addEventListener("click", function () {
  body.classList.toggle("dark");

  if(body.classList.contains('dark')){
    modeText.innerText = "Light Mode"
  } else {
    modeText.innerText = "Dark Mode"
  }
});
