let data_base = [
["1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat doloremque illo, ullam tenetur eveniet nam ut sequi excepturi cupiditate est minus blanditiis quis sunt facilis ad adipisci, cum, quaerat tempore!", "./img/language-icon.png"], 
["2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat doloremque illo, ullam tenetur eveniet nam ut sequi excepturi cupiditate est minus blanditiis quis sunt facilis ad adipisci, cum, quaerat tempore!", "./img/notification.png"],
["3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat doloremque illo, ullam tenetur eveniet nam ut sequi excepturi cupiditate est minus blanditiis quis sunt facilis ad adipisci, cum, quaerat tempore!","./img/privacy-policy.png"],
["4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat doloremque illo, ullam tenetur eveniet nam ut sequi excepturi cupiditate est minus blanditiis quis sunt facilis ad adipisci, cum, quaerat tempore!", "./img/language-icon.png"],
["5 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat doloremque illo, ullam tenetur eveniet nam ut sequi excepturi cupiditate est minus blanditiis quis sunt facilis ad adipisci, cum, quaerat tempore!", "./img/language-icon.png"],
["6 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat doloremque illo, ullam tenetur eveniet nam ut sequi excepturi cupiditate est minus blanditiis quis sunt facilis ad adipisci, cum, quaerat tempore!", "./img/language-icon.png"],
["7 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat doloremque illo, ullam tenetur eveniet nam ut sequi excepturi cupiditate est minus blanditiis quis sunt facilis ad adipisci, cum, quaerat tempore!", "./img/notification.png"],
["8 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat doloremque illo, ullam tenetur eveniet nam ut sequi excepturi cupiditate est minus blanditiis quis sunt facilis ad adipisci, cum, quaerat tempore!", "./img/privacy-policy.png"]
]

let close_btn = document.querySelector('.close'),
    overlay = document.querySelector('.overlay'),
    info = document.querySelector('.info'),
    main_menu_li = document.querySelectorAll('ul.main-menu>li'),
    sub_menu = document.querySelectorAll('ul.sub-menu'),
    sub_menu_li = document.querySelectorAll('ul.sub-menu>li'),
    arrow_down = document.querySelectorAll('ul.main-menu>li>span')

console.log(sub_menu_li)

close_btn.addEventListener('click', (event)=>{
    overlay.style.display = 'none'
})
overlay.addEventListener('click', (event)=>{
    overlay.style.display = 'none'
})
info.addEventListener('click', (event)=>{
    event.stopPropagation()
})

for(let i = 0; i<main_menu_li.length; i++){
    main_menu_li[i].addEventListener('click', (event)=>{
        sub_menu[i].style.display = sub_menu[i].style.display == 'block'? 'none':'block'
        if(sub_menu[i].style.display == 'block'){
            arrow_down[i].style.transform = 'rotate(180deg)'
            arrow_down[i].style.color = 'gray'
            arrow_down[i].addEventListener('mouseout', (event)=>{
                event.stopPropagation()
                event.target.style.transform = 'rotate(180deg)'
                event.target.style.color = 'gray'
            } )
            arrow_down[i].addEventListener('mouseover', (event)=>{
                event.stopPropagation()
                event.target.style.transform = 'none'
                event.target.style.color = 'gray'
            })
        }
        else{
            arrow_down[i].style.transform = 'none'
            arrow_down[i].style.color = 'inherit'
            arrow_down[i].addEventListener('mouseover', (event)=>{
                event.stopPropagation()
                event.target.style.transform = 'rotate(180deg)'
                event.target.style.color = 'gray'
            })
            arrow_down[i].addEventListener('mouseout', (event)=>{
                event.stopPropagation()
                event.target.style.transform = 'none'
                event.target.style.color = 'inherit'
            } )
        }
        arrow_down[i].style.transition = '.5s'
    })
    arrow_down[i].addEventListener('mouseover', (event)=>{
        event.stopPropagation()
        event.target.style.transform = 'rotate(180deg)'
        event.target.style.color = 'gray'
        event.target.style.transition = '.5s'
    })
    arrow_down[i].addEventListener('mouseout', (event)=>{
        event.stopPropagation()
        event.target.style.transform = 'none'
        event.target.style.color = 'inherit'
        if(sub_menu[i].style.display == 'block'){
            event.target.style.color = 'gray'
        }
    } )
}
for(let i = 0; i<sub_menu_li.length; i++){
    sub_menu_li[i].addEventListener('mouseover', ()=>{
        sub_menu_li[i].style.paddingLeft = '55px'
        sub_menu_li[i].style.transition = '.5s'
    })
    sub_menu_li[i].addEventListener('mouseout', ()=>{
        sub_menu_li[i].style.paddingLeft = '40px'
    })
}
for(let i = 5; i<sub_menu_li.length; i++){
    sub_menu_li[i].addEventListener('click', (event)=>{
        event.stopPropagation()
        overlay.style.display = 'flex'
        if (info.children[0].tagName === 'P'){
            info.children[0].textContent = data_base[i-5][0]
        }
        info.style.backgroundImage = `url(${data_base[i-5][1]})`
        info.style.backgroundRepeat = 'no-repeat'
        info.style.backgroundPosition = 'center'
    })
}
