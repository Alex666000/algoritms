/*



________________________________________________________________________________________________________
Задача:
01_### Уникальность всех символов в строке
Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: `‘a’` и `‘A’` разные символы.
________________________________________________________________________________________________________________________________
-  lastIndexOf() -- возвращает индекс последнего вхождения указанного значения в строковый объект String,
на котором он был вызван, или -1, если ничего не было найдено. Поиск по строке ведётся от конца к началу
- Set -- берет и делает каждый сивол уникальным
 */
// Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: `‘a’` и `‘A’` разные символы.
// РЕШЕНИЕ:
function isUnique(string) {
    const unique = new Set()
    for (const char of string) {
        if (unique.has(char)) {
            return false
        }
        unique.add(char)
    }

    return true
}

console.log(isUnique('abcdef')); // -> true
console.log(isUnique('1234567')); // -> true
console.log(isUnique('abcABC')); // -> true
console.log(isUnique('abcadef')); // -> false



