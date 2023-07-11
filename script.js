const showDigitalTime = () => {
  const digitalClock = document.querySelector(".digital-clock");
  const formatter = new Intl.DateTimeFormat("en-us", {
    timeStyle: "medium",
  });
  const time = formatter.format(new Date());
  digitalClock.innerText = time;
};

function displayClock() {
  //show Digital clock
  showDigitalTime();

  // get the hand divs
  const hourHand = document.querySelector(".hour");
  const minuteHand = document.querySelector(".minute");
  const secondHand = document.querySelector(".second");

  // get time
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // calc degree
  const secondsRatio = seconds * 6;
  const minutesRatio = minutes * 6 + (seconds * 6) / 60;
  const hoursRatio = hours * 30 + (minutes * 30) / 60;

  secondHand.style.transform = `rotate(${secondsRatio}deg)`;
  minuteHand.style.transform = `rotate(${minutesRatio}deg)`;
  hourHand.style.transform = `rotate(${hoursRatio}deg)`;
}

displayClock();
setInterval(displayClock, 1000);
