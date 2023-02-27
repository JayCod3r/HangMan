const VALIDKEYS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var words = [
    "ablaze",
    "afflict",
    "baggage",
    "baffling",
    "bewitch",
    "blunder",
    "brawny",
    "cater",
    "chaotic",
    "coastal",
    "collide",
    "crimson",
    "debris",
    "defy",
    "dazzling",
    "deliberate",
    "detest",
    "dignity",
    "dismantle",
    "eccentric",
    "ecstatic",
    "eloquent",
    "embark",
    "enrage",
    "epitome",
    "exhale",
    "fascinate",
    "fidget",
    "flimsy",
    "frantic",
    "grueling",
    "hazy",
    "humble",
    "ignite",
    "impartial",
    "indulge",
    "infinite",
    "insight",
    "irksome",
    "jagged",
    "jovial",
    "keen",
    "knack",
    "languid",
    "lethal",
    "lucid",
    "luminous",
    "marvel",
    "meander",
    "meticulous",
    "momentum",
    "muddle"
];


var strokedKeys = [];
var word = ['n', 'u', 'l', 'l'];
var hiddenWord = word;
var failCount = 0;
var failed = false;

function pickRandomWord() {
    word = words[Math.floor(Math.random() * 50)];
}

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
    let fail = true;
    for (let i = 0; i < word.length; i++) {
        if (strokedKeys.includes(word[i])) {
            hiddenWord[i] = word[i];
        }
        if (strokedKeys[strokedKeys.length - 1] == word[i]) {
            fail = false;
        }
    }
    console.log(fail);
    if (fail) {
        failCount++;
        console.log(failCount);
    }
}

function PushWordToId() {
    document.getElementById("word").innerHTML = hiddenWord.toString();
}

function DebugTestKeyStrokes() {
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        if (failCount > 9) {
            alert("Fail word is " + word);
        } else {
            if (VALIDKEYS.includes(name)) {
                if (!strokedKeys.includes(name)) {
                    strokedKeys.push(name);
                }
                UnHideWord();
                PushWordToId();

            }
        }

    }, false);
}