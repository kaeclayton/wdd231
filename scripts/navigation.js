//Store the selected elements that we are going to use
const navButton = document.querySelector('#ham-button');

//Code to select the nav element
const navBar = document.querySelector('#nav-bar');

// toggle the show class off and on
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});


