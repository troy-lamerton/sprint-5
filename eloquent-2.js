/* Excercises from http://eloquentjavascript.net/02_program_structure.html */

function loopTriangle () {
  var octothorpes = "#";
  do {
     console.log(octothorpes);
     octothorpes += "#";
  } while (octothorpes.length <= 7);
};

function fizzBuzz () {
/*  Print all the numbers from 1 to 100, with some exceptions
    print "FizzBuzz", for numbers that are divisible by both 3 and 5 (divisible by 15)
    For numbers divisible by 3, print "Fizz" instead of the number,
    for numbers divisible by 5 (and not 3), print "Buzz" instead.
*/
  var num = 1;
  var fizz = 3;
  var buzz = 5;

  for (num; num <= 100; num++) {
    if (num % (fizz * buzz) === 0) {
      console.log("FizzBuzz");
    }
    else if (num % fizz === 0) {
      console.log("Fizz");
    }
    else if (num % buzz === 0) {
      console.log("Buzz"); 
    }
    else {
      console.log(num);
    };
  };

};
function chessBoard (boardSize) {
/*  creates a string that represents an 8×8 grid,
  using newline characters to separate lines.
  At each position of the grid there is either a space or a “#” character.
  The characters should form a chess board.
*/
  var size = boardSize;
  var boardString = "";
  
  var row;
  var col;
  var isSpace = true; //first square is a space
  var fillChar = "#";



  for (row = 0; row < size; row++) {
    //for each row of the board
    for (col = 0; col < size; col++) {
      if ((row + col) % 2 === 0) {
        boardString += " ";  
        
      }
      else {
        boardString += fillChar;
      };
    };
    //go to next line for the next row to begin
    boardString += "\n";
  };

  console.log(boardString);
};