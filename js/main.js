$(document).ready(function () {

    let current_slide = 0
    let slide_max = $('.quiz-element').length - 1
    
    let current_dot = 0;
    let max_dots = $('.quiz-element').length
    while (current_dot < max_dots) {
        $('.quiz-dots').append('<div class="quiz-dots-dot"></div>');
        current_dot++;
    }
    $('.quiz-dots-dot').first().addClass('active');
    $(document).on('click', '.quiz-button', function () { 
        current_slide++; 
        if (current_slide == slide_max+1) {
            $('.quiz-answer .quiz-button').attr('href', 'https://www.youtube.com/')
        } else {
            $('.quiz-element').attr('style', 'transform: translatex(-' + (100*current_slide) + '%)');
        }
        $('.quiz-dots-dot.active').removeClass('active').next().addClass('active');
    });
});