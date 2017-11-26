$('.scrollPage').click(function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: ($.attr(this, 'href') != '#') ? $($.attr(this, 'href')).offset().top : 0
    }, 500);
});

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 100)
        $('#btn-scroll-top').addClass('show');
    else
        $('#btn-scroll-top').removeClass('show');
});