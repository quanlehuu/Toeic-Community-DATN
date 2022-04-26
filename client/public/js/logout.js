$(document).ready(function () {
  $("#sb-logout").click(() => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("username");
    window.location.href = "/";
  });
});
