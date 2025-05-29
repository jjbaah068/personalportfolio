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

// Array with different roles to cycle through
const roles = ["Frontend Developer", "Web Developer", "Web Designer"];
// Select HTML element where role will be displayed
const textElement = document.getElementById('changing-text');
// Initialize the index to track the role
let index = 0;
// Define a function to change text 
function changeText() {
    textElement.classList.add("opacity-0");
    setTimeout(() => {
        textElement.textContent = roles[index];
        textElement.classList.remove("opacity-0");
        index = (index + 1) % roles.length;
    }, 300);
}

// Call the function 
changeText();
// Set Interval 
setInterval(changeText, 2500);
















// Get the hamburger button element by its ID
const toggleBtn = document.getElementById('menu-toggle');
// Get the navigation menu element by its ID
const menu = document.getElementById('menu');
// Add a click event Listener to the hamburger button
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
})



