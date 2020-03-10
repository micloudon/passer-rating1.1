function playerName() {
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    let fullName = firstName + " " + lastName;
    let displayName = document.getElementById('playername')
    displayName.innerHTML = fullName + ":";

}


function passerRatingFormula() {
    let attempts = document.getElementById('attempts').value;
    let completions = document.getElementById('completions').value;
    let yards = document.getElementById('yards').value;
    let touchdowns = document.getElementById('touchdowns').value;
    let interceptions = document.getElementById('interceptions').value;
    let result = document.getElementById("result")

    let a = (completions / attempts - 0.3) * 5;
    let b = (yards / attempts - 3) * 0.25;
    let c = (touchdowns / attempts) * 20;
    let d = 2.375 - (interceptions / attempts * 25);
    let passerRating = ((a + b + c + d) / 6) * 100;

    if (passerRating < 0) {
        result.innerHTML = 0;
    }
    else {
        result.innerHTML = passerRating;
    }

}