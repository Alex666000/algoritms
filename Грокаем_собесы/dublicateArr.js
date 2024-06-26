// Написать функцию, которая удаляет все дубликаты из массива.
//   Вернуть массив без дубликатов
//
// Вход: [2, 3, 1, 2, 5, 2, 1, 7, 4]
// Выход: [2, 3, 1, 5, 7, 4]


const dublicateArr = (array) => {
  const uniq = []

  array.forEach(item => {
    if (!uniq.includes(item)) {
      uniq.push(item)
    }
  })

  return uniq
}
const array = [2, 3, 1, 2, 5, 2, 1, 7, 4]
console.log(dublicateArr(array))

/*
- 2 способ: const removeDuplicates = array => [...new Set(array)];
- алгоритм: создаем новый массив куда будем складывать неповторяющиеся элементы - бежим по массиву и проверяем содержит ли массив
 элемент по которому бежим
 */
