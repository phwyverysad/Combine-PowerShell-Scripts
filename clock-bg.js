function initClockBg() {
  const hrs = document.querySelector("#bg-clock-hrs");
  const min = document.querySelector("#bg-clock-min");
  const sec = document.querySelector("#bg-clock-sec");

  if (!hrs || !min || !sec) return;

  setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hrs.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
  }, 1000);

  function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    document.getElementById("bg-clock-hours").textContent = formatTime(hours % 12 || 12);
    document.getElementById("bg-clock-minutes").textContent = formatTime(minutes);
    document.getElementById("bg-clock-seconds").textContent = formatTime(seconds);
    document.getElementById("bg-clock-ampm").textContent = ampm;
  }

  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }

  setInterval(updateClock, 1000);
  updateClock();
}

document.addEventListener("DOMContentLoaded", initClockBg);
if (document.readyState === "complete" || document.readyState === "interactive") {
    initClockBg();
}
