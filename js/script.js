const newUserDiv = document.querySelector('.newUserDiv');
const devLang = document.querySelector('.devLang');
const copDiv = document.querySelector('.copDiv');
const welcome = document.querySelector('.welcome');
const whoimeDiv = document.querySelector('.whoime');
const codeTxt = document.querySelector('.codetxt');

// let welNames = prompt('Ismingiz nima?')
// document.getElementById('welName').innerHTML = welNames


function newUsers() { 
    welcome.style.display = "none";
    newUserDiv.style.display = "block";
    devLang.style.display = "none";
    copDiv.style.display = "none";
    whoimeDiv.style.display = "none";
    codeTxt.style.display = "none";

    let organuvchi = "O'rganuvchi";
    document.getElementById('hidear').innerText = organuvchi;
}

function yozuvchi() {
    copDiv.style.display = "block";
    welcome.style.display = "none";
    whoimeDiv.style.display = "none";
    newUserDiv.style.display = "none";
    devLang.style.display = "none";
    codeTxt.style.display = "none";

    let yozuvchi = "Yozuvchi"
    document.getElementById('hidear2').innerText = yozuvchi;
}
function developer() {
    devLang.style.display = "block";
    welcome.style.display = "none";
    whoimeDiv.style.display = "none";
    newUserDiv.style.display = "none";
    copDiv.style.display = "none";
    codeTxt.style.display = "none";

    
    let dasturchi = "yosh Dasturchi"
    document.getElementById('hidev').innerText = dasturchi;
}

