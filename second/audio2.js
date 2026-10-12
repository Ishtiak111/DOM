let len = document.querySelectorAll(".my-btn").length;
for (let i = 0; i < len; i++) {
  document
    .querySelectorAll(".my-btn")
    [i].addEventListener("click", function () {
      let text = this.innerHTML;
      play(text);
    });
}

function play(text) {
  switch (text) {
    case "a":
      let audio = new Audio("/audios/first.mp3");
      audio.play();
      break;
    case "b":
      let audio2 = new Audio("/audios/second.mp3");
      audio2.play();
      break;
    case "c":
      let audio3 = new Audio("/audios/thired.mp3");
      audio3.play();
      break;
  }
}
