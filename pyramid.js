var char    = prompt("What character do you want to make a triangle from?");
var numRows = prompt("How many rows do you want your triangle to be?");

var currentRow  = 0;
var rowString   = "";
var numSpacesToCenter;
var numCharacters;

while(currentRow < numRows) {
  // start each row with a blank string
  rowString = "";

  // calculate how many spaces and characters to add
  numSpacesToCenter = (numRows - currentRow) - 1;
  numCharacters     = (currentRow * 2) + 1;

  // add spaces
  for(var i = 0; i < numSpacesToCenter; i++) {
    rowString = rowString + " ";
  }

  // add chars
  for(var i = 0; i < numCharacters; i++) {
    rowString = rowString + char;
  }

  // display the row
  console.log(rowString);

  currentRow++;
}
