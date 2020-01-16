let time = 0;
//I'm sure there's a way to cancel out setInterval, but
//I don't know it and have no internet access
let timerRunning = false;
window.setInterval(count, 10);
function count() {
    if(!timerRunning) return;
    if (time < 1000) {
        time++;
        document.getElementById('msTens').textContent = time % 10;
        document.getElementById('msHundreds').textContent = Math.floor(time / 10) % 10;
        document.getElementById('secondOnes').textContent = Math.floor(time / 100) % 10;
        document.getElementById('secondTens').textContent = Math.floor(time / 1000) % 10;
    }
    else {
        timerRunning = false;
        document.querySelector('.digits').classList.add('redDigit');
    }
}
function startTimer(){
    timerRunning = true;
    document.getElementById('start-button').setAttribute("disabled","");
    document.getElementById('reset-button').removeAttribute("disabled");
}
function resetTimer(){
    timerRunning = false;
    time = 0;
    document.querySelector('.digits').classList.remove('redDigit');
    document.getElementById('start-button').removeAttribute("disabled");
    document.getElementById('reset-button').setAttribute("disabled","");
    document.querySelectorAll('.digit').forEach(x => {
        if(x.id!=='colon')x.textContent = '-';
    });
}
