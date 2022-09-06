//Elements
const word = document.getElementById('word');
const text = document.getElementById('input_area');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGameEl = document.getElementById('end_game');

const  words = [
    "!doctype",  
    "a",
    "abbr", 
    "acronym",
    "address",
    "applet",
    "area",
    "article",
    "aside",  
    "audio",  
    "b",
    "base",
    "basefont",
    "bb",
    "bdo",
    "big",
    "blockquote",
    "body", 
    "br /",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "command",
    "datagrid",
    "datalist",  
    "dd",
    "details",
    "dfn",
    "dialog",
    "dir",
    "div",
    "dl",  
    "dt",  
    "em",
    "embed",  
    "eventsource",
    "fieldset",
    "figcaption",
    "figure",  
    "font",  
    "footer",  
    "form",  
    "frame",  
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr /",     
    "html",
    "i",
    "iframe", 
    "img", 
    "input",
    "ins",
    "isindex",
    "kbd",
    "keygen",
    "label",
    "legend", 
    "li",
    "link", 
    "map",
    "mark",
    "menu",
    "meta", 
    "meter",  
    "nav",
    "noframes",
    "noscript", 
    "object",
    "ol",
    "optgroup", 
    "option",
    "output",
    "p",   
    "param", 
    "pre", 
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",   
    "samp",   
    "script",  
    "section",
    "select",
    "small",
    "source",
    "span", 
    "strike",  
    "strong",
    "style",
    "sub",  
    "sup",  
    "table",  
    "tbody",
    "td",   
    "textarea",
    "tfoot",
    "th",   
    "thead",  
    "time",  
    "title",
    "tr",   
    "track",
    "tt",
    "u",  
    "ul", 
    "var",   
    "video",
    "wbr",

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
