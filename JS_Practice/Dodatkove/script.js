let $right_arr = document.querySelector('.banner .fa-arrow-right'),
    $left_arr = document.querySelector('.banner .fa-arrow-left'),
    $img = document.querySelectorAll('img')
    console.log($right_arr)
    let prew = 0




for (let i = 0 ; i < $img.length; i++){
    $right_arr.addEventListener('click', function(){
        $img[i+1].style.display = 'block'
        $img[prew].style.display = 'none'
        if(next == $img.length ){
            next = 0
        }
        prew +=i
        
        
       

    
})
}