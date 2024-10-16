// Дано:
let nums = [1, 2, 3, 4, 23, 2]

// ОР: console.log(currledSum(3)(4)) // Должно быть 7

// Решение: каррирование возвращает функцию с цепочкой вызовов:
const currledSum = (x) => {
    return (c) => c + x
}
console.log(currledSum(3)(4))

/*
Каррирование_преобразуем функцию f(a, b, c), значит вызов функции f(a) вернул другую функцию, которую вызываем с параметром b, потом возвращается третья функция ее вызываем с параметром с,
Каррирование – продвинутая техника для работы с функциями. Она используется не только в JavaScript, но и в других языках.
Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c).
Каррирование не вызывает функцию. Оно просто трансформирует её.
Давайте сначала посмотрим на пример, чтобы лучше понять, о чём речь, а потом на практическое применение каррирования.
Создадим вспомогательную функцию curry(f), которая выполняет каррирование функции f с двумя аргументами. Другими словами, curry(f) для функции f(a, b) трансформирует её в f(a)(b).

function curry(f) { // curry(f) выполняет каррирование
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

// использование
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

alert( curriedSum(1)(2) ); // 3
Как вы видите, реализация довольна проста: это две обёртки.

Результат curry(func) – обёртка function(a).
Когда она вызывается как sum(1), аргумент сохраняется в лексическом окружении и возвращается новая обёртка function(b).
Далее уже эта обёртка вызывается с аргументом 2 и передаёт вызов к оригинальной функции sum.

 */

