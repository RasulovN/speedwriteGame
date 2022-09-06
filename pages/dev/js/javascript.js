//Elements
const word = document.getElementById('word');
const text = document.getElementById('input_area');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGameEl = document.getElementById('end_game');

const  words = [
    "await",  
    "break",  
    "case",  
    "catch",  
    "class",
    "const",  
    "continue",  
    "debugger",  
    "default",  
    "delete",
    "do",  
    "else",  
    "enum",  
    "export",  
    "extends",
    "false",  
    "finally",  
    "for",  
    "function",  
    "if",
    "implements",  
    "import",  
    "in",  
    "instanceof", 
    "interface",
    "let",  
    "new",  
    "null",  
    "package",  
    "private",
    "protected",  
    "public",  
    "return",  
    "super",  
    "switch",
    "static",  
    "this",  
    "throw",  
    "try",  
    "true",
    "typeof",  
    "var",  
    "void",  
    "while",  
    "with",
    "yield",

]

let randWord;
let score = 0;
let time = 60;
// 905171274

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
