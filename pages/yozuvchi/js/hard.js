//Elements
const word = document.getElementById('word');
const text = document.getElementById('input_area');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGameEl = document.getElementById('end_game');

const words = [
    "tajribali bo'lmoq",
    "exsport",
    "import",
    "hardware",
    "mexanizatsiya",
    "axborot texnologiya",
    "informatik labaratoriya",
    "axborot",
    "raqamli rivojlanish",
    "sistemalashtirish",
    "g'oya reja natija",
    "kosmik tizimlashtirish",
    "kosmik tezlanish",
    "orbita kenglik",
    "raqamli iqsodiyot",
    "raqamli texnologiya",
    "texnologiyalshtirish",
    "o'zgartirish",
    "obeyekitga yunaltirish",
    "davom etish",
    "standart model",
    "standart modul",
    "standartlashtirish",
    "mostlashtirish",
    "aloritim",
    "algibiraik son",
    "aloqa qilmoq",
    "texnik tavsif",
    "texnik tasnif",
    "texnologik jarayon",
    "aloritimlashtirish",
    "nostandart",
    "o'zlashtirmoq",
    "o'zgartirmoq",
    "fizik qonuniyat",
    "verual olam",
    "verual voqiylik",
    "vertual sayohat",
    "vezualizatsiya",
    "3d modellash",
    "kiber hujim",
    "kiber jinoyat",
    "keng qamrovli",
    "autinfikatsiya",
    "authorizatsiya",
    "registratsiya",
    "keng dunyo qarash",
    "ommaviy axborot",
    "axborot xavfsizligi",
    "kiber xavfsizlik",
    "protsessor",
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
