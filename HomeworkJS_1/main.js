//-----1

let name = prompt("Введіть Ваше ім'я");
alert(`Привіт, ${name}!`)

//-----2

let birth_year = +prompt("Введіть Ваш рік народження:");
const year = 2021;
alert(`Ваш вік: ${year - birth_year}`);

//-----3

let square_side = +prompt("Введіть довжину сторони квадрата:");
alert(`Периметр квадрата: ${square_side * 4}`);

//-----4

let radius = +prompt("Введіть радіус кола:");
alert(`Площа кола: ${Math.PI * (radius ** 2)}`);

//-----5

let dist = +prompt("Введіть відстань між містами (в км):");
let hour = +prompt("Введіть час, за який хочете дістатись (год):");
alert(`Необхідна швидкість: ${dist / hour} км/год`);

//-----6

let sum = +prompt("Введіть суму в долларах:");
const euro = 1.22;
alert(`Сума в євро: ${sum / euro}`);

//-----7
let flash_memory = +prompt("Введіть обсяг пам'яті в ГБ:");
alert(`Кількість файлів: ${Math.floor(flash_memory * 1024 / 820)}`);