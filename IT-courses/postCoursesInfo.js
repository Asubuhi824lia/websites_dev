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
 })