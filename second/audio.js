let len = document.querySelectorAll(".mybtn").length;
for (let i = 0; i < len; i++) {
  document.querySelectorAll(".mybtn")[i].addEventListener("click", function () {
    let text = this.innerHTML;
    audioPlay(text);
  });
}

function audioPlay(text) {
  switch (text) {
    case "Play-1":
      let audio = new Audio("../audios/first.mp3");
      audio.play();
      break;
    case "Play-2":
      let audio2 = new Audio("../audios/second.mp3");
      audio2.play();
      break;
    case "Play-3":
      let audio3 = new Audio("../audios/thired.mp3");
      audio3.play();
      break;
  }
}


let x
console.log(x);
