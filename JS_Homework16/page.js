let $p = document.querySelector('p'),
    $profileLetter = document.querySelector('.profile h1'),
    $profile = document.querySelector('.profile'),
    $overlay = document.querySelector('.overlay'),
    $closeBtn = document.querySelector('.close')

activeUser = localStorage.getItem('activeUser')
activeUser = JSON.parse(activeUser)

$p.textContent = 'Hello,' + activeUser.name + '!'
$profileLetter.textContent =  activeUser.name.split('')[0]
$profile.addEventListener('click', function(event){
    $overlay.style.display = 'flex'
    
})
$closeBtn.addEventListener('click', function(event){
    $overlay.style.display = 'none'
})

infoForm.infoName.setAttribute('value', activeUser.name)
infoForm.infoEmail.setAttribute('value', activeUser.email)
infoForm.infoLogin.setAttribute('value', activeUser.login)
infoForm.infoPassword.setAttribute('value', activeUser.password)


