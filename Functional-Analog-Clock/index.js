const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");


function updateClock() {
  const currentDate = new Date();
  setInterval(updateClock, 1000);
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const second = new Date().getSeconds();

  hourDeg = (hour / 12) * 360;
}
updateClock();