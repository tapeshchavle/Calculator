let inp = document.querySelector(".show");
let string = "";
let btns = document.querySelectorAll(".btn");
let p = document.querySelector("#num");
let clear = document.querySelector(".clear");
let initial = "";
btns.forEach((e) => {
  e.addEventListener("click", (x) => {
    if (x.target.innerHTML == "=") {
      intial = string;
      string = eval(string).toFixed(2);
      store(intial, string);
      inp.innerText = string; //inp.value=string;
      p.innerHTML = string;
    } else if (x.target.innerHTML == "C") {
      string = "";
      inp.value = p.innerHTML = "";
    } else {
      console.log(x.target);
      string += e.innerHTML;
      inp.value = string;
      history.classList.remove("add");
    }
  });
});
inp.onclick = () => {
  history.classList.remove("add");
};
/*history*/

let r = true;

let history = document.querySelector(".history");
function store(initial, result) {
  let p = document.createElement("p");

  p.innerText = initial + " = " + result;
  history.append(p);
}

/* clear history button*/

let his = document.querySelector("#his");

his.addEventListener("click", (e) => {
  if (r == true) {
    history.classList.add("add");
    r = false;
  } else {
    history.classList.remove("add");
    r = true;
  }
});
