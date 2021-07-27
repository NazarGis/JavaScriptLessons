//Ajax


// Client(browser) to server -> DataBase -> Server -> Client

// console.log('Client: want get list of users')
// console.log('....waiting')
// console.log('server:ask list of users from DataBase ')
// console.log('....waiting')
// console.log('DataBase: create list of users')
// console.log('....waiting')
// console.log('Server: transform and send list from client')
// console.log('....waiting')
// console.log('Client: get and show list of users')
// console.log('....waiting')

//-----------------------------------------------

// console.log('-------------------')
// console.log('Client: want get list of users')
// console.log('....waiting')
// setTimeout(()=>{
//     console.log('server:ask list of users from DataBase ')
//     console.log('....waiting')
//     setTimeout(()=>{
//         console.log('DataBase: create list of users')
//         console.log('....waiting')
//         setTimeout(()=>{
//             console.log('Server: transform and send list from client')
//             console.log('....waiting')
//             setTimeout(()=>{
//                 console.log('Client: get and show list of users')
//                 console.log('....waiting')
//             },1000)
//         },1000)
//     },1000)   
// },2000)




// let i = 1
// setInterval(() => {
//     console.log(i)
//     i++
// }, 1000);

//Promise

// console.log('-------------------')
// console.log('Client: want get list of users')
// console.log('....waiting')

// let promise = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('server:ask list of users from DataBase ')
//         console.log('....waiting')
//         resolve('Server...')
//     }, 2000);
// })

// promise.then(function(){
//     console.log('THEN')
//     return new Promise(function(resolve, reject){
//         setTimeout(() => {
//             let USERS = [
//                 {'userID':'id1', 'name':'Bob'},
//                 {'userID':'id2', 'name':'Rob'}
//             ]
//             console.log('DataBase: create list of users')
//             console.log('....waiting')
//             resolve(USERS)
//             reject('DB is not working!')
//         }, 1000);
//     })
// }).then(function(dbUsers){
//     return new Promise(function(resolve, reject){
//         setTimeout(() => {
//             console.log(dbUsers)
//             let users = dbUsers.map(user =>{
//                 return{
//                     id : Math.floor(Math.random()),
//                     name: user.name
//                 }
//             })
//             console.log('DataBase: create list of users')
//             console.log('....waiting')
//             resolve(users)
//         }, 1000);
//     })
// }).then(function(userList){
//         setTimeout(() => {
//             console.log('Client: get and show list of users')
//             console.log('....waiting')
//             for (user of userList){
//                 console.log(user)
//             } 
//         }, 1000);
// }).catch(function(error){
//     console.log('Catch:', error)
//     console.log(promise)
// }).finally(function(){
//     console.log('The end!')
//     console.log(promise)
// })

loadBtn.addEventListener('click', load)



function load(){
    let url = 'https://jsonplaceholder.typicode.com/todos'

    fetch(url)
    .then(response => response.json())
    .then(list =>{
        console.log(list)
        let $toDoList = document.querySelector('ul.to-do-List')
        $toDoList.innerHTML = ''
        for(task of list){
            let $li = document.createElement('LI')
            $li.textContent = `${task.id} ${task.title}`
            $li.classList.add(task.completed ?'completed':'incompleted')
            $toDoList.append($li)
        }
    })
}