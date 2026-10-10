for(let i=0; i<3; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
    let text = this.innerHTML;
    audioPlay(text);
})
}

function audioPlay(text){
    switch(text){
        case "a":
            let audio = new Audio('./audios/first.mp3');
            audio.play();
            break;
        case "b":
            let audio2 = new Audio('./audios/second.mp3');
            audio2.play();
            break;
        case "c":
            let audio3 = new Audio('./audios/thired.mp3');
            audio3.play();
    }
}