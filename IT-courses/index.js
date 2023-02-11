let header_menu = document.getElementById("header-menu");
let menu_items = document.getElementsByClassName("nav-item");

for(let item = 0; item < menu_items.length; item++) 
{
    menu_items[item].addEventListener('click', e => changeActive(e))
}

function changeActive(e) {
    document.getElementsByClassName("menu-item-active")[0].classList.remove("menu-item-active");

    // make underline only to nav-item elem
    if(e.target.parentNode == document.getElementsByClassName("navbar-nav")[0]) {
        e.target.classList.add("menu-item-active")
    } else {
        e.target.parentNode.classList.add("menu-item-active")
    }
} 

$("#learnCourseBtn").css("height", function() {
    return $("#name").css("height");
});

console.log(coursesInfo.courses)