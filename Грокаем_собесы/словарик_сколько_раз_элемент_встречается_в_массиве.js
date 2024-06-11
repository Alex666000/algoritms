// 2) Определить сколько раз каждый элемент встречается в массиве.
//
//   Вход:
// ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
//
// Выход: {kiwi: 3, apple: 2, orange: 1}

// 1 способ: -------------------------------------------------------------------------------------------------------------------------------
const countElem_0 = (array) => {
  let count = {} // {kiwi: 3, apple: 2, orange: 1}

  array.forEach(element => { // когда пробегаемся "фор-ич" всегда сносим вниз фигурные скобки { } и не "ретерним"
    // проверяем в let count = {} есть ли там сначала объект со своиством "киви" (потом все остальные своиства): count['kiwi'] и если
    // есть - увеличиваем его значение на 1, т.е из объекта сделали
    if (count[element]) { // count['kiwi']?
      count[element]++
    }

    count[element] = 1 // если нет count['kiwi'] то кладё м в пустой {} своиство let count = { kiwi: 1 }
  })

  return count
}

console.log(countElem_0(['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'])) // положили массив в функцию находу


 const obj = {} // {kiwi: 3, apple: 2, orange: 1}
obj['kiwi'] = 3
console.log(obj)

// 2 способ через reduce:-------------------------------------------------------------------------------------------------------------------
const countElem_1 = (array) => {
  return array.reduce((objCount, element) => {
    if (objCount[element]) { // эта запись и есть значение объекта: objCount[element]
      objCount[element]++
    } else {
      objCount[element] = 1
    }

    return objCount // из reduce всегда возвращаем счетчик, а сам новый массив возвращаем из функции
  }, {}) // итог должен быть: {kiwi: 3, apple: 2, orange: 1}
}

console.log(countElem_1(['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'])) // положили массив в функцию находу

// 3 способ через reduce еще короче --------------------------------------------------------------------------------------------------------
const countElements = (array) => {
  return array.reduce((objCount, element) => {
    // изнчально у нас objCount - пустой объект {},так как это "аккамулятор" (сделали его "инишл",что вернем из reduce как { }), и мы
    // обращаемся к его ключу: objCount[element]
    // оператор "+" главнее чем "=", поэтому читается (выполняется) сначала выражение справа от знака "равно"; objCount[element] - это
    // значение свойства объекта, если значения нет, как у нас изначально в {} т.е objCount[element] нету,значит результат "первой"
    /* итерации итог будет: {kiwi: 0} - так как изначально:
    const objCount = {},
    objCount['kiwi'] = 0 // первый element итерации массива array будет: kiwi
    console.log(obj) // {kiwi: 0}
    */
    // когда на следующих итерациях встретим "kiwi", то сделаем так - увеличимзначение своиства objCount[element]
    // let objCount = {kiwi: 1} - далее все остальные итерации массива "array"
    objCount[element] = (objCount[element || 0]) + 1

    return objCount // из reduce всегда возвращаем счетчик, а сам новый массив возвращаем из функции
  }, {}) // "инишл" acc === objCount
}

console.log(countElements(['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'])) // положили массив в функцию находу

/*
- Из этого: ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'] на выходе сделать это: {kiwi: 3, apple: 2, orange: 1}
- Объяснение словарика: 41 мин 4 видео "Грокаем собесы" в папке Собеседования - алгоритмы js
Исходный массив: const arr = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple']
Мы создаем своиство объекта так ведь: const obj = { } и добавляем к нему свойство новое с его значением: obj['kiwi'] = 3
проверяем в консоле: console.log(obj) и видим: { kiwi: 3 }
ключ - это название в массиве элемента и значение сколько раз оно встретилось
есть пустой объект "словарик" let count = {} его надо превратить в это: {kiwi: 3, apple: 2, orange: 1}
то есть: const obj = {} // {kiwi: 3, apple: 2, orange: 1}, значит будем проверять этот пустой объект {}, видим, что своиства(ключи) в
итоговом объекте не повторяются они уникальные {kiwi: 3, apple: 2, orange: 1} - значит делаем проверку - если у нас уже в объекте этот
элемент есть, мы его уже положили, то тогда будем прибавлять счётчик (значение, т.е это: 3, 2, 1..) раз он есть значит мы его клали в
объект и если он есть увеличиваем значение у своиства на 1, а если нету, не встречали, то нет к примеру этого элемента: "kiwi: 3",
значит мы его должны положить и задать ему значение 1 и будет: "kiwi: 1",

Итог:
const arr = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple']

const obj = {}
obj['kiwi'] = 3
console.log(obj)
 */
