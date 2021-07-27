// console.log(document.forms.mainForm)
// console.log(mainForm)
// console.log(mainForm.firstname)
// console.log(mainForm.firstname.value)

// mainForm.button.addEventListener('click', ()=>{
//     for (check of mainForm.ch){
//         if(check.checked){
//             let text = document.querySelector(`label[for='${check.getAttribute('id')}']`).textContent
//             console.log(text)
//         }
//     }
//     console.log(mainForm.gender.value)
// })


// mainForm.range.addEventListener('change', (event)=>{
//     console.log(event.target.value)
// })
// mainForm.color.addEventListener('change', (event)=>{
//     console.log(event.target.value)
// })
// mainForm.date.addEventListener('change', (event)=>{
//     console.log(event.target.value)
// })
// mainForm.firstname.addEventListener('change', (event)=>{
//     console.log(event.target.value)
// })
// mainForm.email.addEventListener('keydown', (event)=>{
//     let email = event.target.value.split('@')
//     if(email.length !== 2 || email[0].length < 8 || email[1].split('.').length < 2){
//         event.target.style.border = '3px solid red'
//     }
//     else{
//         event.target.style.border = '3px solid green'
//     }

//     console.log(event.target.value)
// })
// mainForm.file.addEventListener('change', (event)=>{
//     console.log(event.target.value)
// })
// mainForm.text.addEventListener('change', (event)=>{
//     console.log(event.target.value)
// })

// mainForm.select.addEventListener('change', (event)=>{
//     console.log(event.target.options[event.target.selectedIndex].textContent)
// })
// console.log(mainForm.select[0].text)

// mainForm.myList.addEventListener('change', (event)=>{
//     console.log(event.target.value)
// })


// local storage

// localStorage.setItem('myKey', '{"key1":"value"}')

// data = JSON.parse(localStorage.getItem('myKey'))
// console.log(data)
// console.log(localStorage.key(0))
// localStorage.removeItem('myKey')
// localStorage.clear()

// Practice

dataObject = {}
dataBase = []

regForm.register.addEventListener('click', (event)=>{
    event.preventDefault()
    dataObject.login = regForm.login.value
    dataObject.email = regForm.email.value
    dataObject.password = regForm.password.value
    loadData(dataObject)
})

function loadData(obj){
    dataBase = localStorage.getItem('dataBase')
    dataBase = dataBase ? JSON.parse(dataBase):[]
    console.log(obj, dataBase)
    let flag = false
    if(dataBase.length>0){
        for(item of dataBase){
            if(item.email === obj.email){
            flag = true
            break
            }
        }
    }    
    if(!flag){
            dataBase.push(obj)
            dataBase = JSON.stringify(dataBase)
            localStorage.setItem('dataBase', dataBase)
    }
}


