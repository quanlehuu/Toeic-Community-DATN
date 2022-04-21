getTime = (date) => {
  const preDate = date.getDate() < 10 ? "0" : "";
  const preMonth = date.getMonth() + 1 < 10 ? "0" : "";
  return (
    preDate +
    date.getDate() +
    "/" +
    preMonth +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear()
  );
};

$(document).ready(function () {
  $("#sb-mypage").addClass("active");
  let name = $("#useridentification");
  if (name.length == 0) name = localStorage.getItem("username");
  else name = name.text().trim();
  let following = false;
  let id2 = "";
  const id1 = localStorage.getItem("id");
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
        const username = user.username;
        const phonenumber = user.phoneNumber.phoneNumber;
        const birthday = user.birthday.birthday;
        const email = user.email.email;
        const date = new Date(birthday);
        id2 = user._id;

        $(".pic").attr("src", user.img);
        $("#username").text(username);
        $("#fullname").text(name);
        $(".name-score .name").text(name);
        $(".score").text(point);
        $("#birthday").text(birthday !== "" ? getTime(date) : "Hidden");
        $("#phonenumber").text(phonenumber !== "" ? phonenumber : "Hidden");
        $("#email").text(email !== "" ? email : "Hidden");

        if (localStorage.getItem("username") !== username) {
          $.ajax({
            type: "GET",
            url: `http://localhost:3000/api/follow/checkFollow/${id1}/${id2}`,
            headers: {
              authorization: localStorage.getItem("access_token")
                ? "Bearer " + localStorage.getItem("access_token")
                : undefined,
            },
            success: (data) => {
              if (data.success) {
                following = data.following;

                if (!following)
                  $("#follow").html(
                    `<button type="button" class="btn btn-info">Follow me</button>`
                  );
                else
                  $("#follow").html(`
                                                <button type="button" class="btn btn-success">Followed</button>
                                                `);
              } else {
                console.log("Fail");
              }
            },
            error: (err) => {
              console.log(err);
            },
          });
        }
        $(".loader").show();
        $.ajax({
          type: "GET",
          url: "http://localhost:3000/api/post/getOfUser/" + user._id,
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
                  showPost(data.post[i]);
              }
            }
          },
        });
      } else {
        console.log("Errorrrrrrrrrr");
      }
    },
    error: (err) => {
      alert("Something went wrong! Try again!");
    },
  });

  $("#follow").click(() => {
    const data = {
      id1: id1,
      id2: id2,
    };
    if (!following) {
      $.ajax({
        type: "POST",
        url: "http://localhost:3000/api/follow/addFollow",
        data: JSON.stringify(data),
        contentType: "application/json",
        headers: {
          authorization: localStorage.getItem("access_token")
            ? "Bearer " + localStorage.getItem("access_token")
            : undefined,
        },
        success: (data) => {
          if (data.success) {
            following = !following;
            $("#follow").html(`
                                        <button type="button" class="btn btn-success">Followed</button>
                                        `);
          }
        },
      });

      $.ajax({
        type: "POST",
        url: "http://localhost:3000/api/notification",
        data: JSON.stringify({ followeeId: id2 }),
        contentType: "application/json",
        headers: {
          authorization: localStorage.getItem("access_token")
            ? "Bearer " + localStorage.getItem("access_token")
            : undefined,
        },
      });
    } else {
      $.ajax({
        type: "POST",
        url: "http://localhost:3000/api/follow/deleteFollow",
        data: JSON.stringify(data),
        contentType: "application/json",
        headers: {
          authorization: localStorage.getItem("access_token")
            ? "Bearer " + localStorage.getItem("access_token")
            : undefined,
        },
        success: (data) => {
          if (data.success) {
            following = !following;
            $("#follow").html(
              `<button type="button" class="btn btn-info">Follow me</button>`
            );
          }
        },
      });
    }
  });

  $(".change-avatar").on("click", () => {
    $("#changeAvatar").trigger("click");
  });
});
