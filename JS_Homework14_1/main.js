// create elements

let gallery = document.createElement('DIV'),
    bigSlider = document.createElement('DIV'),
    bigLeftArr = document.createElement('SPAN'),
    bigRightArr = document.createElement('SPAN'),
    smallSlider = document.createElement('DIV'),
    smallLeftArr = document.createElement('SPAN'),
    smallRightArr = document.createElement('SPAN'),
    imgList = document.createElement('UL')



// add classes

gallery.classList.add('gallery'),
bigSlider.classList.add('bigSlider'),
bigLeftArr.classList.add('bigLeftArr'),
bigRightArr.classList.add('bigRightArr'),
smallSlider.classList.add('smallSlider'),
smallLeftArr.classList.add('smallLeftArr'),
smallRightArr.classList.add('smallRightArr'),
imgList.classList.add('imgList')

//fill arrows
bigLeftArr.textContent = '➤'
bigRightArr.textContent = '➤'
smallLeftArr.textContent = '➤'
smallRightArr.textContent = '➤'

// add elements in html

document.body.insertAdjacentElement("afterbegin", gallery)
gallery.append(bigSlider,smallSlider)
bigSlider.append(bigLeftArr, bigRightArr)
smallSlider.append(imgList,smallLeftArr,smallRightArr)


// load gallery
let url = "https://pixabay.com/api/?key=17057678-b4c4954d8c62e2cb084b2680c&q=lord+rings&image_type=photo&pretty=true"
let get_img = new XMLHttpRequest()
get_img.open('GET', url)
get_img.send()

get_img.onload = function(){
    if(get_img.status !== 200){
        console.log(`Error! ${get_img.status} ${get_img.statusText}`)
    }
    else{
        let response = JSON.parse(get_img.response).hits
        console.log(response)
        showImg(response)
        loadImg(response, 0)
    }
}

function showImg(list){
    for (let i = 0; i < list.length; i++){
        let li = document.createElement('LI')
        li.classList.add('imgItem')
        li.style.backgroundImage = `url(${list[i].webformatURL})`
        imgList.append(li)
    }

    //calculate width
    
imgListWidth = list.length * 150
imgList.style.width =  imgListWidth + 'px'
imgListLeft = 0
let liItems = document.querySelectorAll('.imgItem')
let prew = loadImg(list, liItems, 0)
liItems[prew].classList.add('selectedImg')

for ( let i = 0; i < liItems.length; i++){
        liItems[i].addEventListener('click',()=>{
            prew = loadImg(list, liItems, i, prew)
        })
}

// small arrows

smallLeftArr.addEventListener('click',()=>{
       imgListLeft = moveRight(imgList, imgListWidth, imgListLeft)
       console.log(imgListLeft)
})
smallRightArr.addEventListener('click',()=>{
        imgListLeft = moveLeft(imgList, imgListWidth, imgListLeft)
        console.log(imgListLeft)
})

// big arrows

bigLeftArr.addEventListener('click',()=>{
        let active
        if(prew <= 0){
            active = list.length - 1  
        }
        else{
            active = prew - 1
        }
        if(active === 19 || imgListLeft < (-active*150) ){
            imgListLeft = moveRight(imgList, imgListWidth, imgListLeft)
        }    
        prew = loadImg(list, liItems, active, prew)
})
bigRightArr.addEventListener('click',()=>{
        let active
        if(prew >= list.length - 1){
            active = 0
        }
        else{
            active = prew + 1
        }
        if(imgListLeft > -(active-4)*150 || active === 0){
            imgListLeft = moveLeft(imgList, imgListWidth, imgListLeft)
        }
        prew = loadImg(list, liItems, active, prew)
})
}

// functions

function loadImg(list, target=undefined, index, prew = -1){
    if(index !== prew){
        bigSlider.style.backgroundImage = `url(${list[index].webformatURL})`
        target[index].classList.add('selectedImg')
        if(prew >= 0){
        target[prew].classList.remove('selectedImg')
        }
        
    }
    return index
}

function moveLeft(target, width, left){
    if(-(width-150*5) < left ){
        left = left -150
        }
        else{
            left = 0
        }
        target.style.left = left + 'px'
        return left
}
function moveRight(target, width, right){
    if(right<0 ){
        right = right +150
        
        }
        else{
            right = -(width-150*5)
        }
        target.style.left = right + 'px'
        return right
}

