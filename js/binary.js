
var input = document.getElementById("mainInput");
var button = document.getElementById("convertButton");
var display = document.getElementById("displayDiv");

display.style.wordWrap = "break-word";

function convertNum(){
  var num = input.value;
  var str = Number(num).toString(2);
    if(input.value>=0){
        display.innerHTML = "0"+str;
      } else {
        display.innerHTML = "1"+Math.abs(str);
      }
}

button.addEventListener("click", convertNum);

input.addEventListener("keyup", function(ev){
  if(ev.keyCode == 13){
    convertNum();
  } else {
    console.log("Press enter to execute function");
  }
});
