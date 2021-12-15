// function moreMenu() {
//     document.getElementById("popup_menus").style.display = "block";
// }
let arrow = document.querySelectorAll(".arrow");
for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement;
        console.log(arrowParent);
        arrowParent.classList.toggle("show");
    });

}

let sidebar = document.querySelector(".left_sidebar");
console.log(sidebar);
let  toggleBtn  = document.querySelector(".toggle_bar");
console.log(toggleBtn);
toggleBtn.addEventListener("click", ()=>{
    console.log("clik");
    sidebar.classList.toggle("close");
    // let r =document.querySelector(".right_side_body");
    
})