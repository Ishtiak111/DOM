// document.getElementById("heading1").innerHTML = "Hello Programmer"

let myHeading = document.getElementById("heading1");
myHeading.innerHTML = "Hello Programmar";

let myPara = document.getElementById("para");
myPara.innerHTML = "Bye bye";

let myHeading2 = document.getElementById("heading2");
myHeading2.innerHTML = "Good by";

// document.getElementsByTagName("h2")[0].innerHTML="changed"
const tagName = document.getElementsByTagName("h2");
tagName[1].innerHTML="changed"

// document.getElementsByClassName("mypara")[1].innerHTML="Changed paragraph-2"
const className = document.getElementsByClassName("mypara");
className[0].innerHTML="Changed Paragraph";
