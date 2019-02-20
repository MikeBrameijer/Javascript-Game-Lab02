let playerName;
let playerHP = 40;
let grantHP = 10;
let playerWins = 0;
let runAway = false;
startGame();
function startGame() {
    let wantToPlay = prompt("Do you want to play a game? Type yes or no").toLocaleLowerCase();
    if (wantToPlay === "yes") {
        playerName = prompt("What is your name");
        startCombat(playerName);
    } else {
        console.log("come back when you do want to play.")
    }

}

function startCombat(playerName) {
    while (playerHP > 0 && runAway === false && playerWins < 3) { //as long as the players and grants hp is not 0, and the play has less then 3 wins 
        let runAwayQuestion = prompt("Do you want to run away? type yes if you do. \n \nIf you want to keep fighting hit ok or hit enter.").toLocaleLowerCase();
        if (runAwayQuestion === "yes") {
            console.log("You have run away, and life to see another day.");
            runAway = true;
            break
        } else { // still need help on this
            playerHP = playerHP - getDamage();
            grantHP = grantHP - getDamage();
            console.log(`${playerName} has ${playerHP} health left.`);
            console.log(`Grant has ${grantHP} health left.`);

            if (grantHP <= 0 && playerHP <= 0) {  // in case of a tie
                console.log(`You Tied!!!`)
            } else if (grantHP <= 0) {    //when grant hp hits zero or lower, the players wins go up by one and grants HP is restored
                playerWins = playerWins + 1;
                console.log(`Grant has lost a round, you have won ${playerWins} times.`);
                grantHP = 10;
            } else if (playerHP <= 0) { //if the players hp goes to 0 or less they lose the game
                console.log(`you have lost the fight`);
            }
        }

    }
    // }

    if (playerWins === 3 && playerHP > 0) {
        console.log(`Congrats ${playerName}, you have beat Grant 3 times and have won the fight.`)
        console.log(`You even have ${playerHP} Health left`);
    }


}

function getDamage() {
    let damage = (Math.floor((Math.random() * 5) + 1));
    return damage;
}

