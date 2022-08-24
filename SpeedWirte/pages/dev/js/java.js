//Elements
const word = document.getElementById('word');
const text = document.getElementById('input_area');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGameEl = document.getElementById('end_game');

const  words = [
    "abstract",  
    "continue",  
    "for",  
    "new",  
    "switch",
    "assert",  
    "default",  
    "goto",  
    "package",  
    "synchronized",
    "boolean",  
    "do",  
    "if",  
    "private",  
    "this",
    "break",  
    "double",  
    "implements",  
    "protected",  
    "throw",
    "byte",  
    "else",  
    "import",  
    "public",  
    "throws",
    "case",  
    "enum",  
    "instanceof",  
    "return",  
    "transient",
    "catch",  
    "extends",  
    "int",  
    "short",  
    "try",
    "char",  
    "final",  
    "interface",  
    "static",  
    "void",
    "class",  
    "finally",  
    "long",  
    "strictfp",  
    "volatile",
    "const",  
    "float",  
    "native",  
    "super",  
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
