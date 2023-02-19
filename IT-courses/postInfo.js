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


$("#mainNav").click(fillTablist);

function fillTablist() {
    const platform = $(".menu-item-active")[0].innerText.trim().split('\n').join('') 
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
    $(`#courseInfoTabs .tabs__content`).removeClass("active")

    // post tabs title
    let isfirst = true
    let tab_n = 0
    tabs.forEach(element => {
        // console.log(element)

        putCaption(element.title, isfirst)
        putDescription(element.description, tab_n++)

        isfirst = false
    });
    
    $(`#courseInfoTabs .tabs__content`)[0].classList.add("active")
}

function putCaption(title, isfirst) {
    let caption = elementForHtml(`
            <li class="${isfirst?'active':''}"><p>${title}</p></li>
        `)

    $("#courseInfoTabs .tabs__caption").append(caption); 
}

function putDescription(description, num) {
    let content
    if(typeof description == 'string') {
        if(description.includes("<ul>")) 
        {
            content = elementForHtml(description)
        } 
        else 
        {
            content = elementForHtml(`
                <p>${description}</p>
            `)
        }
    } 
        else 
    {
        let types = Array()
        for(let type in description) {
            types[types.length] = description[type]
        }
        // console.log(types)

        let wrapper = elementForHtml(`
            <div id="forWho" class="container"></div>
        `)
        content = elementForHtml(`<div class="row"></div>`)

        types.forEach(element => {
            content.append( elementForHtml(`
                    <div class="col-md-12 intro-panel fw-normal my-2">
                        <h3>${element.title}</h3>
                        <p>${element.description}</p>
                    </div>
                `) )
        });        
        wrapper.append(content)
        content = wrapper

    }

    $(`#courseInfoTabs .tabs__content`)[num].append(content);

}


