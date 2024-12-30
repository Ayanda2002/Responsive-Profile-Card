const slider = document.querySelector('.slider');
const thumb = document.querySelector('.thumb');
const body = document.body; 

// Track whether the thumb is at the right position or not
let isThumbAtRight = false;

slider.addEventListener('click', () => {
    const sliderWidth = slider.offsetWidth; // Get the width of the slider
    const thumbWidth = thumb.offsetWidth; // Get the width of the thumb

    // If the thumb is at the right, move it back to the left
    if (isThumbAtRight) {
        thumb.style.left = "0px"; // Move thumb to the left
        body.classList.remove('dark'); // Switch to light mode
        body.classList.add('light');
    } else {
        const newLeft = sliderWidth - thumbWidth; // Move the thumb to the right
        thumb.style.left = `${newLeft}px`;
        body.classList.remove('light'); // Switch to light mode
        body.classList.add('dark');
    }

    // Toggle the state
    isThumbAtRight = !isThumbAtRight;
});
