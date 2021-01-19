const gameContainer = document.getElementById("game");
const start = document.querySelector("#gamestart");
const restart = document.querySelector("#restart");
//const scoreboard = document.querySelector("score");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

const faceup = [];
const found = [];

// function makeButtons(){
//   start.addEventListener("click", createDivsForColors(shuffledColors));
//   restart.disabled = true;
//   const scoreText = document.createElement("div");
//   //restart.addEventListener("click", restartGame);
// }

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let [i, color] of colorArray.entries()) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    newDiv.id = i;

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(e) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", e.target);
  // console.log(e.target.style);
  // console.log(e.target.classList.value);
  if(faceup.length < 2){
    if(found.indexOf(e.target.style.backgroundColor) == -1){
      e.target.style.backgroundColor = e.target.classList.value;
      if(faceup.indexOf(e.target) == -1){
       faceup.push(e.target);
      };
    //  console.log(faceup);
      if(faceup.length == 2){
        // console.log(faceup[0].style.backgroundColor);
        // console.log(faceup[1].style.backgroundColor);
        if(faceup[0].style.backgroundColor === faceup[1].style.backgroundColor){
          found.push(faceup[0].style.backgroundColor);
          // alert("Match!");
//          score++;
//          score++;
//          score++;
          faceup.pop();
          faceup.pop();
        }else{
          setTimeout(function(){
          faceup[0].style.backgroundColor = null;
          faceup[1].style.backgroundColor = null;
 //         score--;
          faceup.pop();
          faceup.pop();
        },1000)
      }
    }
    }
  }
}

// when the DOM loads
//makeButtons();
createDivsForColors(shuffledColors);
