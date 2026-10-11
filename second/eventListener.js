document.querySelector("button").addEventListener("click", myFunc);
function myFunc() {
  alert("Welcome");
}
// OR
document.querySelector("#btn2").addEventListener("click", function () {
  alert("WELLCOME TO OUR PAGE");
});

let para = document.querySelector("p");

para.addEventListener("mouseover", function () {
  para.classList.add("para-style");
});
para.addEventListener("mouseout", function () {
  para.classList.remove("para-style");
});

let heading = document.querySelector("#heading");
let btn1 = document.querySelector("#mybtn-1");
let btn2 = document.querySelector("#mybtn-2");
let btn3 = document.querySelector("#mybtn-3");
btn1.addEventListener("click", function () {
  heading.innerHTML = "You have clicked on button 1";
});
btn2.addEventListener("click", function () {
  heading.innerHTML = "You have clicked on button 2";
});
btn3.addEventListener("click", function () {
  heading.innerHTML = "You have clicked on button 3";
});

let heading2 = document.querySelector("#headind2");
let len = document.querySelectorAll("#btn").length;
for (let i = 0; i < len; i++) {
  document.querySelectorAll("#btn")[i].addEventListener("click", function () {
    let text = this.innerHTML;
    heading2.innerHTML = `Clicked on button ${text}`;
  });
}
