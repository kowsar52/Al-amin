// function moreMenu() {
//     document.getElementById("popup_menus").style.display = "block";
// }
// let arrow = document.querySelectorAll(".arrow");
// for (let i = 0; i < arrow.length; i++) {
//     arrow[i].addEventListener("click", (e) => {
//         let arrowParent = e.target.parentElement.parentElement;
//         console.log(arrowParent);
//         arrowParent.classList.toggle("show");
//     });

// }

let sidebar = document.querySelector(".left_sidebar");
let  toggleBtn  = document.querySelector(".toggle_bar");
toggleBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
})

$('.dropdown_menu').on('click', function(){
    $(this).next().slideToggle('fast')
})
$('.user').on('click', function(){
    $(this).next().fadeToggle("fast");
})