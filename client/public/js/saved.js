$(document).ready(function () {
  $("#sb-saved").addClass("active");
  $(".loader").show();
  $.ajax({
    type: "GET",
    url: window.HOST + "/api/save",
    headers: {
      authorization: localStorage.getItem("access_token")
        ? "Bearer " + localStorage.getItem("access_token")
        : undefined,
    },
    success: (data) => {
      $(".loader").hide();
      if (data.post) {
        if (data.post.length == 0) {
          $(".no-post").show();
        } else {
          for (let i = 0; i < data.post.length; i++)
            showPost(data.post[i].post);
        }
      }
    },
  });
});
