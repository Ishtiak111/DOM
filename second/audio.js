let len = document.querySelectorAll(".mybtn").length;
for (let i = 0; i < len; i++) {
  document.querySelectorAll(".mybtn")[i].addEventListener("click", function () {
    let text = this.innerHTML;
    audioPlay(text);
    playAnimation(text);
  });
}

document.addEventListener("keypress", function (even) {
  let key = even.key;
  audioPlay(key);
});

function audioPlay(text) {
  switch (text) {
    case "a":
      let audio = new Audio("../audios/first.mp3");
      audio.play();
      break;
    case "b":
      let audio2 = new Audio("../audios/second.mp3");
      audio2.play();
      break;
    case "c":
      let audio3 = new Audio("../audios/thired.mp3");
      audio3.play();
      break;
  }
}

function playAnimation(text) {
  let selectedBtn = document.querySelector("." + text);
  selectedBtn.classList.add("anim");

  setTimeout(function () {
    selectedBtn.classList.remove("anim");
  }, 3000);
}

let myPara = document.querySelector("h3");
document.addEventListener("keypress", function (event) {
  let key = event.key;
  myPara.innerHTML = `You have pressed on : ${key}`;
});

let count = 0;
document
  .querySelector("textarea")
  .addEventListener("keypress", function (event) {
    count++;
    document.querySelector("#para2").innerHTML = "Pressed: "+count;
  });

