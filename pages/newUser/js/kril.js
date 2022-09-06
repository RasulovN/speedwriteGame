//Elements
const word = document.getElementById('word');
const text = document.getElementById('input_area');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGameEl = document.getElementById('end_game');

const words = [
    "кутиш",
    "танаффус",
    "ҳолат",
    "ушлаш",
    "синф",
    "cонст",
    "давом етиш",
    "тузатиш воситаси",
    "стандарт",
    "ўчириш",
    "қилиш",
    "бошқа",
    "енум",
    "експорт",
    "узайтиради",
    "ёлғон",
    "ниҳоят",
    "учун",
    "функтсия",
    "агар",
    "амалга оширади",
    "Импорт",
    "ичида",
    "инстанcеоф",
    "интерфейс",
    "қўйинг",
    "янги",
    "нулл",
    "пакет",
    "хусусий",
    "ҳимояланган",
    "оммавий",
    "қайтиш",
    "супер",
    "алмаштириш",
    "статик",
    "бу",
    "отиш",
    "синаб кўринг",
    "тўғри",
    "тури",
    "вар",
    "бўш",
    "ҳозирда",
    "билан",
    "Ёъл беринг",
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
