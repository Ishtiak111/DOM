document.querySelector("button").addEventListener("click", myFunc);
function myFunc() {
  alert("Welcome");
}
// OR
document.querySelector("#btn2").addEventListener("click", function () {
  alert("WELLCOME TO OUR PAGE");
});

let para = document.querySelector("p");

para.addEventListener("mouseover", function(){
    para.classList.add("para-style")
})
para.addEventListener("mouseout", function(){
    para.classList.remove("para-style")
})
