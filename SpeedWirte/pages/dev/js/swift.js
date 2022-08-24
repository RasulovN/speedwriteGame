//Elements
const word = document.getElementById('word');
const text = document.getElementById('input_area');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGameEl = document.getElementById('end_game');

const  words = [
    "Class",  
    "deinit",  
    "Enum",  
    "extension",
    "Func",  
    "import",  
    "Init",  
    "internal",
    "Let",  
    "operator",  
    "private",  
    "protocol",
    "public",  
    "static",  
    "struct",  
    "subscript",
    "typealias",  
    "var",  
    "break",  
    "case",  
    "continue",  
    "default",
    "do",  
    "else",  
    "fallthrough",   
    "for",
    "if",  
    "in",  
    "return",  
    "switch",
    "where",  
    "while",
    "as",    
    "false",  
    "is",
    "nil",  
    "self",
    "super",
    "true",
    "associativity",  
    "convenience",
    "dynamic",  
    "didSet",
    "final",  
    "get",  
    "infix",  
    "inout",
    "lazy",  
    "left",  
    "mutating",  
    "none",
    "nonmutating",  
    "optional",  
    "override",  
    "postfix",
    "precedence",  
    "prefix",  
    "Protocol",  
    "required",
    "right",  
    "set",  
    "type",  
    "unowned",
    "weak",  
    "willSet",

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
