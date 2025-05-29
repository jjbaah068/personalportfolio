// Declare variable to store navbar element 
const navElement = document.getElementById('navbar');
// Detect scroll event or document
document.addEventListener('scroll', function() {
    // console.log(window.scrollY);
    if (window.scrollY > 70) {
        // change navbar bg to darkgreen
        navElement.style.backgroundColor = '#002A08';
    } else {
        // change navbar bg to transparent
        navElement.style.backgroundColor = 'transparent';
    }
});


// Get the hamburger button element by its ID
const toggleBtn = document.getElementById('menu-toggle');
// Get the navigation menu element by its ID
const menu = document.getElementById('menu');
// Add a click event Listener to the hamburger button
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
})



