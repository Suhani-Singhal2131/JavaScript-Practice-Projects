const random_number=parseInt(Math.random()*100+1);


const submit=document.querySelector("#subt");
const userinput=document.querySelector("#guessField");
const previous_guesses=document.querySelector(".guesses");
const remaining_guesses=document.querySelector(".lastResult");
const lowhigh=document.querySelector(".lowOrHi");
const startover=document.querySelector(".resultParas");

const button=document.createElement("button");
button.id="newGame";
button.innerText="Start new Game";

let prevguesses=[];
let numguess=1
let playgame=true;

if(playgame){
    submit.addEventListener('click',function(e){
      e.preventDefault();
      const guess_number=parseInt(userinput.value);
      validateguess(guess_number);
    });
}

function validateguess(guess){
  if(isNaN(guess)){
    alert("Please enter a valid number")
  }
  else if(guess<1){
    alert("Please enter a number greater than 0")
  }
  else if(guess>100){
    alert("Please enter a number less than 100")
  }
  else{
    prevguesses.push(guess);
    if(numguess===11){
        displayguess(guess);
        displaymessage(`Game Over.Random number is ${random_number}`);
        endgame();
    }
    else{
        displayguess(guess)
        checkguess(guess)
    }
  }
}
function checkguess(guess){
   if(guess===random_number){
     displaymessage("You guessed it Right!!")
     endgame();
   }
   else if(guess<random_number){
    displaymessage("Number is too low!!")
   }
   else if(guess>random_number){
    displaymessage("Number is too high!!")
   }
}
function displayguess(guess){
  userinput.value='';
  previous_guesses.innerHTML+=`${guess},`;
  numguess++;
  remaining_guesses.innerHTML=`${11-numguess}`;

}
function displaymessage(message){
   lowhigh.innerHTML=`<h1>${message}</h1>`
}


function endgame(){
   userinput.value=''
   userinput.setAttribute('disabled','')
   console.log(userinput);
  //  p.classList.add('button');
  //  p.innerHTML=`<h2 id ="newGame">Start new Game</h2>`;
   startover.appendChild(button);
   playgame=false;
   newgame()
}
function newgame(){
    const newgamebutton=document.querySelector("#newGame");
    newgamebutton.addEventListener('click',function(e){
      random_number=parseInt(Math.random()*100+1);
      prevguesses=[];
      numguess=1;
      previous_guesses.innerHTML=''
      remaining_guesses.innerHTML=`${11-numguess}`;
      userinput.removeAttribute('disabled');
      startover.removeChild(button);
      playgame=true;
    });
  
  }

