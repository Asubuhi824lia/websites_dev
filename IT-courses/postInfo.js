$(document).ready(function() {

    // Заполнить tabs
    fillTablist()
    
    // Заполнить select вариантами курсов
    coursesInfo.forEach(element => {
        let option = $("<option></option>")[0]
        option.value = element.platform
        option.label = element.title

        $("#selectCourse").append(option)
    });

    // Заполнить подвал через <template>     
    coursesInfo.forEach(element => {
        let rowElem = elementForHtml(`
            <tr>
                <td class="border-bottom-0 col-md-6"></td>
                <td class="border-bottom-0 col-md-6">
                    <a href="" class="text-decoration-none text-dark"></a>
                </td>
            </tr>
        `)

        rowElem.firstElementChild.innerText = element.platform
        rowElem.lastElementChild.id = element.platform
        rowElem.lastElementChild.firstElementChild.innerText = element.title
        rowElem.lastElementChild.firstElementChild.href = element.link

        $("footer tbody").append(rowElem)
        // console.log(rowElem)
    });
});

function elementForHtml(html) 
 {
    const template = document.createElement("template")
    
    template.innerHTML = html.trim()

    return template.content.firstElementChild
};


$("#mainNav").click(fillTablist)

const findChosenPlatform = function() {
    // get platform name without <br> effect
    return $(".menu-item-active")[0].innerText.trim().split('\n').join('') 
}

function fillTablist() {
    const platform = findChosenPlatform()
    console.log(platform)

    showTablist(platform)
}

function showTablist(platform) {

    // find course
    let tabs = Array()
    coursesInfo.forEach(element => {
        if(element.platform.split(' ').join('').toLowerCase() == platform.toLowerCase()) {

            for(let tablist in element.tabs) {
                tabs[tabs.length] = element.tabs[tablist]
            }

            console.log(tabs)
        }
    });

    // clean html
    $("#courseInfoTabs").html("")

    // create new header
    $("#courseInfoTabs").append( elementForHtml('<ul class="tabs__caption"></ul>') )

    // post tabs title
    let isfirst = true
    tabs.forEach(element => {
        console.log(element)

        let caption = elementForHtml(`
            <li class="${isfirst?'active':''}">${element.title}</li>
        `)
        isfirst = false

        $("#courseInfoTabs .tabs__caption").append(caption)
    });
}