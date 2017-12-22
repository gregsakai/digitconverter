
var input = document.getElementById("mainInput");
var button = document.getElementById("convertButton");
var display = document.getElementById("displayDiv");

// BINARY VERSION - MERGE LATER

button.addEventListener("click", function(){

  var num = input.value;

  if(input.value<0){
    display.innerHTML = "Please enter a value greater than or equal to zero!";
  } else {
      display.innerHTML = Number(num).toString(2);
    }

});
