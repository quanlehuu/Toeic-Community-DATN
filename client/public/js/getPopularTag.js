$(document).ready(function () {
  $(".popular-tag").html(
    `
        <div class="lds-hourglass"></div>
        `
  );
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/api/getPopularTag",
    headers: {
      authorization: localStorage.getItem("access_token")
        ? "Bearer " + localStorage.getItem("access_token")
        : undefined,
    },
    success: (data) => {
      console.log(data);
      if (data.success) {
        const tags = data.tags;
        $(".popular-tag").html(`<span>Popular tag</span>`);
        for (i = 0; i < tags.length; i++) {
          const $tag = $(`
                                        <a href="/search/?keyword=${tags[i].name}"> ${tags[i].name} </a>
                                    `);
          $(".popular-tag").append($tag);
        }
      } else {
        console.log("Fail");
      }
    },
    error: (err) => {
      console.log(err);
    },
  });
});
