let header_menu = document.getElementById("header-menu");
let menu_items = document.getElementsByTagName("li");

for(let item = 0; item < menu_items.length; item++) 
{
    menu_items[item].addEventListener('click', e => changeActive(e));
    console.log(menu_items[item]);
};
// console.log(menu_items);

function changeActive(e) {
    document.getElementsByClassName("menu-item-active")[0].classList.remove("menu-item-active");
    console.log(e);
    e.srcElement.classList.add("menu-item-active");
}
