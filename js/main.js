
var input = document.getElementById("mainInput");
var button = document.getElementById("convertButton");
var display = document.getElementById("displayDiv");

var romanNums = {
  1000:"M",
  900:"CM",
  500:"D",
  400:"CD",
  100:"C",
  90:"XC",
  50:"L",
  40:"XL",
  10:"X",
  9:"IX",
  5:"V",
  4:"IV",
  1:"I"
}

button.addEventListener("click", function(){

  var charCount = input.value.length;
  var num = input.value;
  var parseNum = JSON.parse(num);
  console.log("Number of digits: "+charCount+", Number: "+parseNum);

  if(input.value<0){
    display.innerHTML = "Please enter a value greater than 0!";
  } else {
      display.innerHTML = romanNums[parseNum];
      // for(i=0; i<charCount; i++){
      //   while(num >= standardNums[i]){
      //     display.innerHTML = romanNums[i];
      //     num = num - standardNums[i];
      //   }
      // }
      // for(var i in romanNums){
      //   while(num>=romanNums[i]){
      //     str += i;
      //     num -= romanNums[i];
      //   }
      // }
    }

});
