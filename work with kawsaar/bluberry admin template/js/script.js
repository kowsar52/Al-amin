$('.dropdown_menu').on('click', function(){
    console.log($(this).next());
    $(this).next().slideToggle('fast')
    $(this).find('.arrow').toggleClass('rotate')
})
$('.profile').on('click', function(){
    $('.user_menu').fadeToggle('fast')
})
$('.bar_icon').on('click', function(){
    $('body').toggleClass('hide_sidebar')
    $('.main_section').toggleClass('expand')
})
// $('.bar_icon').on('click', function(){
//     $('body').toggleClass('hide_sidebar')
// })


