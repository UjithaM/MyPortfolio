window.addEventListener("load", () => {
    $('#preloader').css("display", "none");
});
AOS.init();
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled-header');
    } else {
        header.classList.remove('scrolled-header');
    }
});
$("#nav-icon-open").on("click", () => {
    $("#nav-icon-open").css("display", "none");
    $("#nav-icon-close").css("display", "block");
    $("#mob-nav").css("display", "block");
});

$("#nav-icon-close").on("click", () => {
    $("#nav-icon-open").css("display", "block");
    $("#nav-icon-close").css("display", "none");
    $("#mob-nav").css("display", "none");
});
$("#assignment-03-button").on("click", () => {
    window.location.href = "assets/assignment/assignment-03/Assignment03.html";
});