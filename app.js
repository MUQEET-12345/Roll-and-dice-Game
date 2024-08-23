// const scorep1 =document.getElementById("score_1"); //textContent = 0;
// const scorep2 = document.getElementById("score_2").textContent = 0;
const Element = document.getElementById("dices");
const crnt1 = document.getElementById("current-0");
const crnt2 = document.getElementById("current-1");
const btnRoll = document.getElementById("btn-roll");
const btn_hold = document.querySelector("#btn-hold");
const plc_1 = document.querySelector("#right-1");
const plc_2 = document.querySelector("#left-1");
const newGame = document.getElementById("#btn-newGame");

let activePlayer, currentValue, scores, playGame;

let init = () => {
    Element.classList.add("hidden");
    activePlayer = 0;
    currentValue = 0;
    scores = [0, 0];
    playGame = true;
};
init();


const switchPlayer = () => {
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentValue = 0;
    // document.querySelector(`.bcolor-${activePlayer}`).classList.toggle("bc");
    // document.querySelector(`.bcolor-${activePlayer}`).classList.toggle("bcolor")


};


btnRoll.addEventListener("click", () => {
    if (playGame) {
        Element.classList.remove("hidden");
        const ranNum = Math.floor(Math.random() * 6 + 1);
        Element.src = `img/dice-six-faces-${ranNum}.png`;

        if (ranNum !== 1) {
            currentValue += ranNum;
            document.getElementById(`current-${activePlayer}`).textContent = currentValue;
        } else {
            switchPlayer();
        }
    }
});


btn_hold.addEventListener("click", () => {
    if (playGame) {
        scores[activePlayer] += currentValue;
        console.log(scores)
        document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 20) {
            playGame = false;
            document.querySelector(`.ri_${activePlayer}`).classList.add("color_1");
            Element.classList.add("hidden");
        }
        else {
            switchPlayer();
        }
    }
});













