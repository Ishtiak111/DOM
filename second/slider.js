let photos = [
  "../assects/img1.jpg",
  "../assects/img2.jpg",
  "../assects/img3.jpg",
];
let image = document.querySelector("img");

let count = 0;

function prev() {
  if (count <= 0) {
    count = 2;
  } else {
    count--;
  }
  image.src = photos[count];
}

function next() {
  if (count >= photos.length-1) {
    count = 0;
  } else {
    count++;
  }
  image.src = photos[count];
}
