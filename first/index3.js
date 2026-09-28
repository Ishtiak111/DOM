// let link = document.querySelector("a");
// link.innerHTML = "Study with Ishtiak";

// let link = document.getElementsByTagName("a")[0];
// link.innerHTML = "Study with Ishtiak"
// link.style.textDecoration = "none";
// link.style.fontSize = "30px"
// link.style.fontStyle = "italic";
// link.href = "https://www.google.com"

// let heading3 = document.createElement("h2")
// let text = document.createTextNode("Heading 3");
// heading3.appendChild(text);

// let myDiv = document.getElementsByClassName("my-div")[0];
// myDiv.appendChild(heading3);

// let heading2 = document.getElementsByTagName("h2")[1];
// myDiv.removeChild(heading2);


// let heading4 = document.createElement("h2")
// let text2 = document.createTextNode("Heading 4");
// heading4.appendChild(text2);
// let heading1 = document.getElementsByTagName("h2")[0];
// myDiv.insertBefore(heading4, heading1);


let heading3 = document.createElement("h2");
let text = document.createTextNode("Heading 3");
heading3.appendChild(text);

let myDiv = document.getElementsByClassName("my-div")[0];
myDiv.appendChild(heading3);

let heading2 = document.getElementsByTagName("h2")[1];

myDiv.removeChild(heading2);

let heading4 = document.createElement("h2");
let text2 = document.createTextNode("Heading4");
heading4.appendChild(text2);
let heading1 = document.getElementsByTagName("h2")[0];
myDiv.insertBefore(heading4, heading1);