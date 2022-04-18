$(document).ready(function() {
    $('#sb-logout').click(()=>{
        localStorage.setItem('access_token', null);
        window.location.href = '/login';
    })
});