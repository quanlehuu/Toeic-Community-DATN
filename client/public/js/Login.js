function checkInput() {
  if (
    $("[name='username']").val().trim() == "" &&
    $("[name='password']").val().trim() == ""
  ) {
    $("#loginalert p").text("Error: You must type username and password.");
    $("#loginalert").show();
    $("[name='username']").focus();
  } else if ($("[name='username']").val().trim() == "") {
    $("#loginalert p").text("Error: You must type username.");
    $("#loginalert").show();
    $("[name='username']").focus();
  } else if ($("[name='password']").val().trim() == "") {
    $("#loginalert p").text("Error: You must type password.");
    $("#loginalert").show();
    $("[name='password']").focus();
  } else {
    $(".backdrop").show();
    const user = {
      username: $("[name='username']").val(),
      password: $("[name='password'").val(),
    };
    $.ajax({
      type: "POST",
      data: JSON.stringify(user),
      contentType: "application/json",
      url: "http://localhost:3000/api/user/login",
      success: function (data) {
        $(".backdrop").hide();
        if (!data) {
          alert("Error! Please try again.");
        } else {
          if (!data.success) {
            if (data.usernameNotExist) {
              $("#loginalert p").text("Error: Username does not exist.");
              $("#loginalert").show();
              $("[name='username']").focus();
            } else {
              $("#loginalert p").text("Error: Password is incorrect.");
              $("#loginalert").show();
              $("[name='password']").focus();
            }
          } else {
            localStorage.setItem("access_token", data.access_token);
            localStorage.setItem("username", data.username);
            localStorage.setItem("id", data.id);
            window.location.href = "/";
          }
        }
      },
      error: function (error) {
        $(".backdrop").hide();
        alert("Error! Please check your internet connection and try again.");
      },
    });
  }
}

$(document).ready(function () {
  $(".btn-test").click(function () {
    console.log("login test");
  });

  $("[name='username']").focus();
  $("#login").click(checkInput);

  $("[name='username']").keypress(function (e) {
    if (e.which == 13) {
      checkInput();
    }
  });
  $("[name='password']").keypress(function (e) {
    if (e.which == 13) {
      checkInput();
    }
  });
  $("#signup").click(function () {
    window.location.href = "/signup";
  });
});
