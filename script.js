

const header_title2 = document.getElementById("header_title2");
const header = document.querySelector("body");
const conatiner_header = document.getElementById("conatiner_header");
const conatiner_headerSmall = document.getElementById("conatiner_headerSmall");
const navMenu = document.getElementById("navMenu");
const section1 = document.getElementById("section1");
const btn_main = document.getElementById("btn_main");


//
// ─── TITLE HEADING ANIMATION ────────────────────────────────────────────────────
//

const animate_ht2 = function () {
  const arr_header_title2 = [...header_title2.textContent];
  header_title2.style.visibility="visible";
  header_title2.innerText = "";

  arr_header_title2.forEach(function (arr, i) {
    header_title2.innerHTML += `<div class='ht2_aninmation'>${arr}</div>`;
  });

  gsap.to(".ht2_aninmation", {
    duration: 0.5,
    opacity: 1,
    stagger: 0.1,
    ease: "power3.in",
  });
};

animate_ht2();

if (conatiner_header !== null) {

  conatiner_header.style.height = `${window.innerHeight}px`;
  console.log('Header');
} else {
  conatiner_headerSmall.style.height = `${window.innerHeight}px`;
  console.log('smallheader');
}

//conatiner_header.style.height = `${window.innerHeight}px`;
//conatiner_headerSmall.style.height = `${window.innerHeight}px`;

console.log(
  `Window Inner Height: ${window.innerHeight} and Document view port height: ${document.documentElement.clientHeight}`
);

//
// ─── SCROLLING DOWN PAGE ────────────────────────────────────────────────────────
//

btn_main.addEventListener("click", function (e) {
  const section1Pos = section1.getBoundingClientRect();
  console.log(section1Pos);
  console.log(e.target.getBoundingClientRect());

  //Window.scrollY = "1000px";

  window.scrollTo({
    left: section1Pos.left + window.scrollX,
    top: section1Pos.top + window.scrollY,
    behavior: "smooth",
  });
});

//
// ─── ACTIVATING DIFFERENT BACKGROUND COLOUR ────────────────────────────────────────────────────────
//

// Random colour active

const randomColourInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColour = () => {
  return `rgb(${randomColourInt(100, 180)},${randomColourInt(
    100,
    180
  )},${randomColourInt(100, 180)})`;
};

document.addEventListener("keypress", (e) => {
  if (e.code === "KeyK") {
    return document.documentElement.style.setProperty(
      "--primary-colour",
      randomColour()
    );
  }
  if (e.code === "KeyL") {
    return document.documentElement.style.setProperty("--primary-colour", null);
  }
  console.log(e.code);
});

//
// ─── SCROLLING DOWN NAV ────────────────────────────────────────────────────────
//

navMenu.addEventListener("click", function (e) {
  console.log(e.target);
  e.preventDefault();

  if (e.target.classList.contains("navLink")) {
    console.log("link");

    const linkDestination = e.target.getAttribute("href");
    console.log(linkDestination);

    const linkDestinationID = document.querySelector(linkDestination);

    const navMenuPos = linkDestinationID.getBoundingClientRect();

    window.scrollTo({
      left: navMenuPos.left + window.pageXOffset,
      top: navMenuPos.top + window.pageYOffset,
      behavior: "smooth",
    });
  }
});
