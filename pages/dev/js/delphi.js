//Elements
const word = document.getElementById('word');
const text = document.getElementById('input_area');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGameEl = document.getElementById('end_game');

const  words = [
    "and",  
    "array",  
    "as",  
    "asm",  
    "begin",
    "case",  
    "class",  
    "const",  
    "constructor",  
    "destructor",
    "dispinterface",  
    "div",  
    "do",  
    "downto",  
    "else",
    "end",  
    "except",  
    "exports",  
    "file",  
    "finalization",
    "finally",  
    "for",  
    "function",  
    "goto",  
    "if",
    "implementation",  
    "in",  
    "inherited",  
    "initialization",  
    "inline",
    "interface",  
    "is",  
    "label",  
    "library",  
    "mod",
    "nil",  
    "not",  
    "object",  
    "of",  
    "or",
    "out",  
    "packed",  
    "procedure",  
    "program",  
    "property",
    "raise",  
    "record",  
    "repeat",  
    "resourcestring",  
    "set",
    "shl",  
    "shr",  
    "string",  
    "then",  
    "threadvar",
    "to",  
    "try",  
    "type",  
    "unit",  
    "until",
    "uses",  
    "var",  
    "while",  
    "with",  
    "xor",

]

let randWord;
let score = 0;
let time = 60;

function checkLang() {
    
}

function getRandomWord() {
    return words[Math.floor(Math.random()* words.length)]
}

function addToDom() {
    randomWord = getRandomWord()
    word.innerHTML = randomWord;
}

function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}

function updateTime() {
    time--;
    timeEl.innerHTML = time + "s";
    if (time <= 10){
        document.querySelector('.time_section').style.color= 'red'
    }

    if(time === 0) {
        clearInterval(timeInterval)
        gameOver();
    }
}
const timeInterval = setInterval(updateTime, 1000)

function gameOver() {
    endGameEl.innerHTML = `
        <h1>Vaqtingiz tugadi!</h1>
        <h3>Yakuniy ochko: ${score}</h3>
        <button onclick="location.reload()"> Yangilash </button>
    `
    endGameEl.style.display = "flex";
} 


addToDom();

text.addEventListener("input", (e) =>{
    const typedText = e.target.value;

    if(typedText === randomWord){
        updateScore(); // ++1
        addToDom();
        e.target.value = "";
        updateTime();
    }
})
