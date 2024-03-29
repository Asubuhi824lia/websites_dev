// Main Menu
let header_menu = document.getElementById("header-menu");
let menu_items = document.getElementsByClassName("nav-item");

for(let item = 0; item < menu_items.length; item++) 
{
    menu_items[item].addEventListener('click', e => {changeActive(e); flipSlider(item) })
}

function flipSlider(item) {
    let mis_nav_list = document.getElementsByClassName("mis-nav-list")
    mis_nav_list[0].childNodes[item].click()
}

function changeActive(e) {
    document.getElementsByClassName("menu-item-active")[0].classList.remove("menu-item-active");

    // make underline only to nav-item elem
    if(e.target.parentNode == document.getElementsByClassName("navbar-nav")[0]) {
        e.target.classList.add("menu-item-active")
    } else {
        e.target.parentNode.classList.add("menu-item-active")
    }
};

    /* Fixed Top NavBar */
$(function() {
    const mainNav = $("#mainNav");
    $(window).scroll(function() {
        if( $(window).scrollTop() <= 100 ) { 
            mainNav.removeClass('fixed-top navbar-scroll fw-normal')
        } else {
            mainNav.addClass('fixed-top navbar-scroll fw-normal')
        }
    })
})


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

// Преобразуем в формат данных форм
function serializeForm(formNode) {
    const { elements } = formNode

    const data = Array.from(elements)
                        .filter((item) => !!item.name)
                        .map((element) => {
                            const { name, value } = element
                            return { name, value }
                        })

    return data
}


function dataProcessing(form_data) {

    let data = new Map()

    form_data.forEach(element => {
        data.set(element.name, element.value)
    });

    let ind;
    coursesInfo.forEach(element => {
        if(element.platform == data.get("course"))
            ind = element
    });

    const answer = `<p>
                        <span style="color: blue;">${data.get("surname")} ${data.get("name")}</span>! 
                        <br>
                        Поскольку Вас заинтересовал курс "<span class="text-danger-emphasis">${ind.title}</span>"
                        от "<span class="text-success-emphasis">${data.get("course")}</span>", 
                        предлагаем Вам перейти по следующей ссылке, чтобы узнать больше:\n
                        <a href="${ind.link}">${ind.link}</a>
                    </p>`
    
    valid_alert(answer)
    // const answer = data
}

function handleFormSubmit(event) {
    // Просим форму не отправлять данные самостоятельно
    event.preventDefault()
    // valid_alert('Отправка!')
    const data = serializeForm( $("#knowMore")[0] )
    dataProcessing(data)

}
  
$("#knowMore").on('submit', handleFormSubmit)


// Modal 
function valid_alert(text, title = '') {
    $('#validWarningModal .modal-header').text(title)
    $('#validWarningModal .modal-body').html(text)
    $('#keyToModalBtn').trigger('click')
}