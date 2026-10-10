let h1 = document.querySelector("#heading");
let len = document.querySelectorAll(".myButton").length;
for(let i=0; i<len; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
        let text = this.innerHTML;
        h1.innerHTML = text + " is clicked"
    })
}
