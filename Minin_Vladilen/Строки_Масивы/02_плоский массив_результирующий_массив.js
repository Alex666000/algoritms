/*
02_### Плоский массив
 */
function flatten(array) {
    // 1 способ -- Рекурсивный
    const res = []; // создаем новый массив
    for (let i = 0; i < array.length; i++) {
        // вызываем рекурсию и снова прогоняем по масиву - тк ранее убрали один уровень вложенности: стало [ 1, [ 2, 3 ], [ [ 4 ] ] ]
        const flat = flatten(array[i]);
        // нужно убрать еще этот уровень вложенности  1, [ 2, 3 ], [ [ 4 ] ] ] и array[i] снова пропускаем через функцию
        if (Array.isArray(array[i])) {
            // если массив то по нему снова делаем итерацию - тк  в нем несколько значений и его распаковываем
            for (let j = 0; j < flat.length; j++) {
                res.push(flat[j]); // элемент по индексу j
            }
        } else {
            res.push(array[i]); // если плоское значение то его добавим в результирующий массив

        }
    }

    return res; // возвращаем решение задачи ведь новый массив
}

// 2 способ -- flat(Infinity)
function flatten(array) {
    return array.flat(Infinity); // Метод flat позволяет сглаживать массивы на указанную глубину.
    // Передача Infinity в качестве аргумента делает сглаживание полностью, независимо от уровней вложенности.
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])); // -> [1, 2, 3, 4]

/*
Цикл в цикле значит сначала получили первый элемент в родительском цикле, а в дочернем этот элемент сравниваем со всеми остальными в массиве
 */
