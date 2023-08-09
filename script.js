// The JavaScript is optional if you want to create a scrolling effect without any user interaction.

// If you want the scrolling text to stop when the user hovers over it, you can use the following code:

const scrollingText = document.querySelector('.scrolling-text');
const containerWidth = document.querySelector('.scrolling-text-container').offsetWidth;

scrollingText.addEventListener('mousepointer', () => {
    scrollingText.style.animation = 'scrollText 10s linear infinite';
  
});

scrollingText.addEventListener('mouseleave', () => {
    scrollingText.style.animation = 'scrollText 10s linear infinite';
});
