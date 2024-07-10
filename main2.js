$(document).ready(function () {
    $('.carousel').carousel({
        interval: false
    });

    // Manually trigger carousel controls
    $('.carousel-control-prev').click(function () {
        $('.carousel').carousel('prev');
    });

    $('.carousel-control-next').click(function () {
        $('.carousel').carousel('next');
    });

    // Manually trigger carousel indicators
    $('.carousel-indicators li').click(function () {
        var index = $(this).data('slide-to');
        $('.carousel').carousel(index);
    });
});

 