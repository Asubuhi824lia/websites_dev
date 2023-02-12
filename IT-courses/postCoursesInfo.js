 $(document).ready(function() {
    // Заполнить select вариантами курсов
    let options

    let info = coursesInfo.courses
    let courses = Array()

    for(let course in info) {
        courses[courses.length] = info[course]
    }

    courses.forEach(element => {
        let option = $("<option></option>")[0]
        option.value = element.platform
        option.label = element.title

        $("#selectCourse").append(option)
    });

    // Заполнить подвал через <template> 

    courses.forEach(element => {
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

