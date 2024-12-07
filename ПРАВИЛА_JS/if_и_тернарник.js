/*
Почему if позволяет делать push в массив, а тернарный оператор не позволяет?
Отличие заключается в том, как работают if и тернарный оператор (? :) с точки зрения синтаксиса и семантики.

1. if — используется для выполнения блока кода на основе условия. Он не требует возвращаемого значения как тернариник. В нем пушим или
 просто делаем деиствия без присваивания значения и его возврата или просто присваивания и отрисовки как в тернарнике

let arr = [];
if (true) {
    arr.push(1); // Работает
}
console.log(arr); // [1]
if позволяет писать код в теле блока { ... }, который может содержать любые инструкции, в том числе изменения массива, присвоения и вызовы функций.
//  ------------------------------------------------------------------------------------------------------------------------------------
2. Тернарный оператор — "выражение"
Тернарный оператор используется "для вычисления и возврата значения" на основе условия. Его синтаксис:

condition ? value_if_true : value_if_false;
Каждая из ветвей должна быть выражением, которое возвращает значение. Выражение — это то, что можно присвоить переменной или использовать в другом выражении.

Пример:
let result = true ? 'yes' : 'no'; // Работает, возвращает строку
 */
