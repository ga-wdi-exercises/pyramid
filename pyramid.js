var char    = prompt("What character do you want to make a triangle from?");
var numRows = prompt("How many rows do you want your triangle to be?");

var currentRow  = 0;
var rowString   = "";

while(currentRow < numRows) {
  // start each row with a blank string
  rowString = "";

  // add spaces
  for(var i=0; i <= (numRows - currentRow); i++){
    rowString += " ";
  }

  // add chars
  for(var i=0; i < ((currentRow * 2) + 1); i++){
    rowString += char;
  }

  // display the row
  console.log(rowString);

  currentRow++;
}
