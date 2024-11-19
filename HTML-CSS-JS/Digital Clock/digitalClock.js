const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

const circleEls = document.querySelectorAll(".circle");

const dayEl = document.querySelector(".day");
const dateEl = document.querySelector(".curr-date");
const monthEl = document.querySelector(".curr-month");
const yearEl = document.querySelector(".curr-year");

const formatTime = (currTime = new Date()) => {
  const hour = currTime.getHours();
  const minute = currTime.getMinutes();
  const second = currTime.getSeconds();

  hourEl.textContent = hour < 10 ? `0${hour}` : hour;
  minuteEl.textContent = minute < 10 ? `0${minute}` : minute;
  secondEl.textContent = second < 10 ? `0${second}` : second;
};

const formatDate = (currDate = new Date()) => {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayIndex = currDate.getDay();
  const day = dayNames[dayIndex];
  const date = currDate.getDate();
  const monthIndex = currDate.getMonth();
  const month = monthNames[monthIndex];
  const year = currDate.getFullYear();

  dayEl.textContent = day;
  dateEl.textContent = date;
  monthEl.textContent = month;
  yearEl.textContent = year;
};

const updateClock = () => {
  const currentTime = new Date();
  formatTime(currentTime);
  formatDate(currentTime);
};

setInterval(updateClock, 1000);
setInterval(() => {
  circleEls.forEach((circleEl) => {
    circleEl.classList.toggle("circle-active");
  });
}, 500);

updateClock();
