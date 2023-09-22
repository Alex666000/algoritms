/*
### Какая строка встречается чаще всего
Напишите функцию, которая принимает массив строк и возвращает самую часто встречающуюся строку в этом массиве.
Если таких строк несколько, то нужно вернуть первую, идя слева на право.
 */

function highestFrequency(array) {
    // 1 способ
// ---------------------------------------------------------------------------------------------------------------------------------------
    // создаем место где храним сколько раз тот или иной символ нам встречался
    const map = {}; // где ключ -- эта строка -- а значение сколько раз встречалась эта строка (ключ связываем с элементов масива)
    let maxFreq = 0; // сколько раз встречается строчка в массиве
    let maxFreqStr = array[0]; // самая часто-встречающаяся строчка

    for (let i = 0; i < array.length; i++) {
        const current = array[i];

        if (map[current]) { // map[current] - это просто число -- тк объект по ключу = значение!!
            map[current]++; // занесем число в объект мар и будем считать сколько раз строка встречалась
        } else { // если нет такого ключа в объекте -- !map[current] --> то скажем что строка встречалась 1 раз
            map[current] = 1;
        }

        if (map[current] > maxFreq) {
            maxFreq = map[current]; // переинициализируем иницализационные значения
            maxFreqStr = current; // и меняем строчку которая чаще всего встречается
        }

        return maxFreqStr;
    }
}


console.log(highestFrequency(["a", "b", "c", "c", "d", "e"])); // -> c
console.log(highestFrequency(["abc", "def", "abc", "def", "abc"])); // -> abc
console.log(highestFrequency(["abc", "def"])); // -> abc
console.log(highestFrequency(["abc", "abc", "def", "def", "def", "ghi", "ghi", "ghi", "ghi"])); // -> ghi
