$(document).ready(function() {

// Post Course Info
    coursesInfo.forEach(element => {
        let slide = elementForHtml(`
            <li class="mis-slide">
                <a href="#" class="mis-container">
                    <figure>
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
        console.log( $(".mis-slider li p").css("height") )
        return `calc( ${$("li.mis-slide").css("height")} 
                    - ${$("li.mis-slide").css("padding-top")} 
                    - ${$("li.mis-slide").css("padding-bottom")} 
                    - ${$(".mis-slider li figcaption").css("height")}
                    - 2*${$(".mis-slider li p").css("height")} )`
    })
})
    