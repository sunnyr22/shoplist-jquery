$(document).ready(function() {
    $("li").click(function() {
    $(this).closest("li .item").toggleClass('stroked');
    });
});