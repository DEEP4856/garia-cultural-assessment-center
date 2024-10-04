document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector('.carousel-track');
    let position = 0;
    const speed = 2; // Adjust scrolling speed

    function startInfiniteScroll() {
        position -= speed; // Controls the scroll speed
        if (Math.abs(position) >= track.scrollWidth / 2) {
            position = 0; // Reset when half the images are scrolled through
        }
        track.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(startInfiniteScroll); // Smooth animation loop
    }

    startInfiniteScroll(); // Start the scrolling animation
});


   

