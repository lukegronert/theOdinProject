const images = document.querySelectorAll('#imageDiv');
const plus = document.querySelector('#plusbtn');
const minus = document.querySelector('#minusbtn');
const circles = document.querySelectorAll('#circleContainer .fa-circle')

let imageIndex = 1;
showImage(imageIndex);
fadeInImage();

const imageTimer = setInterval(() => {
    imageIndex++
    fadeInImage();
}, 5000)


function animateImage() {
    $(images[imageIndex - 1]).animate({opacity: 1, display: 'block'}, 500)
}

plus.addEventListener('click', () => {
    imageIndex ++;
    fadeInImage()
    clearInterval(imageTimer);
})

minus.addEventListener('click', () => {
    imageIndex --;
    fadeInImage()
})

function fadeInImage() {
    if (imageIndex < 1) {
        imageIndex = 5;
        showImage(imageIndex)
        animateImage()
    } else if(imageIndex < images.length + 1) {
        showImage(imageIndex)
        animateImage()
    } else {
        imageIndex = 1
        showImage(imageIndex)
        animateImage()
    }
}

function showImage(n) {
    setImagesStyle(n);
    setCirclesStyle(n);
}

function setImagesStyle(n) {
    images.forEach((image) => {
        image.style.display = 'none';
        image.style.opacity = '0.1';
    })
    images[n-1].style.display = 'block';
}

function setCirclesStyle(n) {
    circles.forEach((circle) => {
        circle.style.color = 'black';
    })
    circles[n-1].style.color = 'gray';
}