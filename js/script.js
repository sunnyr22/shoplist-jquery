$(document).ready(function() {
    $("li").click(function() {
    $(this).find(".item").toggleClass('stroked');
    });
});