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
  //   console.log(milisecVal);
  if (milisecVal == 100) {
    secInc();
    milisecVal = 0;
  }
};

let timerStop;

//event listener  things only
startBtn.addEventListener("click", function () {
  timerStop = setInterval(milisecInc, 1);
  //   console.log(secVal);
});

stopBtn.addEventListener("click", function () {
  clearInterval(timerStop);
});

resetBtn.addEventListener("click", function () {
  clearInterval(timerStop);
  setVlaueZero();
});
