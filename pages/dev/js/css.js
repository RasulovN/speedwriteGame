//Elements
const word = document.getElementById('word');
const text = document.getElementById('input_area');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGameEl = document.getElementById('end_game');

const  words = [ 
    "accent-color",  
    "align-content ", 
    "align-items",  
    "align-self",  
    "all Resets", 
    "animation",  
    "animation-direction",  
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",  
    "animation-timing-function",
    "backdrop-filter",
    "backface-visibility",
    "background",  
    "background-attachment",  
    "background-blend-mode",
    "background-clip",  
    "background-color",  
    "background-image",  
    "background-origin",  
    "background-position",  
    "background-repeat",  
    "background-size",  
    "border",  
    "border-bottom",  
    "border-bottom-color",  
    "border-bottom-left-radius",  
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",  
    "border-collapse",  
    "border-color",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",  
    "border-image-source",  
    "border-image-width",
    "border-left",  
    "border-left-color",
    "border-left-style",  
    "border-left-width",
    "border-radius",
    "border-right",  
    "border-right-color",  
    "border-right-style",  
    "border-right-width",  
    "border-spacing",  
    "border-style",  
    "border-top",  
    "border-top-color",  
    "border-top-left-radius",  
    "border-top-right-radius",  
    "border-top-style",
    "border-top-width",  
    "border-width",  
    "bottom",  
    "box-decoration-break",  
    "box-shadow",  
    "box-sizing",  
    "break-after",
    "break-before",
    "break-inside",
    "caption-side",
    "caret-color",  
    "@charset",  
    "clear",  
    "clip",  
    "color",  
    "column-count",  
    "column-fill",  
    "column-gap",
    "column-rule",  
    "column-rule-color",  
    "column-rule-style",  
    "column-rule-width",  
    "column-span",
    "column-width",  
    "columns",
    "content",
    "counter-increment",  
    "cursor",  
    "direction",  
    "display",
    "empty-cells",
    "filter",
    "flex",
    "flex-basis",  
    "flex-direction",
    "flex-flow",  
    "flex-grow",  
    "flex-shrink",
    "flex-wrap",  
    "float",  
    "font",
    "@font-face",  
    "font-family",
    "font-feature-settings",
    "@font-feature-values",  
    "font-kerning",
    "font-language-override",  
    "font-size",  
    "font-size-adjust",
    "font-stretch",  
    "font-style",  
    "font-synthesis",  
    "font-variant",  
    "font-variant-alternates",   
    "font-variant-caps",  
    "font-variant-east-asian",  
    "font-variant-ligatures",   
    "font-variant-numeric",  
    "font-variant-position",  
    "font-weight",  
    "gap",  
    "grid",  
    "grid-area",  
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",  
    "grid-column",  
    "grid-column-end",  
    "grid-column-gap",  
    "grid-column-start",  
    "grid-gap",  
    "grid-row",  
    "grid-row-end",
    "grid-row-gap",  
    "grid-row-start",
    "grid-template",  
    "grid-template-areas",  
    "grid-template-columns",  
    "grid-template-rows",
    "hanging-punctuation",  
    "height",  
    "hyphens",  
    "image-rendering",  
    "@import",  
    "justify-content",  
    "@keyframes",  
    "left",
    "letter-spacing",
    "line-break",
    "line-height",  
    "list-style", 
    "list-style-image",  
    "list-style-position",  
    "list-style-type",  
    "margin",
    "margin-bottom",  
    "margin-left",
    "margin-right",  
    "margin-top",  
    "mask",  
    "mask-clip",  
    "mask-image",  
    "mask-mode",
    "mask-origin",  
    "mask-position",  
    "mask-repeat",
    "mask-size",  
    "mask-type",
    "max-height",  
    "max-width",  
    "@media",  
    "min-height",  
    "min-width",  
    "mix-blend-mode",
    "object-fit",  
    "object-position",  
    "opacity",  
    "order",  
    "orphans",
    "outline",  
    "outline-color",
    "outline-offset",
    "outline-style",  
    "outline-width",  
    "overflow",
    "overflow-wrap",
    "overflow-x",  
    "overflow-y",  
    "padding",  
    "padding-bottom",
    "padding-left",  
    "padding-right",
    "padding-top",  
    "page-break-after",  
    "page-break-before",  
    "page-break-inside",  
    "perspective",  
    "perspective-origin",
    "pointer-events",  
    "position",  
    "quotes",  
    "resize",  
    "right",
    "row-gap",  
    "scroll-behavior",
    "tab-size",  
    "table-layout",
    "text-align",  
    "text-align-last",  
    "text-combine-upright",  
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-style",
    "text-decoration-thickness",
    "text-emphasis",
    "text-indent",  
    "text-justify",
    "text-orientation",  
    "text-overflow",  
    "text-shadow",  
    "text-transform",
    "text-underline-position",  
    "top",  
    "transform",
    "transform-origin",
    "transform-style",  
    "transition",
    "transition-delay",  
    "transition-duration",  
    "transition-property",  
    "transition-timing-function",  
    "unicode-bidi",
    "user-select",  
    "vertical-align",  
    "visibility",  
    "white-space",  
    "widows",  
    "width",  
    "word-spacing",  
    "word-wrap",  
    "z-index",

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
