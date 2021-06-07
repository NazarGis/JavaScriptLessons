//--------цикли

// let number = +prompt ('enter a number:');
// let i = 1;
// let result = 1;
// while (i <= number){
//     result *= i;
//     ++i;
// }
// alert('result: '   + result);

// let count = +prompt("Enter a counter: ");

// let i = 0
// while (i<count)
// {
//    console.log("Hello");
//    console.log("!");
//     ++i;
// }

// let weekday = +prompt("Enter a week day (1-7): ");

// while ( weekday < 1 || weekday >7){
//     // console.warn("Invalid value ! Please enter again: ");
//     weekday = +prompt("Enter a week day (1-7): ");
// }
//----------- do while
// do{
//     weekday = +prompt("Enter a week day (1-7): ");
// } while(weekday < 1 || weekday >7);
// alert("OK!")
//----------- for

//for (iterator = start value; condition; expression){ code....};
let count = +prompt("Enter a counter: ");
for ( let i = 0; i < count; ++i){
    console.log("Hello");
   console.log("!");
}