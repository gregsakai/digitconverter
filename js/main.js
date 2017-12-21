
var input = document.getElementById("mainInput");
var button = document.getElementById("convertButton");
var display = document.getElementById("displayDiv");
/*
var romanNums = [
  "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
];
var standardNums = [
  1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
];
*/
var romanNums = {
  // M:1000,
  // CM:900,
  // D:500,
  // CD:400,
  // C:100,
  // XC:90,
  // L:50,
  // XL:40,
  // X:10,
  // IX:9,
  // V:5,
  // IV:4,
  // I:1
  "5":"V",
  "10":"X"
}

button.addEventListener("click", function(){

  var romanNums = {
    // M:1000,
    // CM:900,
    // D:500,
    // CD:400,
    // C:100,
    // XC:90,
    // L:50,
    // XL:40,
    // X:10,
    // IX:9,
    // V:5,
    // IV:4,
    // I:1
    5:"V",
    "5":"V",
    "10":"X",
    five:"V",
  }

  var charCount = input.value.length;
  var num = input.value;
  console.log("Number of characters: "+charCount+", Number: "+num);

  var i = 0
  var str = "";

  var parseNum = JSON.parse(num);
  var strNum = JSON.stringify(num);
  console.log(parseNum + strNum);


  if(input.value<0){
    display.innerHTML = "Please enter a value greater than 0!";
  } else {
      display.innerHTML = romanNums.parseNum;
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
