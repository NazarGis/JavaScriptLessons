// +Add item
// +Delete item
// +Activate / deactivate item
// Add button (pencil)
// Save button
// Clear button
// Tips button
// Close overlay

function pageLoader(){
    let $input = document.querySelector('.lists'),
        $ul = document.querySelector('.todos')
        $ul.innerHTML = localStorage.getItem('dataBase')
        let $cart = document.querySelectorAll('.todos span'),
        $save = document.querySelector('#buttons .save'),
        $clear = document.querySelector('#buttons .clear'),
        $tips = document.querySelector('#buttons .tipBtn'),
        $add = document.querySelector('#pencil'),
        $overlay = document.querySelector('#overlay'),
        $closebtn = document.querySelector('#overlay .closebtn')
        
    function deleteToDo(){
        for( let i = 0; i < $cart.length; i++){
            $cart[i].addEventListener('click', function(){
                this.parentElement.remove()
            })
        }
    }
    
    deleteToDo()

    $input.addEventListener('keypress', function(key){
        if(key.which === 13){
            let value = this.value
            this.value =''
            if(value.trim() && value){
                let $li = document.createElement('LI'),
                    $span = document.createElement('SPAN'),
                    $i = document.createElement('I')
                $i.classList.add('fas', 'fa-trash-alt')
                $span.append($i)
                $li.textContent = value
                $li.prepend($span)
                $ul.prepend($li)
                $cart = document.querySelectorAll('.todos span')
                deleteToDo()
            }
            else{
                alert('Error ! Enter the valid text')
            }
        }
    })

    $ul.addEventListener('click', function(event){
        if(event.target.tagName.toLowerCase() === 'li'){
            event.target.classList.toggle('checked')
        }
    })
    $save.addEventListener('click', function(){
        console.log($ul.innerHTML)
        localStorage.setItem('dataBase', $ul.innerHTML)
    })
    $clear.addEventListener('click', function(){
        $ul.innerHTML = ''
        localStorage.clear()
    })

    $add.addEventListener('click', function(event){
        $input.classList.toggle('display')
    })
    
    $tips.addEventListener('click', function(){
        $overlay.style.height = '100%'
    })
    $closebtn.addEventListener('click', function(){
        $overlay.style.height = '0'
    })

    
}

document.addEventListener('DOMContentLoaded', pageLoader())