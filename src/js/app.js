new WOW().init();

$(document).ready(function() {
    $('.horizontal-bar .tab').click(function() {
        $(this).parents('.horizontal-bar').find('.tab').removeClass('active');
        $(this).addClass('active');
        let tab = $(this).attr('id');

        $(this).parents('.horizontal-bar').find('.info-container .container').removeClass('active');
        $(this).parents('.horizontal-bar').find('.container#' + tab).addClass('active');
    });
    $('.burger-icon').click(function() {
        $(this).toggleClass('active');
        $('header nav').toggleClass('active');
        $(body).toggleClass('fixed');
    })
});