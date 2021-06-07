// let a=3;
// let b=5;
// Логічні оператори 
//>< >= <= == === != !==


// console.log(`a>b: ${a > b}`);

// a = +prompt('enter a:');
// b = +prompt('enter b:');

// let isEquals = a==b;

// console.log(`isEquals: ${isEquals} : ${typeof(isEquals)}`);

// if (isEquals){
//     //виконується якщо умова true
//     alert('Equals!');
// }
// else{
//       //виконується якщо умова false
//       alert('NotEquals!')
// }

// if((a+b) % 2 == 0){
//     console.warn('sum is even');
// }
// else{
//     console.error('sum is odd');
// }

// let year = +prompt('Enter year: ', '2021');
// if(year % 4 == 0){
//     console.log('Prime year');
// }

// let price = +prompt('Enter price:');

// if(isNaN(price)){
//     console.error('Incorrect value');
// }
// console.log(`Price: ${number}`);

// if(price >= 1000){
//     console.log('Your discount 40%');
// }
// else if(price >= 500){
//         console.log('Your discount 25%');
// }
// else if(price >= 200){
//             console.log('Your discount 10%');
// }
// else{
//         console.log('You have no discount');
// }

// let t = +prompt('enter a temperature from 10C to 25C:');
// if(t >= 10 && t <= 25){
//             console.log('correct!');
//     }
// else{
//     console.warn('incorrect!');
// }

// let color = prompt ('enter color:');
// //RGB
// if(color == 'red' || color=='green' || color=='blue'){
//     console.log("it's RGB color!");
// }
//логічне 'і' - &&
//логічне 'або' - ||
//логічне 'не' - !

//тернарний оператор {умова} ? "виконується код якщо умова true" : "виконується якщо false"
// let num = 1;
// console.log((num == 1) ? 'true' : 'false');

// let age = +prompt('enter your age:');
// let ticketPrice = (age<18) ? 50 : 100;
// // if( age < 18) ticketPrice=50;
// // else ticketPrice = 100;
// console.log(`ticket price = ${ticketPrice}`);


//-----------------------switch

// let mark = +prompt('enter a mark:');

// if (mark == 5) console.log('very good');
// else if (mark == 4) console.log('good enough');
// else if (mark == 3) console.log('normal');
// else if (mark == 2) console.log('bad');
// else if (mark == 1) console.log('very bad');
// else console.log('incorrect mark');

// switch(mark){
//     case 5: console.log('very good'); 
//         break;
//     case 4: console.log('good enough');
//         break;
//     case 3: console.log('normal');
//         break;
//     case 2: console.log('bad');
//         break;
//     case 1: console.log('very bad');
//         break;
//     default: console.log('incorrect mark');
//         break;
// }

// let month = prompt("Enter a number of month:", "0");
// switch (month) {
//     case 1:
//     case 2: 
//     case 12:
//         console.log("Winter");
//     break;
//     case 3:
//     case 4: 
//     case 5:
//         console.log("Spring");
//     break;
//     case 6:
//     case 7: 
//     case 8:
//         console.log("Summer");
//     break;
//     case 9:
//     case 10: 
//     case 11:
//         console.log("Autumn");
//     break;
//     default:
//         break;
// }

// switch (true) {
//     case month == 1 || month == 2 || month == 12:
//         console.log("Winter");
//         break;
//     case month >= 3 && month <= 5:
//         console.log("Spring");
//         break;
//     case month >= 6 && month <= 8:
//         console.log("Summer");
//         break;
//     case month >= 9 && month <= 11:
//         console.log("Autumn");
//         break;
//     default:
//         console.error("Invalid month!");
//         break;
// }



