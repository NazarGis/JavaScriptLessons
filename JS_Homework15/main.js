//------------- Завдання №1
firstTask.signIn.addEventListener('click', (e)=>{
        if(firstTask.remember.checked && firstTask.loginFt.value !== '' && firstTask.passwordFt.value !==''){
            alert(`Привіт ${firstTask.loginFt.value}! Я тебе запам'ятав.`)
        }
        else if (!firstTask.remember.checked && firstTask.loginFt.value !== '' && firstTask.passwordFt.value !==''){
            alert(`Привіт ${firstTask.loginFt.value}! Я тебе не запам'ятав.`)
        }
        else if(firstTask.loginFt.value == '' || firstTask.passwordFt.value ==''){
            alert('Заповніть всі поля форми!')
        }
})

//----------- Завдання №2

secondTask.signUp.addEventListener('click', ()=>{
    if(secondTask.emailSt.value == '' || secondTask.loginSt.value == '' || secondTask.passwordSt.value == '' || secondTask.repeatPassSt.value == ''){
        alert('Заповніть всі поля форми!')
    }
    else if (secondTask.passwordSt.value !== secondTask.repeatPassSt.value){
        alert('Пароль та повторення паролю не співпадають!')
    }
    else{
        alert(`На пошту ${secondTask.emailSt.value} відправлено лист з підтвердженням`)
    }
})

//----------- Завдання №3

let $tr = document.querySelectorAll('tr'),
    $result = document.querySelector('.result')
    
thirdTask.save.addEventListener('click', (e)=>{
    e.preventDefault()
    $result.style.display = 'block'
    $tr[0].cells[1].textContent = thirdTask.firstname.value
    $tr[1].cells[1].textContent = thirdTask.lastname.value
    $tr[2].cells[1].textContent = thirdTask.birthday.value
    $tr[3].cells[1].textContent = thirdTask.gender.value
    $tr[4].cells[1].textContent = thirdTask.country.value
    $tr[5].cells[1].textContent = thirdTask.city.value
    for(check of thirdTask.skills){
        if(check.checked){
            $tr[6].cells[1].textContent += document.querySelector(`label[for='${check.getAttribute('id')}']`).textContent + ' / '
        }
    }
})

//----------- Завдання №4
let $colorsContainer = document.querySelector('.colors-container')

fourthTask.addColor.addEventListener('click',(e)=>{
    e.preventDefault()
    let colorDiv = document.createElement('div')
    colorDiv.style.display = 'flex'
    colorDiv.style.margin = '10px 5px'
    $colorsContainer.append(colorDiv)
    let color = document.createElement('div'),
        rgb = document.createElement('div'),
        p = document.createElement('p')
    color.style.backgroundColor =`rgb(${fourthTask.red.value},${fourthTask.green.value}, ${fourthTask.blue.value})`
    color.style.width = '30px'
    color.style.height = '30px'
    p.textContent = `RGB(${fourthTask.red.value},${fourthTask.green.value}, ${fourthTask.blue.value})`
    p.style.padding = '5px'
    rgb.style.border = '1px solid black'
    rgb.style.width = '150px'
    colorDiv.append(color)
    colorDiv.append(rgb)
    rgb.append(p)
})

//----------- Завдання №5

fifthTask.add.addEventListener('click', (e)=>{
    e.preventDefault()
    let allQuest = document.querySelector('.allQuestions'),
        pQuest = document.createElement('p'),
        pCorrect = document.createElement('p'),
        pWrong = document.createElement('p')
        allQuest.insertAdjacentElement('beforeend', pQuest)
        allQuest.insertAdjacentElement('beforeend', pCorrect)
        allQuest.insertAdjacentElement('beforeend', pWrong)
        pQuest.textContent = fifthTask.question.value
        pQuest.style.textDecoration = 'underline'
        pCorrect.textContent = 'Correct answer: ' + fifthTask.correctAnswer.value
        pWrong.textContent = 'Wrong answer: ' + fifthTask.wrongAnswer.value
})