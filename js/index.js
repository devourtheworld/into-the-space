const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const loading = document.getElementById("loading");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

//background year
year.innerText = currentYear + 1;

//update time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // add values to dom
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

// show spinner before countdown                                // ?????
setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

// run every second
setInterval(updateCountdown, 1000);

function closeNavbar(e) {
    if (
      document.body.classList.contains('show-nav') &&
      e.target !== toggle &&
      !toggle.contains(e.target) &&
      e.target !== navbar &&
      !navbar.contains(e.target)
    ) {
      document.body.classList.toggle('show-nav');
      document.body.removeEventListener('click', closeNavbar);
    } else if (!document.body.classList.contains('show-nav')) {
      document.body.removeEventListener('click', closeNavbar);
    }
  }

// Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));
