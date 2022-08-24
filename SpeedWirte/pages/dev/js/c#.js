//Elements
const word = document.getElementById('word');
const text = document.getElementById('input_area');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGameEl = document.getElementById('end_game');

const  words = [
    "abstract",  
    "base",  
    "as",  
    "bool",  
    "break",  
    "catch",  
    "case",
    "byte",  
    "char",  
    "checked",  
    "class",  
    "const",  
    "continue",  
    "decimal",
    "private",  
    "protected",  
    "public",  
    "return",  
    "readonly",  
    "ref",  
    "sbyte",
    "explicit",  
    "extern",  
    "false",  
    "finally",  
    "fixed",  
    "float",  
    "for",
    "foreach",  
    "goto",  
    "if",  
    "implicit",  
    "in",  
    "in",   
    "int",
    "ulong",  
    "ushort",  
    "unchecked",  
    "using",  
    "unsafe",  
    "virtual",  
    "void",
    "null",  
    "object",
    "operator", 
    "out",
    "override",  
    "params",
    "default",
    "delegate",  
    "do", 
    "double",  
    "else",  
    "enum",  
    "event",
    "sealed",  
    "short",  
    "sizeof",  
    "stackalloc",  
    "static",  
    "string",  
    "struct",
    "switch",  
    "this",  
    "throw",  
    "true",  
    "try",  
    "typeof",  
    "uint",
    "abstract",  
    "base",  
    "as",  
    "bool",  
    "break",  
    "catch",  
    "case",
    "volatile",  
    "while",

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
