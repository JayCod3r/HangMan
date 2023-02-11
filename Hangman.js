const VALIDKEYS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var strokedKeys = [];
var word = ['n', 'u', 'l', 'l'];
var hiddenWord = word;
var failCount = 0;

function HideWord() {
    var tempString = [];
    for (let i = 0; i < word.length; i++) {
        tempString.push('_');
    }
    //I have zero clue to why I have to create a tempString but for some reason
    //js keeps treating hiddenWord as word. no clue...
    hiddenWord = tempString;
}

function UnHideWord() {
    for (let i = 0; i < word.length; i++) {
        if (strokedKeys.includes(word[i])) {
            hiddenWord[i] = word[i];
        }
    }
}

function PushWordToId() {
    document.getElementById("word").innerHTML = hiddenWord.toString();
}

function DebugTestKeyStrokes() {
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        if (VALIDKEYS.includes(name)) {
            strokedKeys.push(name);
            UnHideWord();
            PushWordToId();
        }
    }, false);
}