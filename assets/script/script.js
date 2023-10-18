window.addEventListener("load", () => {
    $('#preloader').css("display", "none");
});
AOS.init();
window.addEventListener('scroll', function() {
    var header = document.querySelector('header'); // Change 'header' to match your header's HTML structure

    if (window.scrollY > 0) {
        header.classList.add('scrolled-header');
    } else {
        header.classList.remove('scrolled-header');
    }
});