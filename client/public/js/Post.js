$(document).ready(function () {
  // var errorCharacter = /[~`$%^&*+=\[\]{}\|]/
  $("#sb-post").addClass("active");
  // Question
  $("[name='Question']").popover({
    trigger: "focus",
    content: "",
    placement: "top",
  });
  $("[name='Question']").keyup(function () {
    // const question = $(this).val();
    // // if(!/^[0-9a-zA-Z_\s]+$/.test(question)){
    // if(question.search(errorCharacter) != -1){
    //     $(this).attr("data-content", "Please don't use special characters.");
    //     $(this).popover('show');
    //     $("#Question").addClass("has-error");
    //     $("#Question .glyphicon-remove").show();
    // }
    // else{
    $(this).popover("hide");
    $(this).removeAttr("data-content");
    $("#Question").removeClass("has-error");
    $("#Question .glyphicon-remove").hide();
  });

  $("[name='Question']").focusout(function () {
    if ($(this).val().trim() == "") {
      $(this).attr("data-content", "You can't leave this empty.");
      $("#Question").addClass("has-error");
      $("#Question .glyphicon-remove").show();
      $("#Question").removeClass("has-success");
      $("#Question .glyphicon-ok").hide();
    }
  });

  $("[name='Question']").focus(function () {
    if ($("#Question").hasClass("has-error")) $(this).popover("show");
  });

  $("[name='Question']").focus();

  // A
  $("[name='A']").popover({ trigger: "focus", content: "", placement: "top" });
  $("[name='A']").keyup(function () {
    $(this).popover("hide");
    $(this).removeAttr("data-content");
    $("#A").removeClass("has-error");
    $("#A .glyphicon-remove").hide();
  });

  $("[name='A']").focusout(function () {
    if ($(this).val().trim() == "") {
      $(this).attr("data-content", "You can't leave this empty.");
      $("#A").addClass("has-error");
      $("#A .glyphicon-remove").show();
      $("#A").removeClass("has-success");
      $("#A .glyphicon-ok").hide();
    }
  });

  $("[name='A']").focus(function () {
    if ($("#A").hasClass("has-error")) $(this).popover("show");
  });

  // B
  $("[name='B']").popover({ trigger: "focus", content: "", placement: "top" });
  $("[name='B']").keyup(function () {
    $(this).popover("hide");
    $(this).removeAttr("data-content");
    $("#B").removeClass("has-error");
    $("#B .glyphicon-remove").hide();
  });

  $("[name='B']").focusout(function () {
    if ($(this).val().trim() == "") {
      $(this).attr("data-content", "You can't leave this empty.");
      $("#B").addClass("has-error");
      $("#B .glyphicon-remove").show();
      $("#B").removeClass("has-success");
      $("#B .glyphicon-ok").hide();
    }
  });

  $("[name='B']").focus(function () {
    if ($("#B").hasClass("has-error")) $(this).popover("show");
  });

  // C
  $("[name='C']").popover({ trigger: "focus", content: "", placement: "top" });
  $("[name='C']").keyup(function () {
    $(this).popover("hide");
    $(this).removeAttr("data-content");
    $("#C").removeClass("has-error");
    $("#C .glyphicon-remove").hide();
  });

  $("[name='C']").focusout(function () {
    if ($(this).val().trim() == "") {
      $(this).attr("data-content", "You can't leave this empty.");
      $("#C").addClass("has-error");
      $("#C .glyphicon-remove").show();
      $("#C").removeClass("has-success");
      $("#C .glyphicon-ok").hide();
    }
  });

  $("[name='C']").focus(function () {
    if ($("#C").hasClass("has-error")) $(this).popover("show");
  });

  // D
  $("[name='D']").popover({ trigger: "focus", content: "", placement: "top" });
  $("[name='D']").keyup(function () {
    $(this).popover("hide");
    $(this).removeAttr("data-content");
    $("#D").removeClass("has-error");
    $("#D .glyphicon-remove").hide();
  });

  $("[name='D']").focusout(function () {
    if ($(this).val().trim() == "") {
      $(this).attr("data-content", "You can't leave this empty.");
      $("#D").addClass("has-error");
      $("#D .glyphicon-remove").show();
      $("#D").removeClass("has-success");
      $("#D .glyphicon-ok").hide();
    }
  });

  $("[name='D']").focus(function () {
    if ($("#D").hasClass("has-error")) $(this).popover("show");
  });

  // Explanation
  $("[name='Explanation']").popover({
    trigger: "focus",
    content: "",
    placement: "top",
  });
  $("[name='Explanation']").keyup(function () {
    $(this).popover("hide");
    $(this).removeAttr("data-content");
    $("#Explanation").removeClass("has-error");
    $("#Explanation .glyphicon-remove").hide();
  });

  $("[name='Explanation']").focusout(function () {
    if ($(this).val().trim() == "") {
      $(this).attr("data-content", "You can't leave this empty.");
      $("#Explanation").addClass("has-error");
      $("#Explanation .glyphicon-remove").show();
      $("#Explanation").removeClass("has-success");
      $("#Explanation .glyphicon-ok").hide();
    }
  });

  $("[name='Explanation']").focus(function () {
    if ($("#Question").hasClass("has-error")) $(this).popover("show");
  });

  // Tag
  // $("[name='Tag']").popover({trigger: 'focus', content: "" ,placement : 'top'});
  // $("[name='Tag']").keyup(function(){
  //     const tag = $(this).val();
  //     // if(!/^[0-9a-zA-Z_#\s]+$/.test(tag)){
  //     //     $(this).attr("data-content", "Please use only letters and underscore");
  //     //     $(this).popover('show');
  //     //     $("#Tag").addClass("has-error");
  //     //     $("#Tag .glyphicon-remove").show();
  //     // }
  //     // else{
  //     $(this).popover('hide');
  //     $(this).removeAttr("data-content");
  //     $("#Tag").removeClass("has-error");
  //     $("#Tag .glyphicon-remove").hide();

  // });

  // $("input[data-role=tagsinput]").focusout(function(){

  //     if($(this).value().trim() == ""){
  //         console.log("empty");
  //         $(this).attr("data-content", "You can't leave this empty.");
  //         $("#Tag").addClass("has-error");
  //         $("#Tag .glyphicon-remove").show();
  //         $("#Tag").removeClass("has-success");
  //         $("#Tag .glyphicon-ok").hide();
  //     }
  // });

  // $("input[data-role=tagsinput]").focus(function(){
  //     if($("#Tag").hasClass("has-error"))
  //     $(this).popover('show');
  // });

  $("#radio101").click(function () {
    $("[name='Explanation']").prop("disabled", "disabled");
    $("[name='solution']").prop("disabled", "disabled");
    remove();
  });

  $("#radio100").click(function () {
    $("[name='Explanation']").prop("disabled", false);
    $("[name='solution']").prop("disabled", false);
    remove();
  });

  function remove() {
    $("#Question").removeClass("has-error");
    $("#Question .glyphicon-remove").hide();

    $("#A").removeClass("has-error");
    $("#A .glyphicon-remove").hide();

    $("#B").removeClass("has-error");
    $("#B .glyphicon-remove").hide();

    $("#C").removeClass("has-error");
    $("#C .glyphicon-remove").hide();

    $("#D").removeClass("has-error");
    $("#D .glyphicon-remove").hide();

    $("#Explanation").removeClass("has-error");
    $("#Explanation .glyphicon-remove").hide();

    $("#Tag").removeClass("has-error");
    $("#Tag .glyphicon-remove").hide();
  }

  $("#submit").click(function () {
    if (
      (!$("#radio101").prop("checked") &&
        ($("[name='Question']").val().trim() == "" ||
          $("[name='A']").val().trim() == "" ||
          $("[name='B']").val().trim() == "" ||
          $("[name='C']").val().trim() == "" ||
          $("[name='D']").val().trim() == "" ||
          $("[name='Explanation']").val().trim() == "" ||
          $("[name='Tag']").val().trim() == "" ||
          $("input[data-role=tagsinput]").tagsinput("items").length == 0)) ||
      ($("#radio101").prop("checked") &&
        ($("[name='Question']").val().trim() == "" ||
          $("[name='A']").val().trim() == "" ||
          $("[name='B']").val().trim() == "" ||
          $("[name='C']").val().trim() == "" ||
          $("[name='D']").val().trim() == ""))
    ) {
      $("#signupalert p").text("Error: You must fill all fields");
      $("#signupalert").show();
      $(window).scrollTop(0);
    } else {
      $(".backdrop").show();
      const post = {
        time: new Date(),
        ask: $("#radio101").prop("checked"),
        question: $("[name='Question']").val(),
        optionA: $("[name='A']").val(),
        optionB: $("[name='B']").val(),
        optionC: $("[name='C']").val(),
        optionD: $("[name='D']").val(),
        solution: $("[name='solution']").val(),
        explanation: $("[name='Explanation']").val(),
        tag: $("input[data-role=tagsinput]").tagsinput("items"),
      };
      $.ajax({
        type: "POST",
        data: JSON.stringify({ post: post }),
        contentType: "application/json",
        url: "http://localhost:3000/api/post",
        headers: {
          authorization: localStorage.getItem("access_token")
            ? "Bearer " + localStorage.getItem("access_token")
            : undefined,
        },
        success: (data) => {
          $(".backdrop").hide();
          if (data && data.success) {
            alert("Thank you! Your post has been sent successfully.");
            window.location.href = "/post";
          } else alert("Error! Please try again.");
        },
        error: (error) => {
          $(".backdrop").hide();
          alert("Error! Please check your internet connection and try again.");
        },
      });
    }
  });
});
