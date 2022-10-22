// define the time limit
let TIME_LIMIT = 5;

// define quotes to be used
let quotes_array = [
    "Push yourself, because no one else is going to do it for you.",
    "Failure is the condiment that gives success its flavor.",
    "Wake up with determination. Go to bed with satisfaction.",
    "It's going to be hard, but hard does not mean impossible.",
    "Learning never exhausts the mind.",
    "The only way to do great work is to love what you do."
];

// selecting required elements
let timer_text = document.querySelector(".curr_time");
let accuracy_text = document.querySelector(".curr_accuracy");
let error_text = document.querySelector(".curr_errors");
let cpm_text = document.querySelector(".curr_cpm");
let wpm_text = document.querySelector(".curr_wpm");
let quote_text = document.querySelector(".quote");
let input_area = document.querySelector(".input_area");
let restart_btn = document.querySelector(".restart_btn");
let cpm_group = document.querySelector(".cpm");
let wpm_group = document.querySelector(".wpm");
let error_group = document.querySelector(".errors");
let accuracy_group = document.querySelector(".accuracy");

let timeLeft = TIME_LIMIT;
let timeElapsed = 0;
let total_errors = 0;
let errors = 0;
let accuracy = 0;
let characterTyped = 0;
let current_quote = "";
let quoteNo = 0;
let timer = null;
var today_max=0;
var players=[];
var score=[];
var month_max=0;
var year_max=0;
var name="";
function updateQuote()
{
    quote_text.textContent=null;
    current_quote=quotes_array[quoteNo];

    current_quote.split('').forEach(char=>{
        const charSpan=document.createElement('span')
        charSpan.innerText=char
        quote_text.appendChild(charSpan)
    })
    if (quoteNo<quotes_array.length-1)
        quoteNo++;
    else
        quoteNo=0;
}
function processCurrentText() {

// get current input text and split it
    curr_input = input_area.value;
    curr_input_array = curr_input.split('');

// increment total characters typed
    if(curr_input_array[characterTyped]!=' ')
    characterTyped++;

    errors = 0;

    quoteSpanArray = quote_text.querySelectorAll('span');
    quoteSpanArray.forEach((char, index) => {
        let typedChar = curr_input_array[index]

        // character not currently typed
        if (typedChar == null) {
            char.classList.remove('correct_char');
            char.classList.remove('incorrect_char');

            // correct character
        } else if (typedChar === char.innerText) {
            char.classList.add('correct_char');
            char.classList.remove('incorrect_char');

            // incorrect character
        } else {
            char.classList.add('incorrect_char');
            char.classList.remove('correct_char');

            // increment number of errors
            errors++;
        }
    });

// display the number of errors
    error_text.textContent = total_errors + errors;

// update accuracy text
    let correctCharacters = (characterTyped - (total_errors + errors));
    let accuracyVal = ((correctCharacters / characterTyped) * 100);
    accuracy_text.textContent = Math.round(accuracyVal);

// if current text is completely typed
// irrespective of errors
    if (curr_input.length == current_quote.length) {
        updateQuote();

        // update total errors
        total_errors += errors;

        // clear the input area
        input_area.value = "";
    }
}
function startGame() {

    resetValues();
    updateQuote();

// clear old and start a new timer
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

function resetValues() {
    timeLeft = TIME_LIMIT;
    timeElapsed = 0;
    errors = 0;
    total_errors = 0;
    accuracy = 0;
    characterTyped = 0;
    quoteNo = 0;
    input_area.disabled = false;

    input_area.value = "";
    quote_text.textContent = 'Click on the area below to start the game.';
    accuracy_text.textContent = 100;
    timer_text.textContent = timeLeft + 's';
    error_text.textContent = 0;
    restart_btn.style.display = "none";
    cpm_group.style.display = "none";
    wpm_group.style.display = "none";
}
function updateTimer() {
    if (timeLeft > 0) {
        // decrease the current time left
        timeLeft--;

        // increase the time elapsed
        timeElapsed++;

        // update the timer text
        timer_text.textContent = timeLeft + "s";
    }
    else {
        // finish the game
        finishGame();
    }
}
function finishGame()
{
    clearInterval(timer);
    input_area.disabled=true;
    quote_textContent="Well Done ! Click on Restart to start a new Game.";
    restart_btn.style.diplay="block";
    cpm=Math.round(((characterTyped/timeElapsed)*60));
    wpm=Math.round(((characterTyped/5)/timeElapsed)*60);//Assuming that each word consists on an average of 5 characters
    let curr_score=((cpm+wpm)/5)+accuracy-(errors/5);
    cpm_text.textContent=cpm;
    wpm_text.textContent=wpm;
    cpm_group.style.display="block";
    wpm_group.style.display="block";
    /*
    score.push(curr_score);
    players.push(window.prompt("Enter your name : "));
    for(let j=0;j<score.length;j++)
    {
    for(let i=0;i<score.length-j-1;i++)
    {
        if(score[i]<score[i+1])
        {
            let temp=score[i];
            score[i]=score[i+1];
            score[i+1]=temp;
            let currname =players[i];
            players[i]=players[i+1];
            players[i+1]=currname;
        }
    }
    }
    for(let k=1;k<=score.length;k++)
    {
        document.getElementById(k.innerText= k+". "+players[k-1]);
        document.getElementsByClassName(k.innerText=score[k-1]+" points");
    }*/

}
var tabs = document.querySelectorAll(".lboard_tabs ul li");
var today = document.querySelector(".today");
var month = document.querySelector(".month");
var year = document.querySelector(".year");
var items = document.querySelectorAll(".lboard_item");

tabs.forEach(function(tab){
    tab.addEventListener("click", function(){
        var currenttab = tab.getAttribute("data-li");

        tabs.forEach(function(tab){
            tab.classList.remove("active");
        })

        tab.classList.add("active");

        items.forEach(function(item){
            item.style.display = "none";
        })

        if(currenttab == "today"){
            today.style.display = "block";
        }
        else if(currenttab == "month"){
            month.style.display = "block";
        }
        else{
            year.style.display = "block";
        }

    })
})

let scores = [
    {name: "Player 1", score: 300},
    {name: "Player 2", score: 370},
    {name: "Player 3", score: 500},
    {name: "Player 4", score: 430},
    {name: "Player 5", score: 340},
];

function updateLeaderboardView() {
    let leaderboard = document.getElementById("leaderboard");
    leaderboard.innerHTML = "";

    scores.sort(function(a, b){ return b.score - a.score  });
    let elements = []; // we'll need created elements to update colors later on
    // create elements for each player
    for(let i=0; i<scores.length; i++) {
        let name = document.createElement("div");
        let score = document.createElement("div");
        name.classList.add("name");
        score.classList.add("score");
        name.innerText = scores[i].name;
        score.innerText = scores[i].score;

        let scoreRow = document.createElement("div");
        scoreRow.classList.add("row");
        scoreRow.appendChild(name);
        scoreRow.appendChild(score);
        leaderboard.appendChild(scoreRow);

        elements.push(scoreRow);

    }

    let colors = ["gold", "silver", "#cd7f32"];
    for(let i=0; i < 3; i++) {
        elements[i].style.color = colors[i];
    }
}

updateLeaderboardView();
function randomize() {
    for(var i=0; i<scores.length; i++) {
        scores[i].score = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
    }
    // when your data changes, call updateLeaderboardView
    updateLeaderboardView();
}