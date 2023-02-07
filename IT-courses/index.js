let header_menu = document.getElementById("header-menu");
let menu_items = document.getElementsByTagName("li");

for(let item = 0; item < menu_items.length; item++) 
{
    menu_items[item].addEventListener('click', e => changeActive(e))
}

function changeActive(e) {
    document.getElementsByClassName("menu-item-active")[0].classList.remove("menu-item-active");
    e.srcElement.classList.add("menu-item-active")
}
