getDateTime = (date) => {
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

getNoti = (num) => {
  $(".notification .loading").show();
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/api/notification/" + num,
    headers: {
      authorization: localStorage.getItem("access_token")
        ? "Bearer " + localStorage.getItem("access_token")
        : undefined,
    },
    success: (data) => {
      if (data.noti && data.noti.length !== 0) {
        const notis = data.noti;
        let i;
        for (i = 0; i < notis.length; i++) {
          let aNoti = document.createElement("div");
          let noti = notis[i];
          let id = noti._id;
          aNoti.id = id;
          if (!noti.seen) aNoti.className = "not-read";
          $(".notis").append(aNoti);

          $("#notiId>a").clone().appendTo(aNoti);
          $("#notiId>i").clone().appendTo(aNoti);

          if (noti.posted) {
            $("#" + id + " a").attr("href", "/user/" + noti.followee.username);
            $("#" + id + " img").attr("src", noti.followee.img);
            $("#" + id + " .notification-detail span").text(
              noti.follower.username + " posted"
            );
            $("#" + id + " .notification-detail i").text(
              getDateTime(new Date(noti.time))
            );
          } else {
            $("#" + id + " a").attr("href", "/user/" + noti.follower.username);
            $("#" + id + " img").attr("src", noti.follower.img);
            $("#" + id + " .notification-detail span").text(
              noti.follower.username + " followed you"
            );
            $("#" + id + " .notification-detail i").text(
              getDateTime(new Date(noti.time))
            );
          }

          $("#" + id + " a").click(() => {
            if ($("#" + id).hasClass("not-read")) {
              $.ajax({
                type: "PUT",
                data: JSON.stringify({ seen: true }),
                contentType: "application/json",
                url: "http://localhost:3000/api/notification/" + id,
                headers: {
                  authorization: localStorage.getItem("access_token")
                    ? "Bearer " + localStorage.getItem("access_token")
                    : undefined,
                },
              });
            }
          });

          $("#" + id + ">i").click(() => {
            if ($("#" + id).hasClass("not-read"))
              $("#" + id).removeClass("not-read");
            else $("#" + id).addClass("not-read");
            $.ajax({
              type: "PUT",
              data: JSON.stringify({ seen: !noti.seen }),
              contentType: "application/json",
              url: "http://localhost:3000/api/notification/" + id,
              headers: {
                authorization: localStorage.getItem("access_token")
                  ? "Bearer " + localStorage.getItem("access_token")
                  : undefined,
              },
            });
          });
        }
      } else {
        if (num == 0)
          $(".notis").append(
            "<p style='font-size:16px; text-align:center; color: black;'>Don't have any notifications!</p>"
          );
        else $(".notis").append("<p></p>");
      }
      $(".notification .loading").hide();
    },
  });
};

$(document).ready(() => {
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/api/notification",
    headers: {
      authorization: localStorage.getItem("access_token")
        ? "Bearer " + localStorage.getItem("access_token")
        : undefined,
    },
    success: (data) => {
      if (data && data.count) {
        $(".notification>span").text(" " + data.count);
        $(".notification>span").show();
      }
    },
  });

  $(".notification .fa-bell").on("click", function () {
    const sideBar = $(".notification-view");
    sideBar.toggleClass("active");

    if (sideBar.hasClass("active")) {
      let num = 0;
      getNoti(num);

      $(".notification-view").scroll(function () {
        if (
          $(this).scrollTop() ==
          $(" .notis").height() - $(this).height() + 40
        ) {
          num = num + 1;
          getNoti(num);
        }
      });
    } else {
      $(".notification-view .notis>div").remove();
      $(".notification-view .notis>p").remove();
    }
  });

  $(".notification .notis>a").click(() => {
    $(".notification-view .notis>div").removeClass("not-read");

    $.ajax({
      type: "PUT",
      data: JSON.stringify({ seen: true }),
      contentType: "application/json",
      url: "http://localhost:3000/api/notification",
      headers: {
        authorization: localStorage.getItem("access_token")
          ? "Bearer " + localStorage.getItem("access_token")
          : undefined,
      },
    });
  });

  // $('.notification-view').hide(function () {
  //     console.log("dao");
  // });
});
