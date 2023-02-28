let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let interval;

let cast=0;



function start() {
  clearInterval(interval);
  interval = setInterval(() => {
    millisecond += 10;
    if (millisecond === 1000) {
      millisecond = 0;
      second++;
    }
    if (second === 60) {
      second = 0;
      minute++;
    }
    if (minute === 60) {
      minute = 0;
      hour++;
    }
    display();
  }, 10);
}

function pause() {
    clearInterval(interval);
}

function casting() {

    cast++;

    document.getElementById('castingScreen').innerText=document.getElementById('castingScreen').innerText+`cast ${cast} => ${document.getElementById("hour").innerText} : ${document.getElementById("minute").innerText} : ${document.getElementById("second").innerText} : ${document.getElementById("millisecond").innerText} \n`

    console.log(  document.getElementById("hour").innerText ,
    document.getElementById("minute").innerText ,
    document.getElementById("second").innerText,
    document.getElementById("millisecond").innerText);
        
    }


function reset() {
  clearInterval(interval);
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  display();
}

function display() {
  document.getElementById("hour").innerText = formatTime(hour);
  document.getElementById("minute").innerText = formatTime(minute);
  document.getElementById("second").innerText = formatTime(second);
  document.getElementById("millisecond").innerText = formatMillisecond(millisecond);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMillisecond(millisecond) {
  return millisecond < 10 ? `00${millisecond}` : millisecond < 100 ? `0${millisecond}` : millisecond;
}



document.getElementById("start").addEventListener("click", start);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("cast").addEventListener("click", casting);
