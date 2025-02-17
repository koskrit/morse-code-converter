// Initialise Constants
const TXT2MOR = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    " ": " "
}

const MOR2TXT = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    " ": " "
}
var txt2mor = document.getElementById('txt2mor');
var mor2txt = document.getElementById('mor2txt');

function convTxt2Mor() {
    var text = txt2mor.value;
    morse = mor2txt.value;
    if (text) {
        var converted = "";
        text_arr = text.split("");
        console.log(text_arr);
        for (let i = 0; i <= text_arr.length - 1; i++) {
            if (text_arr[i] == " ") {
                converted = converted.concat("   ")
            } else {
                converted = converted.concat(TXT2MOR[text_arr[i].toUpperCase()], " ")
                console.log(converted)
            }
        }
        mor2txt.value = converted;
    } else if (morse) {
        var converted = "";
        code_arr = morse.split(" ");
        console.log(code_arr);
        for (let i = 0; i <= code_arr.length - 1; i++) {
            if (code_arr[i] == "") {
                converted = converted.concat(" ");
            } else {
                converted = converted.concat(MOR2TXT[code_arr[i]])
                console.log(converted);
            }
        }
        txt2mor.value = converted;

    } else {
        alert("[ALERT] Both Fields Empty");
        txt2mor.value = null;
        mor2txt.value = null;
    }
}

function reset() {
    txt2mor.value = null;
    mor2txt.value = null;
}