
var input = document.getElementById("mainInput");
var button = document.getElementById("convertButton");
var display = document.getElementById("displayDiv");

function convertNum(){
  var num = input.value;
  var str = "";
  var romanNums = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var standardNums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  for(var i=0; i<standardNums.length; i++){
    while(num >= standardNums[i]){
      str += romanNums[i];
      num -= standardNums[i];
    }
  }
  display.innerHTML = str;
}

button.addEventListener("click", convertNum);

input.addEventListener("keyup", function(ev){
  if(ev.keyCode == 13){
    convertNum();
  } else {
    console.log("Press enter to execute function");
  }
});
