let time = 0;
function count() {
    if (time < 1000) {
        time++;
        document.getElementById('msTens').textContent = time % 10;
        document.getElementById('msHundreds').textContent = Math.floor(time / 10) % 10;
        document.getElementById('secondOnes').textContent = Math.floor(time / 100) % 10;
        document.getElementById('secondTens').textContent = Math.floor(time / 1000) % 10;
    }
    else {
        document.querySelectorAll('.digit').forEach(x=>x.style.color="red");
    }
}
window.setInterval(count, 10);