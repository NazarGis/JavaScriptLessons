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