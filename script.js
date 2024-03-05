var btn = document.getElementById("dark");
var body = document.querySelector("body");
var light = document.getElementById("light");
var alert = document.getElementById("alert");
btn.addEventListener("click", function () {
  body.classList.toggle("dark");
  btn.style.visibility = "hidden";
  light.style.visibility = "visible";
});
light.addEventListener("click", function () {
  body.classList.toggle("dark");
  btn.style.visibility = "hidden";
  light.style.visibility = "visible";
});