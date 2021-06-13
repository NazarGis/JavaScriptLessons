// let x = prompt("Enter a text:");
// document.write(x);

// let p = document.querySelector('p');

// p.style.color = 'red';

// let s = 'text';
// console.log(s[0]);

//DOM //document object model
//BOM //browser object model

// let arr = new Array();
// let arr = new Array(1,2,3);
// let arr = new Array(1, 'text', true);
// let arr = [];
// let arr = [1,2,3,2,5,7,8,9,2,2,4,6];

// arr[0] = 100;
// // arr[10] = 20;
// console.log(arr);
// arr.push(55);//записує елемент масива в кінець
// console.log(arr);
// arr.pop()//видаляє останній елемент
// console.log(arr);
// arr.unshift(0,2,77);//дописує з початку
// console.log(arr);
// arr.shift();//видаляє перший елемент
// console.log(arr);
// //console.log(arr.indexOf(2,2));//виводить індекс

// let x = 2;
// let c, y;
// while(true){
//     y = arr.indexOf(x, y+1);
//     if ( y == -1 ){
//         console.log(c? 'End of array!':'Not found element!');
//         break
//     }
//     c = y;
//     console.log(y);
// }

// console.log(arr.lastIndexOf(5));
// console.log(arr.lastIndexOf(2, 9));
// console.log(arr.reverse());
// console.log(arr.sort());

// let arr1 = [1,2,3];
// let arr2 = arr1;
// let arr3 = arr1.slice();
// arr1[0] = 0;
// console.log(arr2);
// console.log(arr3.length);
// console.log(arr3.join("\t"));
// console.log(typeof(arr3));


// let s = "text";

// console.log(s.split('').reverse().join(''));

//split розбиває слово на масив

// s = 'one two three'

// console.log(s.split(' '));

//arr.splice(0 , 5); //видаляє з нульового елемента п'ять елементів
//console.log(arr);

//arr.copyWithin(2,0,2);//міняє елемент 2 з 0 позиції на 2 позицію
//console.log(arr);
// console.log(...arr);//spread-оператор виводить дані з масиву

// function name(...params){
//     console.log(params)
// }
// name();

// function name(a,b,...args){ //rest оператор формує масив з набору даних
//     console.log(params)
// }
// name();

// let arr1 = [1,2];
// let arr2 = [3,5];
// let arr3 = arr1.concat(arr2);//або let arr3 = [].concat(arr1,arr2);
// console.log(arr3);

// function name(x){
//     return x+1
// }

// console.log(name(5));

// let name1 = x=>x+1
// console.log(name1(7));

// let name1 = x=>{
//     x = x*2
//     return x+1
// }


// console.log("     Text     ".trim());

// let arr = [
//     [1,2,3,4,5],
//     [5,6,8,9,0]
// ];
// console.log(arr[1][0]);

//------------------створення масива
let temp = [];

for (let i=1; i<=30; i++){
    let day = []
    for(let j=1; j<=24; j++){
    day.push(Math.ceil(Math.random()*10+20))
    }
    temp.push(day)
}
console.log(temp);

let root = document.querySelector('.root');//знайшли div

//---------------------- заповнення таблиці

let table = document.createElement('TABLE');//створили таблицю
for (let i=1; i<=30; i++){
    let tr = document.createElement('TR');
    for(let j=1; j<=24; j++){
    let td = document.createElement('TD');
    td.textContent = temp[i-1][j-1];
    tr.appendChild(td);
    }
    table.appendChild(tr);
}
root.appendChild(table);


//-----------------------------------перший рядок

let tr = document.createElement('TR');
    for(let j=1; j<=24; j++){
    let th = document.createElement('TH');
    th.textContent = j
    tr.appendChild(th);
    }
table.append(tr);

table.insertAdjacentElement('afterbegin', tr);

//------------------------------------перший стовпчик

let t_rows = document.querySelectorAll('.root table tr');
console.log(t_rows);
for(let i=0; i<t_rows.length; i++){
    let th = document.createElement('TH');
    th.textContent = i ? i: "";
    t_rows[i].prepend(th);
}

//-----------------середнє арифметичне

let th = document.createElement('TH');
th.textContent = 'Average';
t_rows[0].appendChild(th) ;

for(let i=1; i<t_rows.length; i++){
    let td = document.createElement('TD');
    td.textContent = (temp[i-1].reduce((acc, val) => acc + val)/temp[i-1].length).toFixed(2);
    t_rows[i].append(td);
}

//----------- Домашнє завдання Мінімальні та максимальні значення температур

function min(){
    for(let i=1; i<t_rows.length; i++){
        let td = document.createElement('TD');
        td.textContent = Math.min(...temp[i-1]);
        t_rows[i].append(td);
    }
    
}

function max(){
    for(let i=1; i<t_rows.length; i++){
        let td = document.createElement('TD');
        td.textContent = Math.max(...temp[i-1]);
        t_rows[i].append(td);
    }
}

function hours(){
    for(let i=1; i<t_rows.length; i++){
        let td = document.createElement('TD');
        td.textContent = temp[i-1].indexOf(Math.max(...temp[i-1]))+1;
        t_rows[i].append(td);
    }
}

function create_min(node,zag,func){
    let th = document.createElement('TH');
    th.textContent = zag;
    t_rows[node].appendChild(th);
    func;
}


function create_max(node,zag,func){
    let th = document.createElement('TH');
    th.textContent = zag;
    t_rows[node].appendChild(th) ;
    func;
}

function create_hours(node,zag,func){
    let th = document.createElement('TH');
    th.textContent = zag;
    t_rows[node].appendChild(th);
    func;
}
create_min(0,'min',min());
create_max(0,'max',max());
create_hours(0,'t=max hours',hours());

//-----------Додаткові завдання

let root2 = document.querySelector('.root2');

//-----------1

let array1 = [2,-5,-9,2,-4,5,34,-11,2,3,-4,5,-6,9];
document.write("Завдання №1: Дано масив: " + array1 +"<br>")
let arr1_neg = array1.filter( array1 => array1 < 0);
document.write("Cума від'ємних елементів масиву = " + arr1_neg.reduce((acc, val) => acc + val) + "<br>");

//-----------2

let array2 = [45,65,48,52,45,-78,-96,25,14,25,45]
document.write("<br>Завдання №2: Дано масив: " + array2)
document.write("<br>Номер максимального елемента масиву = " + array2.indexOf(Math.max(...array2))+"<br>")

//-----------3

let array3 = [];

for ( let i=1; i<=100; i++){
    array3.push(Math.round(Math.random()*10));
}
document.write("<br>Завдання №3: Дано масив: " + array3 + "<br>")
document.write("Сума елементів масиву = " + array3.reduce((acc,val) => acc + val) +"<br>");

//----------4

let array4 = []
for ( let i=1; i<=50; i++){
    array4.push(Math.round(Math.random()*10));
}
document.write("<br>Завдання №4: Дано масив: " + array4 + "<br>")

let arr4_nepar = array4.filter(array4 => array4 % 2 != 0) ;

let arr4_dob = arr4_nepar.reduce((a,b) => a*b);

document.write("Добуток непарних елементів масиву = " + arr4_dob);