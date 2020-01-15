let time = 0;
function count(){
    time++;
    document.getElementById('msTens').textContent=time % 10;
    document.getElementById('msHundreds').textContent = Math.floor(time/10) % 10;
    document.getElementById('secondOnes').textContent = Math.floor(time/100) % 10;
    document.getElementById('secondTens').textContent = Math.floor(time/1000) % 10;
}
window.setInterval(count, 10);