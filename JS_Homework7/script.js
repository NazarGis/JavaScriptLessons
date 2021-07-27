let $list_items = document.querySelectorAll('.wrapper .nav li'),
    $articles = document.querySelectorAll('.wrapper .content article'),
    $h1 = document.querySelector('.container h1');

$h1.addEventListener('click', ()=>{
    window.location.href = './index.html'
})

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
        $list_items[i].classList.add('list')
    })
    $list_items[i].addEventListener('mouseleave', ()=>{
        $list_items[i].classList.remove('list')
    })
}
