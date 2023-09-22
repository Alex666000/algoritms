/*
03_### Удаление всех повторяющихся значений в строке
 */
function removeDupes(str) {
    // 1 способ
    const res = []; // делаем ИТОГОВЫЙ РЕЗУЛЬТАТ -- массив потом его когда сформируем превратим в строчку
    const map = { }; // заведем - "словарь" - структуру где будем хранить неповторяющиеся значения
    // все ключи это будут уникальные символы в строке (ключ связываем с элементов масива)
    // (ключи равны сиволу === str[i])

    for (let i = 0; i < str.length; i++) {
        const char = str[i]; // для удобства

        // если нет такого сивола - его занесем в объект, и добавим в наш результирующии массив
        if (!map[char]) {
            map[char] = true; // занесем в объект символ  ключ "а" равный true: "abcd"
            res.push(char);
            // в след.раз если это будет повторяющися символ то map[char] будет находится true поэтому if не сработает и мы не будем
            // добавлять лишние символы в массив
        }
    }

    return res.join(""); // превращаем в строчку и вернем её

    // 2 способ
    const uniq = new Set(str);
    return Array.from(uniq).join(""); // Array.from - из разных структур данных возвращает масив
}


console.log(removeDupes("abcd")); // -> 'abcd'
console.log(removeDupes("aabbccdd")); // -> 'abcd'
console.log(removeDupes("abcddbca")); // -> 'abcd'
console.log(removeDupes("abababcdcdcd")); // -> 'abcd'

/*
- map[char] = true; -- если в мар по сиволу char нет символа -- означает, что в объекте есть ключ "а" равный true --> 'abcd'
 */
