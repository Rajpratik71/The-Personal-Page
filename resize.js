$(function ( ) {
$(window).resize (function ( ) {
    if ($(this).width() >= 767) {
        $.backstretch("img/bg.jpg", {speed: 150});
    }
})
.resize ( );//trigger resize on page load
});

function content_load (target)
{
    $("#content").load (target);
    return true;
}
