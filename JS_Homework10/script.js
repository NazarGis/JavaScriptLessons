let $td = document.querySelectorAll('table tr td'),
    $input = document.querySelectorAll('table tr td input'),
    $button = document.querySelectorAll('table tr td button'),
    $td_answer = [...$td].filter((e,i)=>i%2),
    $td_riddle = [...$td].filter((e,i)=>!(i%2))
  
function answer(rightAnsw, ind){
    if ($input[ind].value == rightAnsw){
        $td_riddle[ind].style.backgroundColor = 'green'
        $td_riddle[ind].style.color = 'white'
        $input[ind].style.display = 'none'
        $button[ind].style.display = 'none'
        $td_answer[ind].style.background = 'url(./img/right.png) no-repeat center/contain'
    }
    else{
        $td_riddle[ind].style.backgroundColor = 'red'
        $td_riddle[ind].style.color = 'white'
        $input[ind].style.display = 'none'
        $button[ind].style.display = 'none'
        $td_answer[ind].style.background = 'url(./img/wrong.png) no-repeat center/contain'
    }
}

for(let i=0; i < $button.length; i++){
    $button[i].addEventListener('click', function(){
        switch(i){
            case 0: answer('лелека',i)
            break
            case 1: answer('ставок',i)
            break
            case 2: answer('чайник',i)
            break
            case 3: answer('торт',i)
            break
            case 4: answer('вогонь',i)
            break
            case 5: answer('цукерка',i)
            break
            case 6: answer('зошит',i)
            break
            case 7: answer('вікно',i)
            break
            case 8: answer('хліб',i)
            break
            case 9: answer('свічка',i)
            break
        }
    })
}
