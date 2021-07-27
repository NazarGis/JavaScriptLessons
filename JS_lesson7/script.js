// // console.log(x);

const { listenerCount } = require("events")

// //const { appendFile } = require("fs")

// // var x = 5;
// // let y = 1;
// // const c = 10;

// // console.log(y,c);

// // console.log(fc())
// // console.log(fr())
// // function fc(){
// //     return 3;
// // }
// // console.log(fc())

// // fr = function(){
// //     return 5;
// // }
// // console.log(fr())

// //console.log(this)
// // let $p = document.querySelectorAll('p');

// // for( let i = 0; i < $p.length; i++){
// //     $p[i].addEventListener('click', function(){

// //         // if (this.style.color = 'red'){
// //         //     this.style.color = 'black'
// //         // }
// //         // else{
// //         //     this.style.color = 'red'
// //         // }

// //         //this.setAttribute('class', 'red')
// //         this.classList.add('green')
// //         this.classList.toggle('red')


// //     })
// // }

// // let link = document.querySelector('a')
// // console.log(link)
// // link.setAttribute('target', '_blank')
// // console.log(link.attributes)
// // console.log(link.attributes[0])
// // console.log(link.attributes[0].value)
// // link.removeAttribute('target')
// // console.log(link.getAttribute('href'))
// // console.log(link.hasAttribute('href'))

// // let link = document.querySelector('a')
// // link.classList.add('red', 'white')
// // l_clist = link.classList
// // l_clist.add('green')
// // link.classList.remove('green')
// // link.classList.replace('red', 'yellow')
// // console.log(link.classList.contains('yellow'))
// // console.log(link.classList.values().next())
// // console.log(link.classList)

// let $ul = document.getElementsByTagName('ul')
// console.log($ul[0])
// // let list = ''
// // for ( let i = 1; i<=3; i++ ){
// //     list += `<li>Link item ${i}</li>`
// // }
// // $ul[0].innerHTML = list

// for ( let i = 1; i<=3; i++ ){
//     let li = document.createElement('li')
//     li.textContent = `Link item ${i}`
//     let lo = document.createElement('li')
//     lo.textContent = 'Link item '
//     //$ul[0].insertAdjacentElement('beforeend', li) те саме, що
//     //$ul[0].append(li)
//     //$ul[0].insertAdjacentElement('afterbegin', li) те саме, що
//     //$ul[0].prepend(li)
//     //$ul[0].insertAdjacentElement('beforebegin', li) те саме, що
//     //$ul[0].before(li)
//     //$ul[0].insertAdjacentElement('afterend', li) те саме, що
//     //$ul[0].after(li)
//     $ul[0].append(li,lo);
// }

// $ul[0].insertAdjacentHTML('afterbegin', '<li>Hello</li>')
// $ul[0].insertAdjacentText('afterbegin', '<li>Hello</li>')

let $list_items = document.querySelectorAll('.wrapper .nav li'),
    $articles = document.querySelectorAll('.wrapper .content article')
console.log($list_items)
console.log($articles)

let prew = 0
for( let i=0; i< $list_items.length; i++){
    $list_items[i].addEventListener('click', ()=>{
        if(i+1 !== prew){
        $articles[i+1].classList.add('show')
        $articles[prew].classList.remove('show')
        prew = i+1
    }
    })
    $list_items[i].addEventListener('mouseenter', ()=>{
        $list_items[i].style.color = 'red'
    })
    $list_items[i].addEventListener('mouseleave', ()=>{
        $list_items[i].style.color = 'black'
    })
}
