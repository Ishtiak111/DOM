let mylink = document.getElementsByTagName("a")[0];

// style selected element:
mylink.innerHTML = "Visite Youtude";
mylink.style.color = "red";
mylink.style.fontSize = "30px";
mylink.style.textDecoration = "none";
mylink.href = "https://www.google.com";
mylink.target = "_blank";

// create and append html element:
let heading = document.createElement("i");
let text = document.createTextNode("This is Heading");
heading.appendChild(text);

let myDiv = document.getElementById("my-div");
myDiv.appendChild(heading);

let heading2 = document.createElement("h3");
heading2.innerHTML="Heading 2";
myDiv.appendChild(heading2);

let para1 = document.createElement("p");
let text2 = document.createTextNode("I love programming");
para1.appendChild(text2);
myDiv.appendChild(para1);

let image = document.createElement("img");
image.src="/assects/img3.jpg";
image.style.width="200px";
myDiv.appendChild(image);

let heading4 = document.createElement("h2");
let text4 = document.createTextNode("This is heading 4");
heading4.appendChild(text4);
myDiv.appendChild(heading4);

// insert before element:
myDiv.insertBefore(heading4, para1)

let heading02 = document.getElementsByTagName("h1")[1];
myDiv.removeChild(heading02)

let heading01 = document.getElementsByTagName("h1")[0];
heading01.classList.add("cls");
heading01.classList.remove("myClass");
console.log(heading01.classList);


// select downwards:
let myDiv2 = document.getElementById("my-div");
myDiv2.getElementsByTagName("h1")[0].innerHTML="Wellcome" //selected downwards


// select upwards:
let student_a = document.querySelector("li");
let studentList = student_a.parentElement;   //Selected upwards
studentList.style.border="2px solid red"

let body1 = studentList.parentElement;  //Selected upwards
body1.style.backgroundColor="skyblue"


// sideways:
let student_A = document.querySelector("li");
let student_b = student_A.nextElementSibling;   // sideways
student_b.style.color="red";
let student_c = student_b.nextElementSibling;  // sideways
student_c.style.color="blue";