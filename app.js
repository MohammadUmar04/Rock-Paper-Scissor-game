
function playGame() {
    var choices = ['rock', 'paper', 'scissors'];
    
    // Prompt user for their choice
    var playerChoice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
    
    // Validate user input
    if (!choices.includes(playerChoice)) {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        return;
    }

    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    var result = "";

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {

        result = "You win!" ; 

    } else {
        result = "You lose!";
    }

    document.getElementById('result').innerHTML = "Your choice: " + playerChoice +
        "<br>Computer's choice: " + computerChoice +
        "<br>Result: " + result;
}



