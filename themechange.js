/*theme change */
let changebtn = document.querySelector(".changeclr");
let rs = true;
let span = document.querySelector("span");
changebtn.addEventListener("click", () => {
  if (rs == true) {
    span.innerHTML = "Click to light Theme";

    rs = false;
    dark();
  } else {
    span.innerHTML = "Dark Theme";
    rs = true;
    light();
  }
});
let btn1 = document.querySelectorAll(".clr1");
let btn2 = document.querySelectorAll(".clr2");
let btn3 = document.querySelectorAll(".clr3");
let btn4 = document.querySelectorAll(".clr4");
let obtn = document.querySelector(".buttons");
let dis1 = document.querySelector(".dis1");
let inp1 = document.querySelector(".show");
let inp2 = document.querySelector("#num");
let btn = document.querySelectorAll("button");

mblack();
function mblack() {
  btn.forEach((e) => {
    e.addEventListener("mouseover", () => {
      e.classList.add("mouseblack");
    });
    e.addEventListener("mouseout", () => {
      e.classList.remove("mouseblack");
    });
  });
}
function dark() {
  btn1.forEach((e) => {
    e.classList.add("tm1");
  });
  btn2.forEach((e) => {
    e.classList.add("tm2");
  });
  btn3.forEach((e) => {
    e.classList.add("tm3");
  });
  btn4.forEach((e) => {
    e.classList.add("tm4");
  });
  obtn.classList.add("otm");
  dis1.classList.add("tdis1");
  inp1.classList.add("inptm");

  btn.forEach((e) => {
    e.addEventListener("mouseover", () => {
      e.classList.add("mousewhite");
    });
    e.addEventListener("mouseout", () => {
      e.classList.remove("mousewhite");
    });
  });
}
function light() {
  btn1.forEach((e) => {
    e.classList.remove("tm1");
  });
  btn2.forEach((e) => {
    e.classList.remove("tm2");
  });
  btn3.forEach((e) => {
    e.classList.remove("tm3");
  });
  btn4.forEach((e) => {
    e.classList.remove("tm4");
  });
  obtn.classList.remove("otm");
  dis1.classList.remove("tdis1");
  inp1.classList.remove("inptm");
  btn.forEach((e) => {
    e.addEventListener("mouseover", () => {
      e.classList.remove("mousewhite");
    });
  });
}
