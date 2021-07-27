user = {}
usersBase = []
activeUser = {}

regForm.enter.addEventListener('click', (e)=>{
    e.preventDefault()
    user.login = regForm.login.value
    user.password = regForm.password.value
    userBase = localStorage.getItem('userBase')
    userBase = JSON.parse(userBase)
    for(item of userBase){
        if(item.login === user.login && item.password === user.password){
        window.location.href = 'page.html'
        actvUsr(activeUser,item)
        }
    }
})

regForm.signUp.addEventListener('click', (e)=>{
    e.preventDefault()
    regForm.signUp.style.display = 'none'
    regForm.name.style.display = 'inline-block'
    forName.style.display = 'inline-block'
    regForm.email.style.display = 'inline-block'
    forEmail.style.display = 'inline-block'
    regForm.signIn.style.display = 'inline-block'
    regForm.enter.style.display = 'none'
})

regForm.signIn.addEventListener('click', (event)=>{
    event.preventDefault()
    user.name = regForm.name.value
    user.email = regForm.email.value
    user.login = regForm.login.value
    user.password = regForm.password.value
    loadData(user)
    userBase = JSON.parse(userBase)
    for(item of userBase){
        if(item.email !== user.email && item.login !== user.login){
        window.location.href = 'page.html'
        actvUsr(activeUser, item)
        }   
    }
    if(userBase !== []){
        window.location.href = 'page.html'
        for(item of userBase){
            actvUsr(activeUser, item)
        }
        
    }
})

function loadData(obj){
    userBase = localStorage.getItem('userBase')
    userBase = userBase ? JSON.parse(userBase):[]
    console.log(obj, userBase)
    let flag = false
    if(userBase.length>0){
        for(item of userBase){
            if(item.email === obj.email){
            flag = true
            alert('Користувач з даною електронною адресою зареєстрований!')
            break
            }
            else if(item.login === obj.login){
            flag = true
            alert('Користувач з даним логіном зареєстрований!')
            break
            }
        }
    }    
    if(!flag){
            userBase.push(obj)
            userBase = JSON.stringify(userBase)
            localStorage.setItem('userBase', userBase)
    }
}

function actvUsr(obj, item){
        obj.name = item.name
        obj.email = item.email
        obj.login = item.login
        obj.password = item.password
        obj = JSON.stringify(obj)
        localStorage.setItem('activeUser', obj)
}