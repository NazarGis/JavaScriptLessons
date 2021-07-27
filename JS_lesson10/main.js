// //let arr = [1,2]

// // let arr = [
// //     ['Mn', 'Tu', 'We'],
// //     [ 35,   33,   30]
// // ]

// // arr = []
// // console.log(arr)

// // let obj = new Object()
// // console.log(obj)

// // let person = Object()
// // person.name = 'Bob'
// // person.job = 'Builder'
// // person.age = 28
// // console.log(person)
// // console.log(person.name)
// // console.log(person['name'])


// // let script = document.querySelector('script')
// // console.log(script.style)

// // let Person = {'name':'John', 'job':'engineer', 'age':30}
// // Person.age = 31
// // console.log(Person)

// let person = function(name='unnamed', job= 'undefined', gender='undefined', brd = new Date){
//     return {
//         'name':name,
//         'job': job,
//         'gender': gender,
//         'brd':new Date(brd),
//         'age': function(){
//             return new Date().getFullYear() - this['brd'].getFullYear()
//         },
//         'birth_date': function(){
//             return this['brd'].toLocaleDateString()
//         }
//     }
// }

// let bob = person('Bob','Builder', 'Male', '1.1.1993')
// let bill = person('Bill','Engineer', 'Male', '1.1.1990')
// console.log(bob)

// // console.log(bob.age)

// // let female = person()
// // female.gender = 'female'
// // console.log(female)

// // console.log(bob.hasOwnProperty('name'))

// // for (key in bob){
// //     if(typeof(bob[key])!== 'function')
// //         console.log(key, ':', bob[key])
// //     else
// //         console.log(key, ':', bob[key]())

// // }

// // console.log(Object.keys(bob))
// // console.log(Object.values(bob))
// // console.log(Object.entries(bob))
// // console.log(Object.freeze(bob)) //забороняє вносити зміни об'єкт
// // console.log(Object.seal(bob)) //забороняє змінювати структуру об'єкта, але дозволяє змінювати значення

// // console.log(bob)
// // console.log(bill)

// // console.log(Object.is(typeof(bob),typeof(bill)))


// // let arr = [11, 22]

// // for (item of arr){
// //     console.log(item)
// // }

// // rob = Object.assign({}, bob, {'hoby':'fishing'})
// // console.log(rob)

// let dog = (name,age,color)=>{
//     return{
//         name, age, color,
//         'voice': ()=> console.log('Woo woof!!!'),
//         'info': function(){
//             console.log(this.name, this.age, this.color)
//         }
//     }
// }
// let dog_1 = dog('Rex', 2, 'black')
// console.log(dog_1)
// dog_1.voice()
// dog_1.info()

let rect = function(x1, y1, x2, y2, id, color = 'black'){
    return{
        'x1': x1<x2 ? x1 : x2, 
        'y1': y1<y2 ? y1 : y2, 
        'x2': x1>x2 ? x1 : x2, 
        'y2': y1>y2 ? y1 : y2,
        'id':id,
        'draw': function(){
            let figure = document.createElement('div')
            figure.setAttribute('id', id)
            figure.style.width = this.width() + 'px'
            figure.style.height = this.height() + 'px'
            figure.style.top = this.y1 + 'px'
            figure.style.left = this.x1 + 'px'
            figure.style.backgroundColor = color
            document.querySelector('.canvas').append(figure)
            return "Figure was added"
        },
        'width': function(){
            return Math.abs(this.x2 - this.x1)
        },
        'height': function(){
            return Math.abs(this.y2 - this.y1)
        },
        'moveX': function(x){
            this.x1 = this.x1 + x
            this.x2 = this.x2 + x
            document.getElementById(this.id).style.left = this.x1 + 'px'
        },
        'setColor': function(cl){
            document.getElementById(this.id).style.backgroundColor = cl
        }
    }
}

function change_color(object, color){
    object.setColor(color)
}


rect_1 = new rect(100, 100, 300, 300,'r1', 'green')
rect_1.draw()

rect_1.setColor('red')
change_color(rect_1, 'blue')

let buttonX = document.querySelector('button').addEventListener('click', function(event){
    rect_1.moveX(+document.getElementsByName('xCoord')[0].value)
})