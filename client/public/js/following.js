$(document).ready(function () {
  $("#sb-following").addClass("active");
  $("#content").html(
    `<div style="position: absolute; left: calc(50% - 32px);" >
            <span  class="lds-hourglass"></span>
        </div>
        `
  );
  $(".fa-trash-alt").click(() => {
    const id2 = $(this).attr("id");
    const data = {
      id1: localStorage.getItem("id"),
      id2: id2,
    };
    $.ajax({
      type: "POST",
      url: `${window.HOST}/api/follow/deleteFollow`,
      data: JSON.stringify(data),
      contentType: "application/json",
      headers: {
        authorization: localStorage.getItem("access_token")
          ? "Bearer " + localStorage.getItem("access_token")
          : undefined,
      },
      success: (data) => {
        if (data.success) {
          alert("Successfully");
        } else {
          alert("Successfully");
        }
      },
      error: (err) => {
        alert("Successfully");
      },
    });
  });

  $.ajax({
    type: "GET",
    url: `${window.HOST}/api/follow/` + localStorage.getItem("id"),
    headers: {
      authorization: localStorage.getItem("access_token")
        ? "Bearer " + localStorage.getItem("access_token")
        : undefined,
    },
    success: (data) => {
      if (data.success) {
        $("#content").html("");
        const user = data.user;

        if (user && !user.length) {
          $("#content").append(`
            <div class="not-found">
                <p>You don't follow any one</p>
            </div>
          `);
        }
        for (i = 0; i < user.length; i++) {
          $("#content").append(`
                    <div>
                        <div class="person">
                            <div class="pic">
                                <img src=${user[i].followee.img}>
                            </div>
                            <div class="info">
                                <a href='/user/${user[i].followee.username}'>${user[i].followee.name}</a>
                                <div>
                                    <span>
                                        <i class="fas fa-heart"></i> ${user[i].followee.point}</span>
                                    <span>
                                        <i id=${user[i].followee._id} class="fas fa-trash-alt"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    `);
        }
      }
    },
  });
});
