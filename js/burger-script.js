$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__burger-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});