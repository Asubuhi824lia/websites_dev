$(document).ready(function() {

// Post Course Info
    let id = 0;
    coursesInfo.forEach(element => {
        let slide = elementForHtml(`
            <li class="mis-slide">
                <a href="#" onclick="return false" class="mis-container">
                    <figure id="${id++}">
                        <img src="${element.favicon}" alt="Logo">
                        <figcaption class="fw-bold">${element.platform}</figcaption>
                        <p>${element.title}</p>
                    </figure>
                </a>
            </li>
        `)

        $("#wrapper figure .mis-stage ol.mis-slider").append(slide)
        // console.log(slide)
    });

// align figure size
    $(".mis-slider li img").css("max-width", function() {
        return `calc( ${$("li.mis-slide").css("height")} 
                    - ${$("li.mis-slide").css("padding-top")} 
                    - ${$("li.mis-slide").css("padding-bottom")} 
                    - ${$(".mis-slider li figcaption").css("height")}
                    - 2*${$(".mis-slider li p").css("height")} )`
    })
})
    

$(document).ready(function() {
    $("#coursesBrief .mis-container").click( switchInfo )
})

function switchInfo() {
    const figure = elementForHtml( $(this).html() )
    const platform = coursesInfo[figure.id].platform.trim().split(' ').join('')
    console.log(platform)

    showTablist(platform)
}