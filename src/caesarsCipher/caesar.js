import jQuery from "jquery";
const $ = jQuery.noConflict();

document.getElementById("encryptButton").onclick = function getContent() {
  let letters = document.getElementById("textToEncrypt").value;
  let cipherKey = document.getElementById("key").value;
  cipherKey = Number(cipherKey);
  CaesarCipher(letters, cipherKey);
};

function CaesarCipher(sentence, key) {
  let k = key;
  let characters = sentence.split(""); //array of letters
  characters.forEach((character, i) => {
    setTimeout(function () {
      // Show input
      const inputCont = document.getElementById("inputContainer");
      let inputCell = document.createElement("span");
      inputCell.className = "cell";
      let inputNode = document.createTextNode(character);
      inputCell.appendChild(inputNode);
      inputCont.appendChild(inputCell);

      // Process output
      if (character === character.toUpperCase()) {
        character = character.charCodeAt(0);
        let c = ((character - 65 + k) % 26) + 65;
        character = String.fromCharCode(c);
        //console.log(character);
      } else {
        character = character.charCodeAt(0);
        let c = ((character - 97 + k) % 26) + 97;
        character = String.fromCharCode(c);
        //console.log(character);
      }

      // Show output
      const outputCont = $("#outputContainer");
      let outputCell = document.createElement("span");
      outputCell.className = "cell cellOut";
      let outputNode = document.createTextNode(character);
      outputCell.append(outputNode);
      outputCont.append(outputCell).focus();
      outputCell.className += " anim";
    }, i * 1000);

    /*
    //convert to uppercase to avoid using separate cases for A-Z and a-z
    character = character.toUpperCase().charCodeAt(0);
    let c = ((character - 65 + k) % 26) + 65;
    character = String.fromCharCode(c);
    console.log(character);
    */
  });
}
