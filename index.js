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


   


// form validation
document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
    const form = event.target;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  }, false);






// temporary

function block() {
    alert("ENROLLMENT WILL START FROM 1ST DECEMBER 2024")
}







// block modal
// Function to show the modal
// Function to show the modal
function showModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'flex'; // Display the modal
    document.body.classList.add('modal-open'); // Prevent page scrolling
}

// Function to prevent scrolling when modal is closed
function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none'; // Hide the modal
    document.body.classList.remove('modal-open'); // Allow page scrolling again
}

// Show modal on page load
window.onload = function() {
    showModal();
};

// Prevent the modal from disappearing on reload
window.onbeforeunload = function() {
    localStorage.setItem('modalShown', 'true');
};

// Check if the modal should be displayed
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('modalShown') !== 'true') {
        showModal();
    }
});
