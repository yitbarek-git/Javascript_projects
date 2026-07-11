/* ALGORITHM 
  1, we get all HTML elements by their Id.
  2, then, we will access the current date, hour, minute, and second from the browser.
  3, we calculate the degree found in each time frame
  4, we make the elements   to rotate based on the degree we calculate.
  5. we update the time each second.
  6. Done.
   */
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");


function updateClock() {
  //const currentDate = new Date(); //to get the current full date.
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const second = new Date().getSeconds();

  const hourDegree = (hour / 12) * 360;
  
  hourEl.style.transform = `rotate(${hourDegree}deg)`;

  const minuteDegree = (minute / 60) * 360;
  minuteEl.style.transform = `rotate(${minuteDegree}deg)`;

  const secondDegree = (second / 60) * 360;
  secondEl.style.transform = `rotate(${secondDegree}deg)`;
}
setInterval(updateClock, 1000)//to update every second.

updateClock();//to intialize immidatly.
