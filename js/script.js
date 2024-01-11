$(function() {
    // Menu - INÍCIO
    $('.sidenav').sidenav({edge:'right'});

    function scroll(href) {
        var offSetTop = $(href).offset().top;
        $('html, body').animate({scrollTop: offSetTop});
        return false;
    }

    $('nav a').click(function() {
        var href = $(this).attr('href');
        scroll(href);
    })
    // Menu - FIM
});