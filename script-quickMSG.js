

// const header_title2 = document.getElementById("header_title2");
// const header = document.querySelector("body");
// const conatiner_header = document.getElementById("conatiner_header");
// const navMenu = document.getElementById("navMenu");
// const section1 = document.getElementById("section1");
// const btn_main = document.getElementById("btn_main");

//
// ─── TIMER AND CLOCK ────────────────────────────────────────────────────────────
//

const now = new Date();

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const locale = navigator.language;
// Calling the date

const dateNow = new Intl.DateTimeFormat("en-AU", options, locale).format(now);

//
// ─── QUICK MESSAGE PLUS TIMER ───────────────────────────────────────────────────
//

//This is the message string
let countdownTime = 10; // 10 seconds
const min = String(Math.trunc(countdownTime / 60)).padStart(2, 0);
const sec = String(Math.trunc(countdownTime % 60)).padStart(2, 0);
// Adding the message into the website
const message = document.createElement("div");
message.classList.add("quickMessage");
message.innerHTML = `<p><b>${min}:${sec}</b> | Limited time only! Ends ${dateNow}</span></p><button class="btn_quickMessage">Get it now</button>`;

header.prepend(message);

const btn_quickMessage = document.querySelector(".btn_quickMessage");
btn_quickMessage.addEventListener("click", function (e) {
  message.remove();
});

const quickMessageCountDown = setInterval(() => {
  //

  countdownTime--;
  const min = String(Math.trunc(countdownTime / 60)).padStart(2, 0);
  const sec = String(Math.trunc(countdownTime % 60)).padStart(2, 0);
  message.innerHTML = `<p><b>${min}:${sec}</b> | Limited time only! Ends ${dateNow}</span></p><button class="btn_quickMessage">Get it now</button>`;
  if (countdownTime < 0) {
    message.remove();
    clearInterval(quickMessageCountDown);
  }
}, 1000);

//Adding the button and click tag to remove message above

