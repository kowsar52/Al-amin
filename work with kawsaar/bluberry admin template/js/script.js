$('.dropdown_menu').on('click', function(){
    console.log($(this).next());
    $(this).next().slideToggle('fast')
    $(this).find('.arrow').toggleClass('rotate')
})
$('.profile').on('click', function(){
    $('.user_menu').fadeToggle('fast')
})


