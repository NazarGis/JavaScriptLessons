//-----------1

let min = +prompt('Введіть перше число:');
let max = +prompt('Введіть друге число:');
let s = 0;
for ( let i = min; i<=max; i++){
    s += i;
}
alert(`Сума:` +s);

//----------2
 let n1 = +prompt('Введіть перше число:');
 let n2 = +prompt('Введіть друге число:');
 while (n1 != 0 && n2 != 0) {
    if (n1 > n2){
        n1 = n1 % n2;
    }        
    else{
         n2 = n2 % n1;
    }   
}
alert(`Найбільший спільний дільник= ${n1+n2}`);   

//----------3

let n3 = +prompt('Введіть число:');

for ( let i = 1; i <= n3; i++){
    if (n3 % i == 0){
        alert (i);
    }
}

//-----------4

let n4 = +prompt('Введіть число:');
let i=1;
while ((n4 /= 10) >= 1){
    i++;
}
alert(i);

//-----------5

let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
for (let i=1; i <= 10; i++){
    let n5 = +prompt('Введіть 10 чисел:');
   
    if (n5 > 0) {
        a ++;
    }
    else if (n5 < 0) {
        b ++;
    }
    else if (n5 == 0) {
        c ++;
    }
    if (n5 % 2 == 0 && n5 != 0) {
        d ++;
    }
    else if (n5 % 2 != 0 && n5 != 0) {
         e ++;
    }
}
console.log("Додатніх чисел: " + a + '\n',"Від'ємних чисел: " + b + '\n', "Нулів: " + c + '\n',"Парних чисел: " + d + '\n',"Непарних чисел: " + e + '\n');


//------------6
do{
    let num1 = +prompt('Введіть перше число:');
    let num2 = +prompt('Введіть друге число:');
    let znak = prompt ('Виберіть дію (+ - * /)');
    switch(znak){
        case '+': alert(`Результат = ${num1+num2}`);
            break;
        case '-': alert(`Результат = ${num1-num2}`);
            break;
        case '*': alert(`Результат = ${num1*num2}`);
            break;
        case '/': alert(`Результат = ${num1/num2}`);
            break;
    }
    
}while( confirm('Виконати ще одну дію ?'));

//-----------7
let n7 = +prompt ('Введіть число: ');
let shift = +prompt ('Введіть кількість цифр на яку зсунути число: ');
let arr = n7.toString().split('');
for ( let i=0; i < shift; i++){
    arr.push(arr.shift());
}
alert(arr.join(''));


//-----------8

let arr_week = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота', 'Неділя'];
let i= -1;
do{
    i++;
    i %= 7;
}while (confirm(`${arr_week[i]}. Показати наступний день ?`));  
    
//-----------9

let res = '\n';
for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 11; j++) {
        res += (i*j) + '  ';
    }    
    res += '\n';
}
console.log(res);

//-----------10

let s = 50;
let e = 100;
while( s!=e ){
    let right_number = prompt (`Ваше число менше ${s}, більше ${s}, чи дорівнює ${s}`);
    if (right_number == 'більше'){
        s = Math.round(s + ((e-s)/2));
    }
    else if (right_number == 'менше'){
        e = 50;
        s = Math.floor(e-((50+e-s)/2));
    }
    else if (right_number == 'дорівнює'){
        alert('Вітаю! Ви вгадали число!');
        break;
    }
}



