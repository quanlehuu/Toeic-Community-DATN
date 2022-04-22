const getTime = (date) => {
  const preDate = date.getDate() < 10 ? "0" : "";
  const preMonth = date.getMonth() + 1 < 10 ? "0" : "";
  const preMin = date.getMinutes() < 10 ? "0" : "";
  return (
    date.getHours() +
    ":" +
    preMin +
    date.getMinutes() +
    " " +
    preDate +
    date.getDate() +
    "/" +
    preMonth +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear()
  );
};

const changeToGreen = (element) => {
  $(element).css("color", "#66FF00");
  $(element).hover(
    () => {
      $(element).css("color", "black");
    },
    () => {
      $(element).css("color", "#66FF00");
    }
  );
};

const changeToBlack = (element) => {
  $(element).css("color", "black");
  $(element).hover(
    () => {
      $(element).css("color", "#66FF00");
    },
    () => {
      $(element).css("color", "black");
    }
  );
};

const votePost = (id, voteClass1, voteClass2, isVoteUp) => {
  $("#" + id + voteClass1).click(() => {
    if ($("#" + id + voteClass1).css("color") === "rgb(102, 255, 0)") {
      changeToGreen("#" + id + voteClass1);
      if ($("#" + id + voteClass2).css("color") === "rgb(102, 255, 0)") {
        changeToBlack("#" + id + voteClass2);
        $.ajax({
          type: "PUT",
          data: JSON.stringify({ post: id, isVoteUp: isVoteUp }),
          contentType: "application/json",
          url: window.HOST + "/api/votePost",
          headers: {
            authorization: localStorage.getItem("access_token")
              ? "Bearer " + localStorage.getItem("access_token")
              : undefined,
          },
        });
      } else {
        $.ajax({
          type: "POST",
          data: JSON.stringify({ post: id, isVoteUp: isVoteUp }),
          contentType: "application/json",
          url: window.HOST + "/api/votePost",
          headers: {
            authorization: localStorage.getItem("access_token")
              ? "Bearer " + localStorage.getItem("access_token")
              : undefined,
          },
        });
      }
    } else {
      changeToBlack("#" + id + voteClass1);
      $.ajax({
        type: "DELETE",
        data: JSON.stringify({ post: id, isVoteUp: isVoteUp }),
        contentType: "application/json",
        url: window.HOST + "/api/votePost",
        headers: {
          authorization: localStorage.getItem("access_token")
            ? "Bearer " + localStorage.getItem("access_token")
            : undefined,
        },
      });
    }
  });
};

const voteComment = (id, voteClass1, voteClass2, isVoteUp) => {
  $("#" + id + voteClass1).click(() => {
    if ($("#" + id + voteClass1).css("color") === "rgb(102, 255, 0)") {
      changeToGreen("#" + id + voteClass1);
      if ($("#" + id + voteClass2).css("color") === "rgb(102, 255, 0)") {
        changeToBlack("#" + id + voteClass2);
        $.ajax({
          type: "PUT",
          data: JSON.stringify({ comment: id, isVoteUp: isVoteUp }),
          contentType: "application/json",
          url: window.HOST + "/api/voteComment",
          headers: {
            authorization: localStorage.getItem("access_token")
              ? "Bearer " + localStorage.getItem("access_token")
              : undefined,
          },
        });
      } else {
        $.ajax({
          type: "POST",
          data: JSON.stringify({ comment: id, isVoteUp: isVoteUp }),
          contentType: "application/json",
          url: window.HOST + "/api/voteComment",
          headers: {
            authorization: localStorage.getItem("access_token")
              ? "Bearer " + localStorage.getItem("access_token")
              : undefined,
          },
        });
      }
    } else {
      changeToBlack("#" + id + voteClass1);
      $.ajax({
        type: "DELETE",
        data: JSON.stringify({ comment: id, isVoteUp: isVoteUp }),
        contentType: "application/json",
        url: window.HOST + "/api/voteComment",
        headers: {
          authorization: localStorage.getItem("access_token")
            ? "Bearer " + localStorage.getItem("access_token")
            : undefined,
        },
      });
    }
  });
};

