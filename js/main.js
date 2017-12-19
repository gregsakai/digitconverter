
var input = document.getElementById("mainInput");
var button = document.getElementById("convertButton");
var display = document.getElementById("displayDiv");

button.addEventListener("click", function(){
  display.innerHTML = input.value;
});
