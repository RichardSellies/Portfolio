window.addEventListener('DOMContentLoaded', function() {
    var lazyImages = document.querySelectorAll('.lazy-image');
  
    function lazyLoad() {
      lazyImages.forEach(function(image) {
        if (image.getBoundingClientRect().top <= window.innerHeight && image.getBoundingClientRect().bottom >= 0 && getComputedStyle(image).display !== 'none') {
          image.src = image.dataset.src;
          image.classList.add('loaded');
        }
      });
    }
  
    // Trigger lazyLoad initially
    lazyLoad();
  
    // Event listener for scroll and resize events
    window.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
  });
  