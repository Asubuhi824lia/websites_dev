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

console.log($("#name, #surname"))


$("#name, #surname").on('input', function() {
    const that = this;

    setTimeout(function() {
        const res = /[^а-яА-Я]/g.exec(that.value);
        // console.log(res);        

        if(res != null) {
            valid_alert("Используйте только кириллицу!")
            that.value = that.value.replace(res, '');
        }
    }, 0);
})


function valid_alert(text) {
    $('#validWarningModal .modal-body').text(text)
    $('#keyToDialogBtn').trigger('click')
}