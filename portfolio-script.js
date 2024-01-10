//`use strict`;
// Array of image URLs
const imageUrls = [
    'img/headerImg/HeaderImages_Hireup.jpg',
    'img/headerImg/HeaderImages_Lexus.jpg',
    'img/headerImg/HeaderImages_Origin.jpg',
    // Add more image URLs as needed
  ];
  
  // Get the element you want to change the background image of
  const targetElement = document.getElementById('conatiner_header');
  
// Variable to keep track of the current image index
let currentImageIndex = 0;

// Function to change the background image
function changeBackgroundImage() {
  // Update the background image URL
  targetElement.style.backgroundImage = `url(${imageUrls[currentImageIndex]})`;

  // Increment the image index
  currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
}

// Call the function initially to set the first image
changeBackgroundImage();

// Set an interval to change the background image every 5 seconds
setInterval(changeBackgroundImage, 3500);


$('.boxItem').on('click', function(){
  
console.log($('.boxItem').hasClass('btn-design'));

});