var input = document.getElementById("mainInput");
var button = document.getElementById("convertButton");
var display = document.getElementById("displayDiv");

display.style.wordWrap = "break-word";

function convertNum() {
  var num = input.value;
  var str = Number(num).toString(2);
  display.innerHTML = str;
}

button.addEventListener("click", convertNum);

input.addEventListener("keyup", function(ev) {
  if (ev.keyCode == 13) {
    convertNum();
  }
});
