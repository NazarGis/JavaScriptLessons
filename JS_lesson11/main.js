// let person = Object.create(
//     {
//         calculateAge(){
//             return new Date().getFullYear() - this.birthYear
//         }
//     },
//     {
//         name:{
//             value:'Bob',
//             enumerable: true, //відображається в циклі
//             writable: true,  // можна змінити значення
//             configurable: true //можна видалити поле
//         },
//         birthYear:{
//             value:2000,
//             enumerable: false, //не відображається в циклі
//             writable: false, // не можна змінити значення
//             configurable: false //не можна видалити поле
//         },
//         age:{
//             get(){
//                 return new Date().getFullYear() - this.birthYear
//             },
//             set(value){
//                 console.log(value)
//             }
//         }
//     }
// )

// console.log(person)
// person.name = 'Bill'
// person.birthYear = 2020
// console.log(person.birthYear)
// delete person.birthYear

// for(key in person){
//     console.log(`${key}:${person[key]}`)
// }
// console.log(person.age)
// person.age = 100
// console.log(person)
// console.log(person.calculateAge())

// let dog = Object()
// console.log(dog)


let $bookList = document.querySelector('.book-list .row'),
    $addButton = document.querySelector('.add-btn'),
    $input = document.querySelectorAll('input'),
    $description = document.querySelector('textarea'),
    $pDesc, $readBtn

console.log($bookList)

let DB = {}
DB.bookList = []

let example = {
    title:"Book",
    autors:"Bob Rob",
    publisher:"unknown",
    year:"2000",
    image:"./img/Братство_Персня.jpg",
    link:" https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae commodi fugiat labore harum? Aspernatur animi culpa, quod ab omnis aperiam laborum perferendis porro ad sapiente nemo inventore voluptatum, quisquam sed."
}


DB.bookList.push(example)
console.log(DB)

function print (item){
    return `<article class="col-6 d-flex align-items-start">
    <img src="${item.image}" alt="${item.title}" class="col-4">
    <div class="col-8">
    <h4 class="title">${item.title}</h4>
    <p class="autors">${item.autors}<i class="year">${item.year}</i></p>
    <p class="publisher"></p>
    <p class="description">${item.description}</p>
    <button class="read-more btn btn-success">More</button>
    <a href="${item.link}" class="read-btn btn btn-info" target = "_blanc">Read</a>
</div>
</article>`
}

function load(db){
    for(item of db.bookList){
        $bookList.insertAdjacentHTML('beforeend', print(item))
    }
    $pDesc = document.querySelectorAll('p.description'),
    $readBtn = document.querySelectorAll('.read-more')
}

load(DB)

let book = function(title, autors, publisher, year, image, link, description){
    return {title, autors, publisher, year, image, link, description}
}

$addButton.addEventListener('click', (ev)=>{
    ev.preventDefault()

    let fields = true
    for (input of $input){
        if (input.value.trim()== ''){
            fields = false
        }
    }
    let item = book(
        document.querySelector('input[name = "title"]').value,
        document.querySelector('input[name = "autors"]').value,
        document.querySelector('input[name = "publisher"]').value,
        document.querySelector('input[name = "year"]').value,
        document.querySelector('input[name = "image"]').value,
        document.querySelector('input[name = "link"]').value,
        document.querySelector('textarea[name = "description"]').value
    )
    for (input of $input){
        input.value = ''
    }
    $description.value = ''
    $bookList.insertAdjacentHTML('beforeend', print(item))
    DB.bookList.push(item)
    $pDesc = document.querySelectorAll('p.description')
    $readBtn = document.querySelectorAll('.read-more')
})

for(let i = 0; i < $readBtn.lenght; i++){
$readBtn[i].addEventListener('click', (ev)=>{
    if ($pDesc[i].style.maxHeight = '120px'){
        $pDesc[i].style.maxHeight = 'auto'
    }
    else{
        $pDesc[i].style.maxHeight = '120px'
    }
}
)}