let $p = document.querySelectorAll('.first-block p'),
    $td = document.querySelectorAll('td'),
    $clr_btns = document.querySelectorAll('.btns .color-btns button'),
    $brdr_btns = document.querySelectorAll('.btns .border-btns button'),
    $text_btns = document.querySelectorAll('.btns .text-btns button'),
    $article = document.getElementById('article')
    
    

for (let i = 0; i< $p.length; i++){
    $p[i].addEventListener('mouseenter', function(){
        this.classList.add('text-highlight')
    })
    $p[i].addEventListener('mouseout', function(){
        this.classList.remove('text-highlight')
    })
}

for( let i = 0; i<$td.length; i++){
    if($td[i].textContent == 'Ваш опис малюнка'){
        $td[i].addEventListener('click', function(){
            let a = prompt('Ваш опис малюнка').trim()
            $td[i].textContent = a ? a :'Ваш опис малюнка'
    
        })
    }
}

function buttonColor(object,color){
    object.style.color = color
}

$clr_btns[0].addEventListener('click', function(){
    buttonColor($article,'black')
})
$clr_btns[1].addEventListener('click', function(){
    buttonColor($article,'blue')
})
$clr_btns[2].addEventListener('click', function(){
    buttonColor($article,'red')
})
$clr_btns[3].addEventListener('click', function(){
    buttonColor($article,'green')
})
$clr_btns[4].addEventListener('click', function(){
    buttonColor($article,'magenta')
})
$clr_btns[5].addEventListener('click', function(){
    buttonColor($article,'violet')
})

function buttonBorder(object,border){
    object.style.border = border
}

$brdr_btns[0].addEventListener('click', function(){
    buttonBorder($article,'3px solid')
})
$brdr_btns[1].addEventListener('click', function(){
    buttonBorder($article,'3px dashed')
})
$brdr_btns[2].addEventListener('click', function(){
    buttonBorder($article,'3px dotted')
})
$brdr_btns[3].addEventListener('click', function(){
    buttonBorder($article,'3px double')
})
$brdr_btns[4].addEventListener('click', function(){
    buttonBorder($article,'3px inset')
})
$brdr_btns[5].addEventListener('click', function(){
    buttonBorder($article,'3px outset')
})

function buttonText(object,font){
    object.style.fontFamily = font
}
$text_btns[0].addEventListener('click', function(){
    buttonText($article,'serif')
})
$text_btns[1].addEventListener('click', function(){
    buttonText($article,'sans-serif')
})
$text_btns[2].addEventListener('click', function(){
    buttonText($article,'monospace')
})
$text_btns[3].addEventListener('click', function(){
    buttonText($article,'cursive')
})
$text_btns[4].addEventListener('click', function(){
    buttonText($article,'AmpirDeco')
})
$text_btns[5].addEventListener('click', function(){
    buttonText($article,'impact')
})