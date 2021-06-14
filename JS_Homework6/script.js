let $p = document.querySelector('p');
console.log($p);
let $buttons = document.querySelectorAll('button');
console.log($buttons);

for( let i=0; i< $buttons.length; i++){
    $buttons[i].addEventListener('click', ()=>{
        $p.style.color = 'black'
        $p.style.fontWeight = 'bold'
        $p.style.fontStyle = 'italic' 
    })
}
$buttons[0].addEventListener('click', ()=>{
    $p.style.backgroundColor = '#dbfff0'
    $p.style.border = '3px double darkblue'
    $p.style.borderRadius = '3px'
})
$buttons[1].addEventListener('click', ()=>{
    $p.style.color = 'darkblue'
    $p.style.borderBottomLeftRadius = '5px'
    $p.style.backgroundColor = '#ffe3de'
    $p.style.border = '5px dashed darkblue'
    $p.style.borderRadius = '3px'
})
$buttons[2].addEventListener('click', ()=>{
    $p.style.color = '#5a5a5a'
    $p.style.backgroundColor = 'lightgray'
    $p.style.border = '10px dashed #5a5a5a'
    $p.style.borderTopLeftRadius = '10px'
    $p.style.borderBottomLeftRadius = '10px'
    $p.style.borderTopRightRadius = '50px'
    $p.style.borderBottomRightRadius = '50px'
})
$buttons[3].addEventListener('click', ()=>{
    $p.style.color = '#55aee0'
    $p.style.backgroundColor = '#5b5096'
    $p.style.borderTop = '10px solid darkblue'
    $p.style.borderLeft = '10px solid darkblue'
    $p.style.borderBottom = '10px solid black'
    $p.style.borderRight = '10px solid black'
    $p.style.borderTopLeftRadius = '30px'
    $p.style.borderBottomLeftRadius = '15px'
    $p.style.borderTopRightRadius = '15px'
    $p.style.borderBottomRightRadius = '30px'
})