// https://www.youtube.com/watch?v=A5YpfpgEosQ
// 1 Приведение типов:
console.log(Boolean('0')) // true - тк '0' это строка
console.log(Boolean('')) // false
console.log(Number('  123  ')) // пробелы удаляться 123
// ===================================================================================================================================
// 2 Поставь + где создание массива способ верный - Создастся ли масив?
// new Array.prototype.constructor(1, 2) +
// new Array(1, 2) +
// Array(1, 2) + "рекомендовано даже без new вызывать"
// [1, 2] +
// 1..2 -
// ===================================================================================================================================
// в чем разница если я напиши Array(1, 2) и Array(2) или нет?
// const arr = Array(1, 2);
// console.log(arr); // [1, 2]
// const arr = Array(2);
// console.log(arr); // [ <2 empty slots> ] - 2 пустых элемента
// ===================================================================================================================================
console.log([].push(1, 2).unshift(3).join()) // Будет ошибка: тк push вернет "number" а в намбер нельзя вначало добавить
// цепочка по принципу возврата работает
// ===================================================================================================================================
console.log(2 && 0 && null && 0 && undefined) // 0 - тк первое falsy или последнее true
// ===================================================================================================================================
let obj = {
  '0': 1,
  0: 2, // перезапишет первое
};
console.log(obj['0'] + obj[0]) // 4 - тк 2 + 2
// ===================================================================================================================================
// Что в консоль?
let name = 'Bacя';

function sayHi() {
  console.log(name);
}

setTimeout(function () {
  let name = 'Teta';
  sayHi();
}, 1000);
// Ответ: Вася
// ===================================================================================================================================
let x = 5
console.log(x++) // 5
console.log(++x) // 6
// ===================================================================================================================================
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);
// 1 7 3 5 2 6 4
// ===================================================================================================================================
// Супер сложная!!!!!!!!! 23 мин https://www.youtube.com/watch?v=A5YpfpgEosQ - КАК РАЗМЫШЛЯТЬ В СЛОЖНЫХ ТАСКАХ!!!
console.log(1);

setTimeout(() => console.log(2));

Promise.reject(3).catch(console.log); // эта краткая запись этого: Promise.reject(3).catch((res) => console.log(3));

new Promise(resolve => setTimeout(resolve)).then(() => console.log(4));

Promise.resolve(5).then(console.log);

console.log(6);

setTimeout(() => console.log(7), 0);
// 1 6 3 5 2 4 7 - reject, resolve - это микрозадачи; макротаски: 2 - тк в коде: new Promise(resolve => setTimeout(resolve)).then(() => console.log(4));
// колбек resolve => setTimeout(resolve)) выполняется синхронно и setTimeout попадет в макротаски после вывода "2" по очередности
// добавления в очередь, то есть первее чем: setTimeout(() => console.log(7), 0);

// ===================================================================================================================================


// ===================================================================================================================================
