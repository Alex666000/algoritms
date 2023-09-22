/*
--> Как мыслить ---- АЛГОРИТМ ----:
- сначала то что знает:

1) создаем результат или масив куда должны положить элементы и возвращаем этот результат или
2) пробегаемся по строке или массиву циклом и делаем проверку -- создаем для упрощения текущий символ или проверяемое значение,
если проходит проверку добавляем в результирующий массив
3) если работает со строкой то:
- const res = []; // делаем ИТОГОВЫЙ РЕЗУЛЬТАТ -- массив потом его когда сформируем превратим в строчку
- return res.join(''); // превращаем в строчку и возвращаем --см зад. 03_

const map = {}   // заведем - "словарь" - структуру где будем хранить уникальные значения
    // все ключи - это будут уникальные символы в строке --см зад. 03_

5) Инициализируем значения так -- (всегда с нуля инициализация):
 const map = {}; // где ключ -- эта строка -- а значение сколько раз встречалась эта строка (ключ связываем с элементов масива)
 let maxFreq = 0; // сколько раз встречается строчка в массиве
 let maxFreqStr = array[0]; // самая часто-встречающаяся строчка

 6) Наглядно в консоле браузеоа проверять работу методов

________________________________________________________________________________________________________
Задача:
01_### Уникальность всех символов в строке
Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: `‘a’` и `‘A’` разные символы.
________________________________________________________________________________________________________________________________
-  lastIndexOf() -- возвращает индекс последнего вхождения указанного значения в строковый объект String,
на котором он был вызван, или -1, если ничего не было найдено. Поиск по строке ведётся от конца к началу
- Set -- берет и делает каждый сивол уникальным
 */

// РЕШЕНИЕ:
function isUnique(string) {
    // 1 способ
    for (let i = 0; i < string.length; i++) {
        const char = string[i]; // текущий символ который проверяем;
        //  i - индекс текущий === текущий элемент
        if (string.lastIndexOf(char) !== i) { // метод строк который ищет символ -- вернет индекс
            return false;
        }

    }
    return true; // значт все символы уникальны

    // 2 способ
    return new Set(string).size === string.length;
}

console.log(isUnique("abcdef")); // -> true
console.log(isUnique("1234567")); // -> true
console.log(isUnique("abcABC")); // -> true
console.log(isUnique("abcadef")); // -> false



