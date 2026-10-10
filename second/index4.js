let mylink = document.getElementsByTagName("a")[0];

// style selected element:
mylink.innerHTML = "Visite Youtude";
mylink.style.color = "red";
mylink.style.fontSize = "30px";
mylink.style.textDecoration = "none";
mylink.href = "https://www.google.com";
mylink.target = "_blank";

// create html element:
let heading = document.createElement("i");
let text = document.createTextNode("This is Heading");
heading.appendChild(text);

let myDiv = document.getElementById("my-div");
myDiv.appendChild(heading);
