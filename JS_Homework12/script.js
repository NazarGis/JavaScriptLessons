let $input = document.querySelectorAll('input'),
    $button = document.querySelector('button'),
    $inputEmail = document.querySelector('input[name = "email"]'),
    $inputPassword = document.querySelector('input[name = "password"]'),
    $inputConfirm = document.querySelector('input[name = "confirm"]')
   
let userData = function(firstName, lastName, emailAdress, bussinesPhone, companyName,  jobTittle, street_1, city, year, password, confirmPassword, topic){
    return{
        firstName, lastName, emailAdress, bussinesPhone,companyName,  jobTittle, street_1, city, year, password, confirmPassword, topic
    }
}

$button.addEventListener('click', (ev)=>{
    ev.preventDefault()
    let fields = true
    if(document.querySelector('input[name = "lastname"]').value.trim() == '' || document.querySelector('input[name = "companyname"]').value.trim() =='' || document.querySelector('input[name = "topic"]').value.trim()=='' || document.querySelector('input[name = "firstname"]').value.trim()==''|| $inputEmail.value.trim()==''|| $inputPassword.value.trim()==''|| $inputConfirm.value.trim()==''){
        fields = false
    }
    if($inputEmail.value.trim().includes('@') && $inputEmail.value.trim().includes('.')){
        $inputEmail.style.border = '2px solid green'
    }
    else{
        $inputEmail.style.border = '2px solid red'
    }
    if($inputPassword.value.trim().length >= 8){
        $inputPassword.style.border = '2px solid green'
    }
    else{
        $inputPassword.style.border = '2px solid red'
    }
    if($inputPassword.value.trim() == $inputConfirm.value.trim() && $inputConfirm.value.trim()!=='' ){
        $inputConfirm.style.border = '2px solid green'
    }
    else{
        $inputConfirm.style.border = '2px solid red'
    }
    if($inputEmail.value.trim().includes('@') && $inputEmail.value.trim().includes('.') && $inputPassword.value.trim().length >=8 && $inputPassword.value.trim() == $inputConfirm.value.trim() && fields){
            $inputEmail.style.border = '2px solid green'
            $inputPassword.style.border = '2px solid green'
            $inputConfirm.style.border = '2px solid green'
            let user = userData(
            document.querySelector('input[name = "firstname"]').value.trim(),
            document.querySelector('input[name = "lastname"]').value.trim(),
            document.querySelector('input[name = "email"]').value.trim(),
            document.querySelector('input[name = "phone"]').value.trim(),
            document.querySelector('input[name = "companyname"]').value.trim(),
            document.querySelector('input[name = "job"]').value.trim(),
            document.querySelector('input[name = "street"]').value.trim(),
            document.querySelector('input[name = "city"]').value.trim(),
            document.querySelector('input[name = "year"]').value.trim(),
            document.querySelector('input[name = "password"]').value.trim(),
            document.querySelector('input[name = "confirm"]').value.trim(),
            document.querySelector('input[name = "topic"]').value.trim()
        )
        for (input of $input){
            input.value = ''
        }
        alert('Привіт ' +  user.firstName + ' !')
        console.log(user)
        }
        else{
            $inputEmail.style.border = '2px solid red'
        }  
})