$(document).ready(function() {

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
    // console.log(platform)

    showTablist(platform)
}

function showTablist(platform) {

    // find course
    let tabs = Array()
    coursesInfo.forEach(element => {
        if(element.platform.split(' ').join('').toLowerCase() == platform.toLowerCase()) 
        {
            for(let tablist in element.tabs) {
                tabs[tabs.length] = element.tabs[tablist]
            };
        }
    });

    // clean html
    $(".tabs__caption").html("")
    $(".tabs__content").html("")    

    // post tabs title
    let isfirst = true
    let tab_n = 0
    tabs.forEach(element => {
        // console.log(element)

        putCaption(element.title, isfirst)
        putDescription(element.description, tab_n++)

        isfirst = false
    });
}

function putCaption(title, isfirst) {
    let caption = elementForHtml(`
            <li class="${isfirst?'active':''}"><p>${title}</p></li>
        `)
    $("#courseInfoTabs .tabs__caption").append(caption) 
}

function putDescription(description, num) {
    let content = elementForHtml(`
            <p>${description}</p>
        `)
    $(`#courseInfoTabs .tabs__content`)[num].append(content)
    console.log( $(`#courseInfoTabs .tabs__content`)[num] )
}