let time = 0;
let maxTime = 1000;
let timerID;
function count() {
    if (time < maxTime) {
        time++;
        document.getElementById('msTens').textContent = time % 10;
        document.getElementById('msHundreds').textContent = Math.floor(time / 10) % 10;
        document.getElementById('secondOnes').textContent = Math.floor(time / 100) % 10;
        document.getElementById('secondTens').textContent = Math.floor(time / 1000) % 10;
    }
    else {
        clearInterval(timerID);
        document.querySelector('.digits').classList.add('redDigit');
    }
}
function startTimer() {
    timerID = window.setInterval(count, 10);
    maxTime = 100 * parseInt(document.getElementById('max-time').value);
    //alert(maxTime);
    document.getElementById('start-button').setAttribute("disabled", "");
    document.getElementById('reset-button').removeAttribute("disabled");
}
function resetTimer() {
    time = 0;
    clearInterval(timerID);
    document.querySelector('.digits').classList.remove('redDigit');
    document.getElementById('start-button').removeAttribute("disabled");
    document.getElementById('reset-button').setAttribute("disabled", "");
    document.querySelectorAll('.digit').forEach(x => {
        if (x.id !== 'colon') x.textContent = '-';
    });
}
