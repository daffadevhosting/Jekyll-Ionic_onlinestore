
var toggle = document.getElementById("themeToggle");

if (sessionStorage.getItem("mode") == "dark") {
  darkmode();
} else {
  nodark();
}

toggle.addEventListener("ionChange", function() {
  if (toggle.checked) {
    darkmode();
  } else {
    nodark();
  }
});

function darkmode() {
  document.body.classList.add("dark");
  toggle.checked = true;
  sessionStorage.setItem("mode", "dark");
}
function nodark() {
  document.body.classList.remove("dark");
  toggle.checked = false;
  sessionStorage.setItem("mode", "light");
}
