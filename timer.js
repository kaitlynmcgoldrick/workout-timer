const fullTimeInMinutes = 1; //minutes
const someIntervalInSeconds = 10; //seconds

var sound = new Audio("Beep.mp3");

const calculations = (sec, min) => {
  // const minToSec = min;
  const minToSec = min*60;
  calcs = {
    intervals: Math.floor(minToSec/sec),
    remainder: minToSec%sec,
    remainderExists: minToSec%sec != 0 ? true : false
  };
  console.log(calcs)
  return calcs;
};

const startTimer = (seconds) => {
  let x = setInterval(() => {
    console.log(seconds);
    seconds--;
    if (seconds <= 0) {
      clearInterval(x);
      return;
    }
  }, 1000, seconds);
};

const repeatTimer = (func, param, times) => {
  func(param);
  let y = setInterval(() => {
    console.log('Interval: '+ times)
    times--;
    if (times <= 0){
      clearInterval(y);
      return;
    }
    func(param);
    sound.play();
  }, param*1000);
};

const calcsObj = calculations(someIntervalInSeconds, fullTimeInMinutes);
