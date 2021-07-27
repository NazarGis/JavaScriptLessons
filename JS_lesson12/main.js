// //api прикладний програмний інтерфейс джерела передачі даних між різними серверами


// let person = {
//     'firstName':'Bob',
//     'lastName':'Marli',
//     'age':50,
//     'hair':'black',
//     'eyes':'brown'
// }
// console.log(person)

// console.log(person.eyes)

// function getEyes(key, value){  //приховує значення на сервері
//     if(key === 'eyes'){
//         return undefined
//     }
//     else{
//         return value
//     }
// }
// //JSON

// json = JSON.stringify(person, getEyes)
// console.log(json)

// response = JSON.parse(json)
// console.log(response)

 //   XMLHTTPRequest  запит на сервер і отримання відповіді

// let swapi = new XMLHttpRequest()

// console.log(swapi.readyState) //readyState стан об'єкту

// const url = 'https://swapi.dev/api/people/1/'

// swapi.open('GET', url) //відправили запит на сервер
// console.log(swapi.readyState)
// swapi.send()
// swapi.onreadystatechange = function(){ //перевірка стану завантаження даних
//     if(swapi.readyState === 4)
//     {
//         console.log(swapi.readyState)
//         console.log(JSON.parse(swapi.response))
//     }
//     else{
//         console.log(swapi.readyState)
//     }
// }

// swapi.onload = function(){
//     console.log(swapi.readyState)
//     if(swapi.status !== 200){
//         console.log(`SWAPI ERROR CODE ${swapi.status}. ${swapi.statusText}`)
//     }
//         else{
//             let person = JSON.parse(swapi.response)
//             console.log(person)
//         }
//     console.log(swapi.status)
// }

// let $person = document.querySelector('.person')
// let personURL = 'https://swapi.dev/api/people/1/'

// function loadData(url){
//     let server = new XMLHttpRequest()
//     let response
//     server.open('GET', url)
//     server.send()
//     server.onload = function(){
//         if(server.status !== 200){
//         console.log(`SERVER: ERROR CODE ${server.status}. ${server.statusText}`)
//     }
//     else{
//         response = JSON.parse(server.response)
//         console.log(response)
//         showData(response)
//     }
//     }
//     return response
// }

// function showData(obj){
//     for(key in obj){
//         if(!Array.isArray(obj[key]) && !obj[key].includes('http') && !obj[key].includes('2014')){
//             console.log(`${key} : ${obj[key]}`)   
//             let title = key.replace('_',' ')  
//             title = title.split('')
//             title[0] = title[0].toUpperCase()      
//             let html = `<b>${title.join('')}</b> <i>${obj[key]}</i><br>`
//             $person.insertAdjacentHTML('beforeend', html)
//         }
//         else if(key === 'homeworld'){
//             let title = `<h3>${key.toUpperCase()}</h3>`
//             $person.insertAdjacentHTML('beforeend',title)
//             loadData(obj[key])
//         }
//     }
//     // if(key === 'starships'){
//     //     let title = `<h3>${key.toUpperCase()}</h3>`
//     //     $person.insertAdjacentHTML('beforeend',title)
//     //     loadData(obj[key])
//     // }

//     setTimeout(() =>{
//         if(Object.keys(obj).indexOf('starships')>0){
//             console.log(obj['starships'])
//             let title = `<h3>${'starships'.toUpperCase()}</h3>`
//                 $person.insertAdjacentHTML('beforeend',title)
//             for(link of obj['starships']){
//                 loadData(link)
//             }
//         }   
//     },100)
// }// затримка функції



// console.log('http'.includes('http'))
// loadData(personURL)
let $pictures = document.querySelector('.pictures')

function loadData(url){
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
            console.log(response.hits)
            for(item of response.hits){
            showData(item)
        }
        }
        }
}

function showData(obj){
                // let img = document.createElement('IMG')
                // img.setAttribute('src', obj['webformatURL'])
                // $pictures.insertAdjacentElement('beforeend', img)
            
                let video = document.createElement('iframe')
                video.setAttribute('src', obj.videos.small.url)
                $pictures.insertAdjacentElement('beforeend', video)
}

loadData('https://pixabay.com/api/videos/?key=22371672-abe5a61572365a432662dfc2c&q=yellow+flowers&pretty=true&per_page=3')