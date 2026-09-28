let image = ["assects/img1.jpg", "assects/img2.jpg", "assects/img3.jpg"]
let displayImg = document.querySelector("img");
let count = 0;
function prev (){
    count--;
    if(count < 0){
        count = image.length-1;
    }
    displayImg.src = image[count];

}

function next (){
    count++;
    if(count >= image.length){
        count = 0;
    }
    displayImg.src = image[count];
}