const showPost = (post) => {
  let aPost = document.createElement("div");
  let id = post._id;
  aPost.id = id;

  $("#posts").append(aPost);

  $("#postid .post").clone().appendTo(aPost);

  $("#" + id + " .avt").attr("src", post.ofUser.img);
  $("#" + id + " .user-post a").attr("href", "/user/" + post.ofUser.username);
  $("#" + id + " .user-post a").text(post.ofUser.name);
  $("#" + id + " .user-post i").text(getTime(new Date(post.time)));
  $("#" + id + " .question").text(post.question);
  $("#" + id + " .optionA").text("A. " + post.optionA);
  $("#" + id + " .optionB").text("B. " + post.optionB);
  $("#" + id + " .optionC").text("C. " + post.optionC);
  $("#" + id + " .optionD").text("D. " + post.optionD);
  $("#" + id + " .solution b").text(post.solution);
  $("#" + id + " .solution i").text(post.explanation);
  for (j = 0; j < post.tag.length; j++)
    $("#" + id + " .tag").append("<a>" + post.tag[j] + "</a> ");

  $("#" + id + " .cmt").attr("data-target", "#modal" + id);
  $("#" + id + " .modal").attr("id", "modal" + id);

  $("#" + id + " .tag a").click(function () {
    window.location.href = "/search/?keyword=" + $(this).text();
  });

  $("#" + id + " .show-solution").click(function () {
    $("#" + id + " .solution").slideToggle();
    if ($(this).text() == "Show Solution") {
      $(this).text("Hide Solution");
    } else {
      $(this).text("Show Solution");
    }
  });

  if (post.ask) {
    $("#" + id + " .show-solution").hide();
    $("#" + id + " .tag").hide();
  }

  $("#" + id + " .delete").click(() => {
    $(".backdrop").show();
    $.ajax({
      type: "DELETE",
      contentType: "application/json",
      url: window.HOST + "/api/post/delete/" + id,
      headers: {
        authorization: localStorage.getItem("access_token")
          ? "Bearer " + localStorage.getItem("access_token")
          : undefined,
      },
      success: (data) => {
        if (data && data.success) {
          $("#" + id).hide();
          $(".backdrop").hide();
        }
      },
      error: (err) => {
        alert("Error! Please try again.");
      },
    });
  });

  $("#" + id + " .enter-comment").click(() => {
    const comment = $("#" + id + " input").val();
    $("#" + id + " input").val("");
    if (comment.trim() !== "") {
      $("#" + id + " .show-solution").attr("disabled", false);
      // $("#" + id + " .comment>b>a").text(localStorage.getItem('name'));
      // $("#" + id + " .comment a").attr("href","/user="+ localStorage.getItem('username'));
      $("#" + id + " .comment span").text(comment);
      $("#" + id + " .comment i").text(getTime(new Date()));
      $("#" + id + " .comment").show();

      $.ajax({
        type: "POST",
        data: JSON.stringify({ ofPost: id, content: comment }),
        contentType: "application/json",
        url: window.HOST + "/api/comment",
        headers: {
          authorization: localStorage.getItem("access_token")
            ? "Bearer " + localStorage.getItem("access_token")
            : undefined,
        },
      });
    }
  });

  $("#" + id + " input").keypress((e) => {
    if (e.which === 13) {
      $("#" + id + " .enter-comment").click();
    }
  });

  // Kiểm tra vote bài đăng đó chưa
  $.ajax({
    type: "GET",
    contentType: "application/json",
    url: window.HOST + "/api/votePost/" + id,
    headers: {
      authorization: localStorage.getItem("access_token")
        ? "Bearer " + localStorage.getItem("access_token")
        : undefined,
    },
    success: (data) => {
      if (data.voted === 1) {
        changeToGreen("#" + id + " .vote-up");
      } else if (data.voted === -1) {
        changeToGreen("#" + id + " .vote-down");
      }
    },
  });

  // Kiểm tra save bài đăng đó chưa
  $.ajax({
    type: "GET",
    contentType: "application/json",
    url: window.HOST + "/api/save/" + id,
    headers: {
      authorization: localStorage.getItem("access_token")
        ? "Bearer " + localStorage.getItem("access_token")
        : undefined,
    },
    success: (data) => {
      if (data.saved) {
        changeToGreen("#" + id + " .save");
      }
    },
  });

  votePost(id, " .vote-up", " .vote-down", true);
  votePost(id, " .vote-down", " .vote-up", false);

  $("#" + id + " .save").click(() => {
    if ($("#" + id + " .save").css("color") === "rgb(102, 255, 0)") {
      changeToGreen("#" + id + " .save");
      $.ajax({
        type: "POST",
        data: JSON.stringify({ post: id }),
        contentType: "application/json",
        url: window.HOST + "/api/save",
        headers: {
          authorization: localStorage.getItem("access_token")
            ? "Bearer " + localStorage.getItem("access_token")
            : undefined,
        },
      });
    } else {
      changeToBlack("#" + id + " .save");
      $.ajax({
        type: "DELETE",
        data: JSON.stringify({ post: id }),
        contentType: "application/json",
        url: window.HOST + "/api/save",
        headers: {
          authorization: localStorage.getItem("access_token")
            ? "Bearer " + localStorage.getItem("access_token")
            : undefined,
        },
      });
    }
  });

  $("#" + id + " .cmt").click(() => {
    $(".modal-body .lds-ring").show();
    $.ajax({
      type: "GET",
      contentType: "application/json",
      url: window.HOST + "/api/comment/get/" + id,
      headers: {
        authorization: localStorage.getItem("access_token")
          ? "Bearer " + localStorage.getItem("access_token")
          : undefined,
      },
      success: (data) => {
        if (data.comment) {
          $(".modal-body .lds-ring").hide();
          if (data.comment.length == 0) {
            $("#" + id + " .modal-body").append(
              "<div style='text-align: center;'>Don't have any comments!</div>"
            );
          } else {
            const comment = data.comment;
            let i;
            for (i = 0; i < comment.length; i++) {
              let aComment = document.createElement("div");
              let commentId = comment[i]._id;
              aComment.id = commentId;
              $("#" + id + " .modal-body").append(aComment);
              $("#commentId .aComment").clone().appendTo(aComment);
              $("#" + commentId + " img").attr("src", comment[i].ofUser.img);
              $("#" + commentId + " a").text(comment[i].ofUser.name);
              $("#" + commentId + " a").attr(
                "href",
                "/user/" + comment[i].ofUser.username
              );
              $("#" + commentId + " .user-cmt i").text(
                getTime(new Date(comment[i].time))
              );
              $("#" + commentId + " span").text(comment[i].content);
              $.ajax({
                type: "GET",
                contentType: "application/json",
                url: window.HOST + "/api/voteComment/" + commentId,
                headers: {
                  authorization: localStorage.getItem("access_token")
                    ? "Bearer " + localStorage.getItem("access_token")
                    : undefined,
                },
                success: (data) => {
                  if (data.voted === 1) {
                    changeToGreen("#" + commentId + " .vote-cmt-up");
                  } else if (data.voted === -1) {
                    changeToGreen("#" + commentId + " .vote-cmt-down");
                  }
                },
              });
              voteComment(commentId, " .vote-cmt-up", " .vote-cmt-down", true);
              voteComment(commentId, " .vote-cmt-down", " .vote-cmt-up", false);
            }
          }
        }
      },
    });
  });

  $("#" + id + " .modal").on("hide.bs.modal", () => {
    $("#" + id + " .modal .modal-body>div").remove();
  });

  if (post.ofCurUser) {
    $("#" + id + " .more").show();
  } else {
    $.ajax({
      type: "GET",
      contentType: "application/json",
      url: window.HOST + "/api/comment/check/" + id,
      headers: {
        authorization: localStorage.getItem("access_token")
          ? "Bearer " + localStorage.getItem("access_token")
          : undefined,
      },
      success: (data) => {
        if (!data.commented) {
          $("#" + id + " .show-solution").attr("disabled", true);
        }
      },
    });
  }
};
