jQuery(function($){
    $(document).ready(function() {
        $('.qustion--item').on('click', function() {
            $(this).find('.question--item__content').slideToggle();
        });
    });
});