// Main Menu
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


// Form
$("#learnCourseBtn").css("height", function() {
    return $("#name").css("height");
})

$("#name, #surname").on('input', function() {
    const res = /[^а-яА-Я]/g.exec(this.value);
    if(res != null) {
        valid_alert("Используйте только кириллицу!")
        this.value = this.value.replace(res, '');
    }
});

$('learnCourseBtn').click(() => {
    $('#keyToModalBtn').trigger('click')
});

function handleFormSubmit(event) {
    // Просим форму не отправлять данные самостоятельно
    event.preventDefault()
    valid_alert('Отправка!')
}
  
$("#knowMore").on('submit', handleFormSubmit)


// Modal 
function valid_alert(text, title = '') {
    $('#validWarningModal .modal-header').text(title)
    $('#validWarningModal .modal-body').text(text)
    $('#keyToModalBtn').trigger('click')
}