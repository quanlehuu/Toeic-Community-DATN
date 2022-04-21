function checkAndChange() {
  var oldPass = $("[name='oldPass']").val();
  var newPass = $("[name='newPass']").val();
  var renewPass = $("[name='reNewPass']").val();

  if (oldPass.trim() == "" || newPass.trim() == "" || renewPass.trim() == "") {
    $("#loginalert p").text("Error: You must fill all input.");
    $("#loginalert").show();

    if (oldPass.trim() == "") $("[name='oldPass']").focus();
    else if (newPass.trim() == "") $("[name='newPass']").focus();
    else $("[name='reNewPass']").focus();
  } else {
    $("#loginalert").hide();
    if (!(newPass.toString() == renewPass.toString())) {
      $("#loginalert p").text(
        "Error: your new pass and retype new pass are incorrect."
      );
      $("#loginalert").show();
    } else {
      $("#loginalert").hide();
      const changePass = {
        username: localStorage.getItem("username"),
        curPass: oldPass,
        newpass: newPass,
      };
      $.ajax({
        type: "POST",
        data: JSON.stringify(changePass),
        contentType: "application/json",
        url: "http://localhost:3000/api/changePass", // chưa xong phần này tạo thêm file js để check
        success: function (data) {
          if (!data.success) {
            $("#loginalert p").text("Error: Current Password is incorrect.");
            $("#loginalert").show();
            $("[name='oldPass']").focus();
          } else {
            window.location.href = "/";
          }
        },
      });
    }
  }
}

$(document).ready(function () {
  $("#sb-changepass").addClass("active");
  $("#oldPass").focus();

  $("#change").click(checkAndChange);

  $("[name='oldPass']").keypress(function (e) {
    if (e.which == 13) {
      $(this).focusout();
      $("#change").click();
    }
  });

  $("[name='newPass']").keypress(function (e) {
    if (e.which == 13) {
      $(this).focusout();
      $("#change").click();
    }
  });

  $("[name='reNewPass']").keypress(function (e) {
    if (e.which == 13) {
      $(this).focusout();
      $("#change").click();
    }
  });
});
