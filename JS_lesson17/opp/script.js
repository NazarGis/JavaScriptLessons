// console.log(document.querySelector('title').tagName)

// let arr = []

// console.log(typeof(arr))

//abstraction - будівля(стіни, дах, двері, підлога), креслення
//inheritance - будинок(к-сть, поверхів, вікна),                завод, магазин, гараж
//              -> одноповерховий, багатоповерховий, котедж        -> військовий, автомобільний
//encapsulation - (цегла, ЗБК, блоки) - приховані елементи
//polimorfism - (опалення, відкрити)

// function ShowMessage(text, color, container){
//     let p = `<p style = 'background-color:${color}'>${text}</p>`
//     document.querySelector(container).innerHTML = p

// }
// ShowMessage('Message1', 'yellow', '.wrapper-1')
// ShowMessage('Message2', 'green', '.wrapper-2')

class ShowMessage{
    constructor (text, color, container){
        this.text = text
        this.color = color
        this.container = container
    }
    show(){
        document.querySelector(this.container).innerHTML = `<p style = 'background-color:${this.color}'>${this.text}</p>`
    }
}

class ShowMessageIcon extends ShowMessage{
    constructor(text, color, container, icon){
        super(text, color, container)
        this.icon = icon
    }
    show(){
        document.querySelector(this.container).innerHTML = `<p style = 'background-color:${this.color}'><span class = '${this.icon}'></span>${this.text}</p>`
    }

}

let message_1 = new ShowMessage('Message1', 'yellow', '.wrapper-1')
message_1.color = 'blue'
message_1.show()

let message_2 = new ShowMessage('Message2', 'yellow', '.wrapper-2')
message_2.show()

let message_3 = new ShowMessageIcon('Message3', 'gray', '.wrapper-3', 'fas fa-sms')
message_3.show()

class Mammal{
    constructor(name, age, color){
        this.name = name
        this.age = age
        this.color = color
    }
}

class Human extends Mammal{
    constructor(name, age, color, gender){
        super(name, age, color)
        this.gender = gender
    }
    speak(){
        console.log(`Hello, my name ${this.name}`)
    }
}

class Dog extends Mammal{
    constructor(name, age, color, gender, breed){
        super(name, age, color)
        this.gender = gender
        this.breed = breed
    }
    speak(){
        console.log('Woof Woof !!!')
    }
}

let Bob = new Human('Bob', 20, 'brown', 'male')
Bob.speak()

let Lisa = new Human('Lisa', 22, 'white', 'female')
Lisa.speak()

let Bobik = new Dog('Bobik', 3, 'black', 'male', 'buldog')
Bobik.speak()



let data = function(x){
    let encapsulated_value = 10
    let enc = function(y){
        return encapsulated_value + y
    }
    return enc(x)
}

console.log(data(5))

function encapsulation(add){
    let x = 10
    return x + add
}

console.log(encapsulation(5))