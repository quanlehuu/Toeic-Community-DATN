$(document).ready(function () {
  const name = localStorage.getItem("username");
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/api/user/getInfo/" + name,
    headers: {
      authorization: localStorage.getItem("access_token")
        ? "Bearer " + localStorage.getItem("access_token")
        : undefined,
    },
    success: function (result) {
      if (result.success) {
        $("#body").css("visibility", "visible", "important");
        const user = result.user;
        // console.log(user);
        const name = user.name;
        const point = user.point;
        localStorage.setItem("name", name);
        $(".mypic").attr("src", user.img);
        $(".typing-comment img").attr("src", user.img); // For comment
        $(".comment img").attr("src", user.img); // For comment
        $(".comment a").text(user.name); // For comment
        $(".comment a").attr("href", "/user/" + user.username);
        $("#name").text(name);
        $("#point").html(
          `<i class="fa fa-heart" style="color:red;"></i> ${point}`
        );
      } else {
        window.location.href = "/login";
      }
    },
    error: (err) => {
      alert("Something went wrong! Try again!");
    },
  });
});
