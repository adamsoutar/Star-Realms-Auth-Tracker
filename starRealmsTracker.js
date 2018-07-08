/*
  Star Realms Authority Tracker
  Adam Soutar
  http://www.github.com/Adybo123
*/
var myAuthority = 50;
var cardTemplate = "<div class='authCard'>%NUMBER%</div>";

function updateDisplay() {
  function addNumCard(cardNum) {
    $('#authContainer').append(cardTemplate.replace('%NUMBER%', String(cardNum)));
  }
  $('#authContainer').html("");
  var appendAuthority = myAuthority;
  var values = [20, 10, 5, 1];
  while (appendAuthority > 0) {
    var skipVals = false;
    for (let v of values) {
      if (appendAuthority >= v && skipVals != true) {
        addNumCard(v);
        appendAuthority -= v;
        skipVals = true;
      }
    }
  }
}

function changeAuthority(addValue) {
  if (myAuthority + addValue < 1) {
    addValue = 0
  }
  myAuthority += addValue;
  updateDisplay();
}

$( document ).ready(function() {
    updateDisplay();
});
