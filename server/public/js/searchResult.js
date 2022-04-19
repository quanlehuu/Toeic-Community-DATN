$(document).ready(function () {
    const searchParams = new URLSearchParams(window.location.search);
    const keyword = searchParams.get("keyword");
    $.ajax({
        type: 'GET',
        url: '/api/search/' + keyword,
        headers: {
            authorization: localStorage.getItem('access_token')? ("Bearer " +  localStorage.getItem('access_token')) : undefined
        },
        success: (data) => {
            $(".loader").hide();
            if (data.tagPost) {
                if (data.tagPost.length == 0) {
                    $(".no-post").show();
                }
                else {
                    for (let i=0; i<data.tagPost.length; i++) showPost(data.tagPost[i].post); 
                }
            }
        }
    });
});