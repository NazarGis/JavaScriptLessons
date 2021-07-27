// token = 'SUPER SECRET KEY'
// window.seesionStorage.setItem('session', token)

// showPass.addEventListener('click', ()=>{
//     if(pass.getAttribute('type') == 'password'){
//         pass.setAttribute('type','text') 
//     }
//     else{
//         pass.setAttribute('type', 'password')  
//     }
// })

// function showPassword(){
//     if(pass.getAttribute('type') == 'password'){
//         pass.setAttribute('type','text') 
//     }
//     else{
//         pass.setAttribute('type', 'password')  
//     }
// }

themeCheck.addEventListener('click', changeTheme)

// function changeTheme(){
//     let theme = 'light' 
//     if(themeCheck.checked){
//         theme = 'dark'
//     }
//     else{
//         theme = 'light'
//     }
//     console.log(theme)
//     localStorage.setItem('theme', theme)
//     setTheme(theme)
// }

// function setTheme(theme){
//     if(theme === 'light'){
//         document.body.style.backgroundColor = 'white'
//         document.body.style.color = 'black'
//     }
//     else if (theme === 'dark'){
//         document.body.style.backgroundColor = 'darkgray'
//         document.body.style.color = 'white'
//     }
// }

// document.addEventListener('DOMContentLoaded', ()=>{
//     let theme = localStorage.getItem('theme')
//     setTheme(theme)
//     if(theme === 'dark'){
//         themeCheck.checked =true
//     }
// })

// 2 спосіб

function changeTheme(){
    let theme = false 
    if(themeCheck.checked){
        theme = true
    }
    else{
        theme = false
    }
    console.log(theme)
    localStorage.setItem('theme', JSON.stringify({'theme':theme}))
    setTheme(theme)
}

function setTheme(theme){
    if(!theme){
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }
    else if (theme){
        document.body.style.backgroundColor = 'darkgray'
        document.body.style.color = 'white'
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    let theme = JSON.parse(localStorage.getItem('theme')).theme
    setTheme(theme)
    themeCheck.checked = theme

})