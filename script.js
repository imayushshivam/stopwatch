//update version of code

const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
const milisec = document.querySelector("#milisec");

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let hourVal = 0;
let minVal = 0;
let secVal = 0;
let milisecVal = 0;

let setVlaueZero = function () {
  hourVal = 0;
  minVal = 0;
  secVal = 0;
  milisecVal = 0;

  hour.innerHTML = formatTime(hourVal);
  second.innerHTML = formatTime(secVal);
  minute.innerHTML = formatTime(minVal);
  milisec.innerHTML = formatMiliseconds(milisecVal);
};

let formatTime = function (time) {
  return time < 10 ? "0" + time : time;
};

let formatMiliseconds = function (miliseconds) {
  if (miliseconds < 10) {
    return "00" + miliseconds;
  } else if (miliseconds < 100) {
    return "0" + miliseconds;
  } else {
    return miliseconds;
  }
};

setVlaueZero();

let hourInc = function () {
  hourVal++;
  hour.innerHTML = formatTime(hourVal);
};

let minInc = function () {
  minVal++;
  minute.innerHTML = formatTime(minVal);
  if (minVal == 60) {
    hourInc();
    minVal = 0;
  }
};

let secInc = function () {
  secVal++;
  second.innerHTML = formatTime(secVal);
  if (secVal == 60) {
    minInc();
    secVal = 0;
  }
};

let milisecInc = function () {
  milisecVal++;
  milisec.innerHTML = formatMiliseconds(milisecVal);
  if (milisecVal == 100) {
    secInc();
    milisecVal = 0;
  }
};

let timerStop;

startBtn.addEventListener("click", function () {
  timerStop = setInterval(milisecInc, 10);
  startBtn.setAttribute("disabled", "");
});

stopBtn.addEventListener("click", function () {
  clearInterval(timerStop);
  startBtn.removeAttribute("disabled");
});

resetBtn.addEventListener("click", function () {
  startBtn.removeAttribute("disabled");
  clearInterval(timerStop);
  setVlaueZero();
});

// verison one of code
/* //seleted tag and buttons.

const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
const milisec = document.querySelector("#milisec");

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let hourVal = 0;
let minVal = 0;
let secVal = 0;
let milisecVal = 0;

let setVlaueZero = function () {
  hourVal = 0;
  minVal = 0;
  secVal = 0;
  milisecVal = 0;

  hour.innerHTML = hourVal;
  second.innerHTML = secVal;
  minute.innerHTML = minVal;
  second.innerHTML = secVal;
  milisec.innerHTML = milisecVal;
};
setVlaueZero();
//all value increasin function.
let hourInc = function () {
  hourVal++;
  hour.innerHTML = hourVal;
};

let minInc = function () {
  minVal++;
  minute.innerHTML = minVal;
  if (minVal == 60) {
    hourInc();
    minVal = 0;
  }
};
let secInc = function () {
  secVal++;
  //   console.log(secVal);
  second.innerHTML = secVal;
  if (secVal == 60) {
    minInc();
    secVal = 0;
  }
};

let milisecInc = function () {
  milisecVal++;
  milisec.innerHTML = milisecVal;
  if (milisecVal == 100) {
    secInc();
    milisecVal = 0;
  }
};

let timerStop;

//event listener  things only
startBtn.addEventListener("click", function () {
  timerStop = setInterval(milisecInc, 10);
  //   console.log(secVal);
  startBtn.setAttribute("disabled", "");
});

stopBtn.addEventListener("click", function () {
  clearInterval(timerStop);
  startBtn.removeAttribute("disabled");
});

resetBtn.addEventListener("click", function () {
  startBtn.removeAttribute("disabled");
  clearInterval(timerStop);
  setVlaueZero();
});
 */
