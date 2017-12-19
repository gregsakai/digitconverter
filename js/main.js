
var input = document.getElementById("mainInput");
var button = document.getElementById("convertButton");
var display = document.getElementById("displayDiv");

var romanNums = {
  1:"I",
  4:"IV",
  5:"V",
  9:"IX",
  10:"X",
  40:"XL",
  50:"L",
  90:"XC",
  100:"C",
  400:"CD",
  500:"D",
  900:"CM",
  1000:"M"
};

button.addEventListener("click", function(){

  var charCount = input.value.length;
  console.log(charCount);

  display.innerHTML = input.value;
});
