let img_list = document.querySelectorAll('.gallery ul li img'),
    gallery = document.querySelector('.gallery'),
    slider = document.querySelector('.slider'),
    leftArr = document.querySelector('.left-arrow'),
    rightArr = document.querySelector('.right-arrow')
    

let flag = false,
    prew = 0

// for( let i = 0; img_list.length; i++){
//     img_list[i].addEventListener('mouseover', (event)=>{
//         // event.target.style.transform = 'scale(1.5)'
//         // event.target.style.opacity = '1'
//         // event.target.style.zIndex = '999'
//         big(img_list,i)
//     })
//     img_list[i].addEventListener('mouseleave', (event)=>{
//         // event.target.style.transform = 'scale(1)'
//         // event.target.style.opacity = '0.5'
//         // event.target.style.zIndex = '0'
//         small(img_list[i])
//     })
// }

// function big(node_list,ind){
//     node_list[ind].style.transform = 'scale(1.5)'
//     node_list[ind].style.opacity = '1'
//     node_list[ind].style.zIndex = '999'
// }

// function small(object){
//     object.style.transform = 'scale(1)'
//     object.style.opacity = '0.5'
//     object.style.zIndex = '0'
// }




// for( let i = 0; img_list.length; i++){
//     img_list[i].addEventListener('click', function (event){
//         if(img_list[i].style.transform != 'scale(1.5)'){
//         big(img_list,i)
//         if (prew >= 0 ){
//             small(img_list,prew)
//         }
//         prew = i
//     }
//     else{
//         small(img_list,i)
//         prew = -1 
//     }
//     })
// }

// function big(node_list,ind){
//     node_list[ind].style.transform = 'scale(1.5)'
//     node_list[ind].style.opacity = '1'
//     node_list[ind].style.zIndex = '999'
// }

// function small(node_list,ind){
//     node_list[ind].style.transform = 'scale(1)'
//     node_list[ind].style.opacity = '0.5'
//     node_list[ind].style.zIndex = '0'
// }

load(0)
for( let i = 0; i < img_list.length; i++){
    img_list[i].addEventListener('click', function(event){
        load(i)
        // let url = img_list[i].getAttribute('src')
        // img_list[i].classList.add('active_img')
        // show(url,i)
    })
    
}

leftArr.addEventListener('click', function(event){
    if(prew == 0){
        load(img_list.length-1)
    }
    else{
        load(prew-1)
}
})

rightArr.addEventListener('click', function(event){
    if(prew == img_list.length-1){
        load(0)
    }
    else{
        load(prew+1)
}
})


function load(ind){
    img_list[ind].classList.add('active_img')
    let url = img_list[ind].getAttribute('src')
    slider.style.backgroundImage = `url(${url})`
    if(prew !== ind){
    img_list[prew].classList.remove('active_img')
    }
    prew = ind
    
    
}

function show(url,ind){
    let overlay = document.createElement('DIV')
        overlay.classList.add('overlay')
    let imgBlock = document.createElement('DIV')
        imgBlock.style.backgroundImage = `url(${url})`
        imgBlock.classList.add('img_block')
    overlay.appendChild(imgBlock)
    gallery.insertAdjacentElement('afterend', overlay)

    overlay.addEventListener('click', function(ev){
        this.remove()
        img_list[ind].classList.remove()
    }
    )
}

// function noActiveImg(ind){
//     img_list[ind].classList.remove()
// }





/// mouse coordinats
let s = 5
document.body.addEventListener('mousemove', function(event){
    p.textContent = event.offsetX
})