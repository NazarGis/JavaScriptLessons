let $task_1_btn = document.querySelectorAll('.task-1 button'),
    $task_1_h2 = document.querySelectorAll('.task-1 h2'),
    $task_2_span = document.querySelectorAll('.task-2 p span'),
    $task_3_btn = document.querySelectorAll('.task-3 button'),
    $task_3_p = document.querySelectorAll('.task-3 p'),
    $task_4_li = document.querySelectorAll('.task-4 section ul li'),
    $task_4_p = document.querySelectorAll('.task-4 section p'),
    $task_5_btn = document.querySelectorAll('.task-5 article button'),
    $task_5_p = document.querySelectorAll('.task-5 article p'),
    $task_6_btn = document.querySelectorAll('.task-6 button'),
    $task_6_progress = document.querySelectorAll('.task-6 progress'),
    prew = 0
    
    
//-----------task 1
for(let i=0; i< $task_1_btn.length; i++){
    $task_1_btn[i].addEventListener('click', function(){
    $task_1_h2[i].textContent = Math.ceil(Math.random()*100)
})
}

//-----------task 2
document.body.addEventListener('mousemove', function(event){
    $task_2_span[0].textContent = event.x
    $task_2_span[1].textContent = event.y
})

//-----------task 3
for(let i=0; i < $task_3_btn.length; i++){
    $task_3_btn[i].addEventListener('click', function(){
    if ($task_3_p[i].style.display == 'none'){
        $task_3_p[i].style.display = 'block'}
    else{
        $task_3_p[i].style.display = 'none'
    }
})
}

//----------- task 4
for(let i=0; i< $task_4_li.length; i++){
    $task_4_li[i].addEventListener('click', function(){
    $task_4_p[i].style.display = 'block'
    this.classList.add('active-li')
    if( prew !== i){
        $task_4_li[prew].classList.remove('active-li')
        $task_4_p[prew].style.display = 'none'
    }
    prew = i
})
}

//---------- task 5
for(let i=0; i< $task_5_btn.length; i++){
    $task_5_btn[i].addEventListener('click', function(){
    $task_5_p[i].style.display = 'none'
})
}

//----------- task 6
for(let i=0; i< $task_6_btn.length; i++){
    $task_6_btn[i].addEventListener('click', function(){
    $task_6_progress[i].value +=5
})
}
