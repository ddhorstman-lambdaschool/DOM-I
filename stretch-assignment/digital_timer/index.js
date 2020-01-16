let time = 0;
let maxTime = 1000;
let timerID;
let buttonState = "Start";
function count() {
    if (time < maxTime) {
        time++;
        document.getElementById('msTens').textContent = time % 10;
        document.getElementById('msHundreds').textContent = (time / 10) % 10;
        document.getElementById('secondOnes').textContent = (time / 100) % 10;
        document.getElementById('secondTens').textContent = (time / 1000) % 10;
    }
    else {
        clearInterval(timerID);
        document.querySelector('.digits').classList.add('redDigit');
    }
}
function button(){
    if(buttonState==="Start") startTimer();
    else resetTimer();
}
function startTimer() {
    timerID = window.setInterval(count, 10);
    maxTime = 100 * parseInt(document.getElementById('max-time').value);
    document.getElementById('start-button').setAttribute("disabled", "");
    changeButton();
}
function changeButton() {
    let button = document.getElementById('start-button');
    if (buttonState==="Start") {
        buttonState="Reset";
    }
    else {
        buttonState="Start";
    }
    button.textContent = buttonState;
    button.removeAttribute("disabled");
}
function resetTimer() {
    time = 0;
    clearInterval(timerID);
    document.querySelector('.digits').classList.remove('redDigit');
    document.querySelectorAll('.digit').forEach(x => {
        if (x.id !== 'colon') x.textContent = '-';
    });
    changeButton();
}
