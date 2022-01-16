$(window).scroll(function(){
    console.log($(this).scrollTop())
    if ($(this).scrollTop() > 100) {
       $('header nav').addClass('nav_box_shadow');
    } else {
       $('header nav').removeClass('nav_box_shadow');
    }
});
;