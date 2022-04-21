$(document).ready(function () {
  // var data = {mai: true};
  // $.ajax({
  //     type: 'POST',
  //     data: JSON.stringify(data),
  //     contentType: 'application/json',
  //     url: 'http://localhost:3000/api/addUser',
  //     success: function(data) {
  //         console.log('success');
  //         console.log(JSON.stringify(data));
  //     }
  // });

  console.log("runnnn");
  $(".btn-test").click(function () {
    console.log("signup test");
  });

  $("[name='username']").focus();
  $("[name='birthday']").attr("max", new Date().toISOString().substr(0, 10));

  $("[name='username']").popover({
    trigger: "focus",
    content: "",
    placement: "top",
  });
  $("[name='username']").keyup(function () {
    const username = $(this).val();
    if (username.length > 30) {
      $(this).attr("data-content", "Must have at most 30 characters");
      $(this).popover("show");
      $("#username").addClass("has-error");
      $("#username .glyphicon-remove").show();
      $("#username").removeClass("has-success");
      $("#username .glyphicon-ok").hide();
    } else if (!/^[0-9a-zA-Z_]+$/.test(username)) {
      $(this).attr(
        "data-content",
        "Please use only letters, numbers and underscore"
      );
      $(this).popover("show");
      $("#username").addClass("has-error");
      $("#username .glyphicon-remove").show();
      $("#username").removeClass("has-success");
      $("#username .glyphicon-ok").hide();
    } else {
      $(this).popover("hide");
      $("#username").removeClass("has-error");
      $("#username .glyphicon-remove").hide();
    }
  });

  $("[name='username']").focusout(function () {
    $(this).popover("hide");
    const username = $(this).val();
    if (username.trim() == "") {
      $(this).attr("data-content", "You can't leave this empty.");
      $("#username").addClass("has-error");
      $("#username .glyphicon-remove").show();
      $("#username").removeClass("has-success");
      $("#username .glyphicon-ok").hide();
    } else if (username.length < 6) {
      $(this).attr("data-content", "Must be at least 6 characters");
      $("#username").addClass("has-error");
      $("#username .glyphicon-remove").show();
    } else if (!$("#username").hasClass("has-error")) {
      $.get(window.HOST + "/api/user/checkUsername/" + username).then(function (
        data,
        status
      ) {
        if (data && data.count) {
          if (data.count !== "0") {
            $("[name='username']").attr(
              "data-content",
              "Username already exists. Try another."
            );
            $("#username").addClass("has-error");
            $("#username .glyphicon-remove").show();
            $("#username").removeClass("has-success");
            $("#username .glyphicon-ok").hide();
          } else {
            $("#username").removeClass("has-error");
            $("#username .glyphicon-remove").hide();
            $("#username").addClass("has-success");
            $("#username .glyphicon-ok").show();
          }
        }
      });
    }
  });

  $("[name='username']").focus(function () {
    if ($("#username").hasClass("has-error")) $(this).popover("show");
  });

  $("[name='password']").popover({
    trigger: "focus",
    content: "",
    placement: "top",
  });
  $("[name='password']").keyup(function () {
    const password = $(this).val();
    if (password.length > 30) {
      $(this).attr("data-content", "Must have at most 30 characters");
      $(this).popover("show");
      $("#password").addClass("has-error");
      $("#password .glyphicon-remove").show();
      $("#password").removeClass("has-success");
      $("#password .glyphicon-ok").hide();
    } else {
      $("[name='password']").popover("hide");
      $("#password").removeClass("has-error");
      $("#password .glyphicon-remove").hide();
    }
  });

  $("[name='password']").focusout(function () {
    $(this).popover("hide");
    const password = $(this).val();
    if (password.trim() == "") {
      $(this).attr("data-content", "You can't leave this empty.");
      $("#password").addClass("has-error");
      $("#password .glyphicon-remove").show();
      $("#password").removeClass("has-success");
      $("#password .glyphicon-ok").hide();
    } else if (password.length < 8) {
      $(this).attr("data-content", "Must be at least 8 characters");
      $("#password").addClass("has-error");
      $("#password .glyphicon-remove").show();
      $("#password").removeClass("has-success");
      $("#password .glyphicon-ok").hide();
    } else if (!$("#password").hasClass("has-error")) {
      $("#password").addClass("has-success");
      $("#password .glyphicon-ok").show();
    }
  });

  $("[name='password']").focus(function () {
    if ($("#password").hasClass("has-error")) $(this).popover("show");
  });

  $("[name='repassword']").popover({
    trigger: "focus",
    content: "",
    placement: "top",
  });
  $("[name='repassword']").focusout(function () {
    $(this).popover("hide");
    if ($(this).val() !== $("[name='password']").val()) {
      $(this).attr("data-content", "These passwords don't match");
      $("#repassword").addClass("has-error");
      $("#repassword .glyphicon-remove").show();
      $("#repassword").removeClass("has-success");
      $("#repassword .glyphicon-ok").hide();
    } else {
      $("#repassword").addClass("has-success");
      $("#repassword .glyphicon-ok").show();
    }
  });

  $("[name='repassword']").keyup(function () {
    $(this).popover("hide");
    if ($(this).val() === $("[name='password']").val()) {
      $("#repassword").removeClass("has-error");
      $("#repassword .glyphicon-remove").hide();
      $("#repassword").addClass("has-success");
      $("#repassword .glyphicon-ok").show();
    }
  });

  $("[name='repassword']").focus(function () {
    if ($("#repassword").hasClass("has-error")) $(this).popover("show");
  });

  $("[name='name']").popover({
    trigger: "focus",
    content: "",
    placement: "top",
  });
  $("[name='name']").keyup(function () {
    const name = $(this).val();
    if (name.length > 30) {
      $(this).attr("data-content", "Must have at most 30 characters");
      $(this).popover("show");
      $("#name").addClass("has-error");
      $("#name .glyphicon-remove").show();
      $("#name").removeClass("has-success");
      $("#name .glyphicon-ok").hide();
    } else if (
      !/^[a-zA-Z\sÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]*$/.test(
        name
      )
    ) {
      $(this).attr("data-content", "Please use only letters and whitespace");
      $(this).popover("show");
      $("#name").addClass("has-error");
      $("#name .glyphicon-remove").show();
      $("#name").removeClass("has-success");
      $("#name .glyphicon-ok").hide();
    } else {
      $("[name='name']").popover("hide");
      $("#name").removeClass("has-error");
      $("#name .glyphicon-remove").hide();
    }
  });

  $("[name='name']").focusout(function () {
    $(this).popover("hide");
    const name = $(this).val();
    if (name.trim() == "") {
      $(this).attr("data-content", "You can't leave this empty.");
      $("#name").addClass("has-error");
      $("#name .glyphicon-remove").show();
      $("#name").removeClass("has-success");
      $("#name .glyphicon-ok").hide();
    } else if (!$("#name").hasClass("has-error")) {
      $("#name").addClass("has-success");
      $("#name .glyphicon-ok").show();
    }
  });

  $("[name='name']").focus(function () {
    if ($("#name").hasClass("has-error")) $(this).popover("show");
  });

  $("[name='email']").popover({
    trigger: "focus",
    content: "",
    placement: "top",
  });
  $("[name='email']").keyup(function () {
    $("[name='email']").popover("hide");
    $("#email").removeClass("has-error");
    $("#email .glyphicon-remove").hide();
  });

  $("[name='email']").focusout(function () {
    $(this).popover("hide");
    const email = $(this).val();
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      $(this).attr("data-content", "Invalid email address");
      $("#email").addClass("has-error");
      $("#email .glyphicon-remove").show();
      $("#email").removeClass("has-success");
      $("#email .glyphicon-ok").hide();
    } else {
      $.get(window.HOST + "/api/user/checkEmail/" + email).then(
        (data, status) => {
          if (data && data.count) {
            if (data.count !== "0") {
              $("[name='email']").attr(
                "data-content",
                "Email already exists. Try another."
              );
              $("#email").addClass("has-error");
              $("#email .glyphicon-remove").show();
              $("#email").removeClass("has-success");
              $("#email .glyphicon-ok").hide();
            } else {
              $("#email").removeClass("has-error");
              $("#email .glyphicon-remove").hide();
              $("#email").addClass("has-success");
              $("#email .glyphicon-ok").show();
            }
          }
        }
      );
    }
  });

  $("[name='email']").focus(function () {
    if ($("#email").hasClass("has-error")) $(this).popover("show");
  });

  $("[name='phonenumber']").popover({
    trigger: "focus",
    content: "",
    placement: "top",
  });
  $("[name='phonenumber']").keyup(function () {
    const phonenumber = $(this).val();
    if (!/^[0-9]*$/.test(phonenumber)) {
      $(this).attr("data-content", "Please use only numbers");
      $(this).popover("show");
      $("#phonenumber").addClass("has-error");
      $("#phonenumber .glyphicon-remove").show();
      $("#phonenumber").removeClass("has-success");
      $("#phonenumber .glyphicon-ok").hide();
    } else {
      $("[name='phonenumber']").popover("hide");
      $("#phonenumber").removeClass("has-error");
      $("#phonenumber .glyphicon-remove").hide();
    }
  });

  $("[name='phonenumber']").focusout(function () {
    $(this).popover("hide");
    const phonenumber = $(this).val();
    if (
      !(
        phonenumber.length == 10 ||
        phonenumber.length == 11 ||
        phonenumber.trim() == ""
      )
    ) {
      $(this).attr("data-content", "Please use 10 or 11 numbers");
      $("#phonenumber").addClass("has-error");
      $("#phonenumber .glyphicon-remove").show();
      $("#phonenumber").removeClass("has-success");
      $("#phonenumber .glyphicon-ok").hide();
    } else if (!$("#phonenumber").hasClass("has-error")) {
      $("#phonenumber").addClass("has-success");
      $("#phonenumber .glyphicon-ok").show();
      // $("#phonenumber").removeClass("has-error");
      // $("#phonenumber .glyphicon-remove").hide();
    }
  });

  $("[name='phonenumber']").focus(function () {
    if ($("#phonenumber").hasClass("has-error")) $(this).popover("show");
  });

  $("[name='birthday']").popover({
    trigger: "focus",
    content: "",
    placement: "top",
  });
  $("[name='birthday']").keyup(function () {
    $("[name='birthday']").popover("hide");
    $("#birthday").removeClass("has-error");
    $("#birthday .glyphicon-remove").hide();
  });

  $("[name='birthday']").focusout(function () {
    $(this).popover("hide");
    const year = new Date($(this).val()).getFullYear();
    const curYear = new Date().getFullYear();
    if (year > curYear - 7 || year < curYear - 120) {
      $(this).attr("data-content", "Invalid birthday");
      $("#birthday").addClass("has-error");
      $("#birthday .glyphicon-remove").show();
      $("#birthday").removeClass("has-success");
      $("#birthday .glyphicon-ok").hide();
    } else {
      $("#birthday").addClass("has-success");
      $("#birthday .glyphicon-ok").show();
      $("#birthday").removeClass("has-error");
      $("#birthday .glyphicon-remove").hide();
    }
  });

  $("[name='birthday']").focus(function () {
    if ($("#birthday").hasClass("has-error")) $(this).popover("show");
  });

  $("#btn-signup").click(function () {
    if (
      $("[name='username']").val().trim() == "" ||
      $("[name='password']").val().trim() == "" ||
      $("[name='repassword']").val().trim() == "" ||
      $("[name='name']").val().trim() == "" ||
      $("[name='email']").val().trim() == ""
    ) {
      $("#signupalert p").text("Error: You must type fields having *.");
      $("#signupalert").show();
      if (
        $("[name='username']").val().trim() == "" &&
        !$("#username").hasClass("has-error")
      ) {
        $("#username").addClass("has-error");
        $("#username .glyphicon-remove").show();
        $("[name='username']").attr(
          "data-content",
          "You can't leave this empty."
        );
      }
      if (
        $("[name='password']").val().trim() == "" &&
        !$("#password").hasClass("has-error")
      ) {
        $("#password").addClass("has-error");
        $("#password .glyphicon-remove").show();
        $("[name='password']").attr(
          "data-content",
          "You can't leave this empty."
        );
      }
      if (
        $("[name='repassword']").val().trim() == "" &&
        !$("#repassword").hasClass("has-error")
      ) {
        $("#repassword").addClass("has-error");
        $("#repassword .glyphicon-remove").show();
        $("[name='repassword']").attr(
          "data-content",
          "You can't leave this empty."
        );
      }
      if (
        $("[name='name']").val().trim() == "" &&
        !$("#name").hasClass("has-error")
      ) {
        $("#name").addClass("has-error");
        $("#name .glyphicon-remove").show();
        $("[name='name']").attr("data-content", "You can't leave this empty.");
      }
      if (
        $("[name='email']").val().trim() == "" &&
        !$("#email").hasClass("has-error")
      ) {
        $("#email").addClass("has-error");
        $("#email .glyphicon-remove").show();
        $("[name='email']").attr("data-content", "You can't leave this empty.");
      }
    } else if (
      !(
        $("#username").hasClass("has-success") &&
        $("#password").hasClass("has-success") &&
        $("#repassword").hasClass("has-success") &&
        $("#name").hasClass("has-success") &&
        $("#email").hasClass("has-success") &&
        !$("#phonenumber").hasClass("has-error")
      )
    ) {
      $("#signupalert p").text("Error: You must retype fields being invalid.");
      $("#signupalert").show();
    } else {
      if ($(".checkbox input").prop("checked")) {
        $(".backdrop").show();
        const user = {
          username: $("[name='username']").val(),
          password: $("[name='password']").val(),
          name: $("[name='name']").val(),
          birthday: {
            birthday: $("[name='birthday']").val(),
            isPublic: false,
          },
          phoneNumber: {
            phoneNumber: $("[name='phonenumber']").val(),
            isPublic: false,
          },
          email: {
            email: $("[name='email']").val(),
            isPublic: false,
          },
        };

        $.ajax({
          type: "POST",
          data: JSON.stringify(user),
          contentType: "application/json",
          url: "/api/user/add",
          success: (data) => {
            $(".backdrop").show();
            if (data.success) {
              alert("Welcome! You have signed up successfully. Login now!");
              window.location.href = "/login";
            } else {
              alert("Error! Please try again.");
            }
          },
          error: (err) => {
            $(".backdrop").hide();
            alert(
              "Error! Please check your internet connection and try again."
            );
          },
        });
      } else {
        $("#signupalert p").text(
          "Do you agree the rules below? Please tick the checkbox!"
        );
        $("#signupalert").show();
      }
    }
  });

  $("[name='username']").keypress(function (e) {
    if (e.which == 13) {
      $(this).focusout();
      $("#btn-signup").click();
    }
  });
  $("[name='password']").keypress(function (e) {
    if (e.which == 13) {
      $(this).focusout();
      $("#btn-signup").click();
    }
  });
  $("[name='repassword']").keypress(function (e) {
    if (e.which == 13) {
      $(this).focusout();
      $("#btn-signup").click();
    }
  });
  $("[name='name']").keypress(function (e) {
    if (e.which == 13) {
      $(this).focusout();
      $("#btn-signup").click();
    }
  });
  $("[name='birthday']").keypress(function (e) {
    if (e.which == 13) {
      $(this).focusout();
      $("#btn-signup").click();
    }
  });
  $("[name='email']").keypress(function (e) {
    if (e.which == 13) {
      $(this).focusout();
      $("#btn-signup").click();
    }
  });
  $("[name='phonenumber']").keypress(function (e) {
    if (e.which == 13) {
      $(this).focusout();
      $("#btn-signup").click();
    }
  });
});
