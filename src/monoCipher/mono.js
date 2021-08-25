import jQuery from "jquery";
const $ = jQuery.noConflict();

document.getElementById("encryptButton").onclick = function getContent() {
  let letters = document.getElementById("textToEncrypt").value;
  MonoalphabeticCipher(letters);
};

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

let keyCont = $("#keyContainer");
let keyPlaintext = document.createElement("div");
keyPlaintext.className = "cont";
keyCont.append(keyPlaintext);

let keyCiphertext = document.createElement("div");
keyCont.append(keyCiphertext);
keyCiphertext.className = "cont";

let lettersToUse = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
let randomCipherText = [];

alphabet.forEach((letter) => {
  let plainCell = document.createElement("span");
  plainCell.className = "cell";
  let plainNode = document.createTextNode(letter);
  plainCell.append(plainNode);
  keyPlaintext.append(plainCell);

  // Generate random pair
  let cipherCell = document.createElement("span");
  cipherCell.className = "cell cellOut";

  // ensure no random letters repeat
  let randIndex = Math.floor(Math.random() * lettersToUse.length);
  let randLetter = lettersToUse[randIndex];
  // remove every used letter for the array to avoid repetition
  lettersToUse.splice(randIndex, 1);
  // add random element to another array to be used later for encryption
  randomCipherText.push(randLetter);

  let cipherNode = document.createTextNode(randLetter);
  cipherCell.append(cipherNode);
  keyCiphertext.append(cipherCell);
});
//console.log(randomCipherText);

function MonoalphabeticCipher(sentence) {
  let characters = sentence.split(""); //array of letters
  characters.forEach((character, i) => {
    setTimeout(function () {
      //convert to lowercase to avoid using separate cases for A-Z and a-z
      character = character.toLowerCase();

      // Show input
      const inputCont = $("#inputContainer");
      let inputCell = document.createElement("span");
      inputCell.className = "cell";
      let inputNode = document.createTextNode(character);
      inputCell.append(inputNode);
      inputCont.append(inputCell);

      //Process output
      let index = alphabet.indexOf(character);
      let outputCharacter = randomCipherText[index];

      // Show output
      const outputCont = $("#outputContainer");
      let outputCell = document.createElement("span");
      outputCell.className = "cell cellOut";
      let outputNode = document.createTextNode(outputCharacter);
      outputCell.append(outputNode);
      outputCont.append(outputCell).focus();
      outputCell.className += " anim";
    }, i * 1000);
  });
}
