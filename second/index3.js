function myMsg() {
  alert("Wellcome to the page");
}

function mypara() {
  alert("This is paragraph");
}

let para = document.querySelector("#msg");
let myimg = document.querySelector("#mypic");
function click1() {
  para.innerHTML = "You have clicked on button 1";
  myimg.src="../assects/img1.jpg"
}
function click2() {
    para.innerHTML = "You have clicked on button 2"
    myimg.src="../assects/img2.jpg"
}
