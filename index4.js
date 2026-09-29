// let myPara = document.querySelector("#para");
// function addStyle() {
//     //   myPara.style.color = "red";
//     //   myPara.style.fontSize = "3rem";
//     //   myPara.style.fontStyle = "italic";
//     myPara.classList.add("para-style")
// }
// function removeStyle() {
//     // myPara.removeStyle.fontStyle = "italic";
//       myPara.classList.remove("para-style");
// }

document.querySelector("button").addEventListener("click", () => {
  alert("HI");
});

let myMsg = document.querySelector("#msg");
myMsg.addEventListener("mouseover", ()=>{
    myMsg.classList.add("my-style")
})
myMsg.addEventListener("mouseout", ()=>{
    myMsg.classList.remove("my-style")
})


// function btnClick (){
//     alert("Hello Ishtiak");
// }
