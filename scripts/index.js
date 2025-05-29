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
