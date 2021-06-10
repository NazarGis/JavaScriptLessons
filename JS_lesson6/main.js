// arr = (param) =>{
//     param++;
//     return param;
// }
// console.log(arr(4));

// let x = 5;
// function* gen(){
//     yield ++x;
// }

// console.log(gen().next().value);
// console.log(gen().next().value);
// console.log(gen().next().value);
// console.log(gen().next().value);
// console.log(gen().next().value);


// //incapsulation

// function inc(add){
//     let x = 10;
//     return x + add;
// }
// console.log(inc(0));

// function up(param){
//     function down(arg){
//         return arg + 2;
//     }
//     return down(param);
// }
// console.log(up(1));


// text = '                 Some text        ';
// console.log(text.trim());
// console.log(text.length);
// let mas = text.split('');
// console.log(mas);

// let email = 'mail@gmail.com';

// console.log(email.split('@')[0]);
// console.log(email.split('.')[1]);

let $li = document.getElementsByTagName('li');
console.log($li);

const $par = document.getElementById('par');
console.log($par);

let $text = document.getElementsByClassName('text');
console.log($text);

let $title2 = document.querySelector('p + h3');
console.log($title2);

let $plist = document.querySelectorAll('p');
console.log($plist);

let $buttons = document.querySelectorAll('button');
console.log($buttons);

for( let i = 0; i < $plist.length; i++){
    let flag = true;
    $plist[i].addEventListener('click', function(){
        if (flag){
        this.style.color = 'red';
        flag = false;
        }
        else{
            this.style.color = 'black';
            flag = true;
        }
    })                       //прослушка події
}

// for( let i = 0; i < $plist.length; i++){
//     $plist[i].addEventListener('click', ()=>{
//         $plist[i].style.color = 'red';
//     })                      
// }

// for( let i = 0; i < $plist.length; i++){
//     $plist[i].addEventListener('click', (event)=>{
//         event.target.style.color = 'red';
//     })                      
// }

for( let i = 0; i < $plist.length; i++){
    let flag = true;
    $plist[i].addEventListener('click', function(){
        this.style.color = flag? 'red' : 'black';
        flag = !flag;
        
    })                       //прослушка події
}

let flag = true;
for( let i = 0; i < $plist.length; i++){
    flag = true;
    $plist[i].addEventListener('click', clicker)                      
}

function clicker(){
    this.style.color = flag? 'red' : 'black';
    flag = !flag;
}


function fact_1(n){
    f = 1;
    for ( let i = 1; i <= n; i++ ){
        f *=i; 
    }
    return f;
}
console.log(fact_1(5));

function fact_rec(n){
    if(n == 0) return 1;
    return fact_rec(n-1)*n;
}



console.log(fact_rec(5));

