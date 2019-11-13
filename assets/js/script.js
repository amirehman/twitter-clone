jQuery(document).ready(function() {

    $('.search-input').on('focus', function() {
        $('.search-input-wrappper').removeClass('bg-gray-300');
        $('.search-input-wrappper').addClass('twitter-border-color');
    })
    $('.search-input').on('focusout', function() {
        $('.search-input-wrappper').addClass('bg-gray-300');
        $('.search-input-wrappper').removeClass('twitter-border-color');
    })


    $("#homeNavbar, #leftNavbar, #rightSide").sticky({ topSpacing: 0 });

})