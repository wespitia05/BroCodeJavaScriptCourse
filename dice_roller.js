/* ----- DICE ROLLER PROGRAM ----- */

function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImgs = document.getElementById("diceImgs");
    const values = []; // holds the value of the dice
    const imgs = []; // holds the imgs based on those values

    for(let i = 0; i < numOfDice; i++) {
        // get random number between 1 and 6
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value); // add our value into the empty values array
        imgs.push(`<img src="dice_imgs/${value}.png" alt="Dice ${value}">`);
    }
    // displays dice value, followed by a comma
    diceResult.textContent = `dice: ${values.join(', ')}`;
    // combines the images to display based on the selected values
    diceImgs.innerHTML = imgs.join('');
}