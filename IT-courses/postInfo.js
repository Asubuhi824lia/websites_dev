$(document).ready(function() {

    // Заполнить tabs
    let chose_menu_item
    console.log(  )
    coursesInfo.forEach(element => {
        
        // get array of tabs
        let tabs = Array()
        for(let tablist in element.tabs) {
            tabs[tabs.length] = element.tabs[tablist]
        }
        console.log(tabs)

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

        // post tabs content
    });
    
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


$("#mainNav").click(changeTablist)

const findChosenPlatform = function() {
    return $(".menu-item-active")[0].innerText.toLowerCase().trim().split('\n').join('')
}

function changeTablist(e) {
    console.log(findChosenPlatform())
}
