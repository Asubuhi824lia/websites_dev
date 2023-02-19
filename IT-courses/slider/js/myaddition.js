
// align figure size
$(document).ready(function() {
    $(".mis-slider li img").css("max-width", function() {
        return `calc( ${$("li.mis-slide").css("height")} 
                    - ${$("li.mis-slide").css("padding-top")} 
                    - ${$("li.mis-slide").css("padding-bottom")} 
                    - ${$(".mis-slider li figcaption").css("height")} )`
    })
})