//create class "dice" - creates the function roll

let dice = {
  roll: function (sides) {
    let randomNumber = Math.floor(Math.random() * sides) + 1;
    return randomNumber;
  },
};

//Prints dice roll to element 
function printNumber(number, dice) {
  var dice = document.getElementById(dice);
  dice.innerHTML = number;
}

//declare variables & arrays
let button = document.getElementById("button");
let diceStr = ["d4", "d6", "d8", "d10", "d12", "d20"];
let diceNum = [4, 6, 8, 10, 12, 20];
let result;

// on button click execute dice rolling function for each type of dice in dice arrays
button.onclick = function () {
  for (let i = 0; i < diceStr.length; i++) {
    result = dice.roll(diceNum[i]);
    printNumber(result, diceStr[i]);
  }
};

function dropDownChanged(_id){
  let diceCol = document.querySelector(`#${_id}`);
  let diceTitle = diceCol.querySelector("#container");
  let diceDropDown = diceCol.querySelector("#sidesDropdown");
  let diceCustomInput = diceCol.querySelector("#customSides");

  if (diceDropDown.value == "Custom"){
      diceTitle.innerHTML = `D ${diceCustomInput.value}`;
      diceCustomInput.style.display = "inline";
  }
  else{
      diceTitle.innerHTML = `D ${diceDropDown.value}`;
      diceCustomInput.style.display = "none";
  }
}




