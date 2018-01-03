
var input = document.getElementById("mainInput");
var button = document.getElementById("convertButton");
var display = document.getElementById("displayDiv");

function convertNum(){
  var num = input.value;
  display.innerHTML = Number(num).toString(2);
  // if(input.value<0){
  //   display.innerHTML = "Please enter a value greater than or equal to zero!";
  // } else {
  //     display.innerHTML = Number(num).toString(2);
  //   }
}

button.addEventListener("click", convertNum);

input.addEventListener("keyup", function(ev){
  if(ev.keyCode == 13){
    convertNum();
  } else {
    console.log("Press enter to execute function");
  }
});
