var input = document.getElementById("mainInput");
var button = document.getElementById("convertButton");
var display = document.getElementById("displayDiv");

display.style.wordWrap = "break-word";

function convertNum() {
  var num = input.value;
  var str = "";
  var romanNums = ["M", "D", "C", "L", "X", "V", "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var standardNums = [1000000, 500000, 100000, 50000, 10000, 5000, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  // Adds overline to create special characters for larger numbers
  for (var spec = 0; spec < 6; spec++)
    romanNums[spec] = "<span style='text-decoration: overline'>" + romanNums[spec] + "</span>";

  for (var i = 0; i < standardNums.length; i++) {
    while (num >= standardNums[i]) {
      str += romanNums[i];
      num -= standardNums[i];
    }
  }
  display.innerHTML = str;
  str.style.wordBreak = "breakAll";
}

button.addEventListener("click", convertNum);

input.addEventListener("keyup", function(ev) {
  if (ev.keyCode == 13) {
    convertNum();
  }
});
