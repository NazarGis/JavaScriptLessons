//-----1

// let numb1 = +prompt("Введіть кількість символів: ");
// let i=0;
// while( i < numb1){
//     alert("#");
//     ++i;
// }

//-----2

// let numb2 = +prompt("Введіть число: ");
// let i = 0;
// while ( i < numb2){
//     alert(--numb2);
//     i;
// }

//-----3
// let numb3 = +prompt("Введіть число: ");
// let step = +prompt("Введіть степінь: ");
// let i = 1;
// let result = 1;
// while (i <= step){
//     result = result * numb3;
//     ++i;
// }
// alert("Результат: " + result);


//-----4

//-----5
// let numb5 = +prompt("Введіть число: ");
// let i = 1;
// let res = 1;
// while ( i <= numb5){
//     res *= i;
//     ++i;
// }
// alert("Результат: " + res);

//----- do while 

//----- 1

// do{
//     res1 = +prompt("Введіть результат виразу 2+2*2: ");
//     } while(res1 != 6);
//     alert("OK!")

//-----2
// let res2 = 1000;
// let i = 0;
// do{
//     res2 = res2/2;
//     ++i;
// }while (res2 >= 50);
// alert(`Резульат: ${res2}`);
// alert(`Кількість ітерацій: ${i}`);


//-----3
// let n3 = +prompt("Введіть дільник: ");
// for( let i = 1; i < 100; ++i){
//     if(i % n3 == 0){
//         alert(i);
//     };
// }

//-----4
// let min = +prompt ("Введіть мінімальне значення діапазону: ");
// let max = +prompt ("Введіть максимальне значення діапазону: ");
// for( let i = min; i<max; i+=4){
//     alert(i);
// }

//-----5
let number5 = +prompt('Введіть число: ');
for( let i = 2; i < number5; ++i ){
    alert( (number5 % i == 0) ? "Число складне" :"Число просте");
    break;
}

