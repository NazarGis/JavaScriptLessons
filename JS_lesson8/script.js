// let $li_list = document.querySelectorAll('li')
// for (let i = 0; i < $li_list.length; i++){
//     $li_list[i].addEventListener('click', ()=>{
//         console.log('click' + i)
//     })
// }


// let button = document.querySelector('button')

// button.addEventListener('click', (event)=>{
//     if (f1.inp.value != '111'){
//         event.preventDefault()
//     }
// })

// let a = document.querySelector('a')

// a.addEventListener('click', (event)=>{
//     if (f1.inp.value != '111'){
//         event.preventDefault()
//     }
// })

let data_base = [
["1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat doloremque illo, ullam tenetur eveniet nam ut sequi excepturi cupiditate est minus blanditiis quis sunt facilis ad adipisci, cum, quaerat tempore!"], 
["2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat doloremque illo, ullam tenetur eveniet nam ut sequi excepturi cupiditate est minus blanditiis quis sunt facilis ad adipisci, cum, quaerat tempore!"],
["3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat doloremque illo, ullam tenetur eveniet nam ut sequi excepturi cupiditate est minus blanditiis quis sunt facilis ad adipisci, cum, quaerat tempore!"],
["4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat doloremque illo, ullam tenetur eveniet nam ut sequi excepturi cupiditate est minus blanditiis quis sunt facilis ad adipisci, cum, quaerat tempore!"],
["5 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat doloremque illo, ullam tenetur eveniet nam ut sequi excepturi cupiditate est minus blanditiis quis sunt facilis ad adipisci, cum, quaerat tempore!"],
["6 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat doloremque illo, ullam tenetur eveniet nam ut sequi excepturi cupiditate est minus blanditiis quis sunt facilis ad adipisci, cum, quaerat tempore!"]
]

let close_btn = document.querySelector('.close'),
    overlay = document.querySelector('.overlay'),
    // button = document.querySelector('button'),
    info = document.querySelector('.info'),
    main_menu_li = document.querySelectorAll('ul.main-menu>li'),
    sub_menu = document.querySelectorAll('ul.sub-menu'),
    sub_menu_li = document.querySelectorAll('ul.sub-menu>li')

console.log(sub_menu_li)

// button.addEventListener('click', (event)=>{
//     overlay.style.display = 'flex'
// })

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
    })
}

for(let i = 0; i<sub_menu_li.length; i++){
    sub_menu_li[i].addEventListener('click', (event)=>{
        event.stopPropagation()
        overlay.style.display = 'flex'
        if (info.children[0].tagName === 'P'){
            info.children[0].textContent = data_base[i]
        }
    })
    sub_menu_li[i].addEventListener('mouseover', (event)=>{
        event.stopPropagation()
        event.target.style.marginLeft = '10px'
    })
    sub_menu_li[i].addEventListener('mouseout', (event)=>{
        event.stopPropagation()
        event.target.style.marginLeft = '0px'
    })
}
