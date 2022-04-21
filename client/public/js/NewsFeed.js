getPosts = (num) => {
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/api/post/getAll/" + num,
    headers: {
      authorization: localStorage.getItem("access_token")
        ? "Bearer " + localStorage.getItem("access_token")
        : undefined,
    },
    success: (data) => {
      if (data.post && data.post.length !== 0) {
        let i;
        for (i = 0; i < data.post.length; i++) showPost(data.post[i]);
      } else {
        $(".loader").hide();
      }
    },
  });
};

$(document).ready(function () {
  $("#sb-newsfeed").addClass("active");
  let num = 0;
  getPosts(num);

  $(window).scroll(function () {
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
      num = num + 1;
      getPosts(num);
    }
  });
});
