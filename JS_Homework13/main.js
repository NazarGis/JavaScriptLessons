
let $btn1 = document.getElementById('LukeBtn'),
    $btn2 = document.getElementById('VaderBtn'),
    $btn3 = document.getElementById('KenobiBtn'),
    $tableLuke = document.querySelector('.Luke'),
    $tableVader = document.querySelector('.Vader'),
    $tableKenobi = document.querySelector('.Kenobi'),
    $tdLuke = document.querySelectorAll('.Luke td'),
    $tdVader = document.querySelectorAll('.Vader td'),
    $tdKenobi = document.querySelectorAll('.Kenobi td'),
    personURL = 'https://swapi.dev/api/people/1/',
    personURLVader = 'https://swapi.dev/api/people/4/',
    personURLKenobi = 'https://swapi.dev/api/people/10/'
     
function loadData(url,td1,td2,td3,td4,td5){
    let server = new XMLHttpRequest()
    let response
    server.open('GET', url)
    server.send()
    server.onload = function(){
        if(server.status !== 200){
        console.log(`SERVER: ERROR CODE ${server.status}. ${server.statusText}`)
    }
    else{
        response = JSON.parse(server.response)
        console.log(response)
        showData(response,td1,td2,td3,td4,td5)
    }
    }
    return response
}

function showData(obj,td1,td2,td3,td4,td5){
    for(key in obj){
        if(!Array.isArray(obj[key]) && key !== 'url' && key !== 'edited' && key !== 'created' && key !== 'homeworld' && key !== 'starships' && key !== 'vehicles' && key !== 'films'){
            console.log(`${key} : ${obj[key]}`)   
            let title = key.replace('_',' ')  
            title = title.split('')
            title[0] = title[0].toUpperCase()      
            let html = `<b>${title.join('')}</b> <i>${obj[key]}</i><br>`
            td1.insertAdjacentHTML('beforeend', html)
        }
        if(key === 'homeworld'){
            loadData(obj[key],td2) 
        }
    }
    if(key === 'starships'){
        loadData(obj[key],td3)
    }
    setTimeout(() =>{
        if(Object.keys(obj).indexOf('starships')>0){
            for(link of obj['starships']){
                loadData(link,td3)
            }
        }   
    },100)
    if(key === 'vehicles'){
        loadData(obj[key],td4)
    }
    setTimeout(() =>{
        if(Object.keys(obj).indexOf('vehicles')>0){
            for(link of obj['vehicles']){
                loadData(link,td4)
            }
        }   
    },100)
    if(key === 'films'){
        loadData(obj[key],td5)
    }
    setTimeout(() =>{
        if(Object.keys(obj).indexOf('films')>0){
            for(link of obj['films']){
                loadData(link,td5)
            }
        }   
    },100)
    
    
}

loadData(personURL,$tdLuke[0],$tdLuke[1],$tdLuke[2],$tdLuke[3],$tdLuke[4])
loadData(personURLVader,$tdVader[0],$tdVader[1],$tdVader[2],$tdVader[3],$tdVader[4])
loadData(personURLKenobi,$tdKenobi[0],$tdKenobi[1],$tdKenobi[2],$tdKenobi[3],$tdKenobi[4])

$btn1.addEventListener('click', ()=>{
    if($tableLuke.style.display == 'block'){
        $tableLuke.style.display = 'none'
    }
    else{
        $tableLuke.style.display = 'block'
        $tableVader.style.display = 'none'
        $tableKenobi.style.display = 'none'
    }   
})
$btn2.addEventListener('click', ()=>{
    if($tableVader.style.display == 'block'){
        $tableVader.style.display = 'none'
    }
    else{
        $tableVader.style.display = 'block'
        $tableLuke.style.display = 'none'
        $tableKenobi.style.display = 'none'
    }   
})
$btn3.addEventListener('click', ()=>{
    if($tableKenobi.style.display == 'block'){
        $tableKenobi.style.display = 'none'
    }
    else{
        $tableKenobi.style.display = 'block'
        $tableVader.style.display = 'none'
        $tableLuke.style.display = 'none'
    }   
})
