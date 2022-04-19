$(document).ready(function() {
    $('.list-user').html(
        `
        <div class="lds-hourglass"></div>
        `
    );
    $.ajax({
        type: 'GET',
        url: '/api/user/getTop',
        headers: {
            authorization: localStorage.getItem('access_token')? ("Bearer " +  localStorage.getItem('access_token')) : undefined
        },
        success: function(result) {
            if(result.success) {
                const user = result.user;
                $('.list-user').html(
                        `<div class='top-element'>
                            <div>#</div>
                            <div>Avatar</div>
                            <div>Username </div>
                        </div>`
                );
                for(i=0;i < user.length; i++) {
                    const $divUser = $(`
                                        <div class="top-element">
                                                <div class="order">${i+1}</div>
                                                <div>
                                                    <img src=${user[i].img} alt="avt">
                                                </div>
                                                <div>
                                                    <a href=${"/user=" + user[i].username}>${user[i].username}  </a>
                                                    <h6><i class="fas fa-heart"></i> ${user[i].point}</h6>
                                                </div>
                                        </div>
                                    `);
                    $('.list-user').append($divUser);
                }
                
   
            }
            else {
               alert("Something wrong with TOP USER! Reload again!");
            }
        },
        error: (err) => {
            alert("Something wrong with TOP USER! Reload again!");
        }
    });
});