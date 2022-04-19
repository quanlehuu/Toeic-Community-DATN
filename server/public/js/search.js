

$(document).ready(function () {

    $("#search").on('click', function () {
        const searchBox = $('.search-box');
        if( $(window).width() > 991) {
            if ($("[name='keyword']").val().trim() != "") {
                window.location.href = "/search/?keyword=" + $("[name='keyword']").val();
            }
        }
        else {
            searchBox.toggleClass('active');
        }
    });

    $("[name='keyword']").keypress(function(e){
        if (e.which == 13) {
            if ($("[name='keyword']").val().trim() != "") {
                window.location.href = "/search/?keyword=" + $("[name='keyword']").val();
            }                      
        } 
    });

});