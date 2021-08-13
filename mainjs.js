//Event Listener to respond to user clicks on hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

//Smooth Scrolling JS from NavBar click
$('nav a').click(function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $("#elementtoScrollToID").offset().top
    }, 2000);
});

//Fixed NavBar with opaque background after scroll from initial position
// $(window).on('scroll', function() {
//     if($(window).scrollTop()) {
//         $('nav').addClass('black');
//     }
//     else {
//         $('nav').removeClass('black');
//     }
// });

