// Граф - структура данных из множества вершин и  набора ребер (соединений между вершинами) -- "Города с маршрутами"
// Поиск в ширину в графе - найти кратчаишии путь из очки А в точку G за минимальное кол-во шагов
// Граф - поиск в ширину, рещает задачу  поиска пути в графе, существует ли путь или нет
// находит путь за минимальное количество шагов - граф можно представить в виде "Матрицы смежности" --
// для этого делается таблица где столюбцы и строчки это вершины и если путь от одной вершины к др есть то на их перекрестии ставится 1

const graph = {};
// поля графа это вершины в которые есть путь, например из а в b и c - есть путь:
graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f"];
graph.f = ["g"];
// используем структуру данных как "Очередь" ( состоит из элементов -  они добавляются в конец структуры  а извлекаются из ее начала)
// FIFO - "Первый вошел - первый вышел"
// //

function breadthSearch(graph, start, end) { // поиск в ширину
    let queue = []; // создаем граф = массив
    queue.push(start); // сразу в очередь добавим стартовую вершину
    while (queue.length > 0) { // крутимся пока в очереди есть хотя бы 1 элемент
        const current = queue.shift(); // из начала очереди достаем текущую вершину
        if (!graph[current]) { // если по текущей вершине в графе ничего не находится
            graph[current] = []; // то по вершине присвоим пустой массив - те из этой вершины никуда пути нету
        }
        if (graph[current].includes(end)) { // если в графе по текущей вершине массив содержит конечную точку то
            // то завершаем выполнение программы и вернет true -  обошли весь граф и пришли в конечную точку
            return true;
        } else {
            queue = [...queue, ...graph[current]]; //добавляем в очередь новые вершины
        }
    } //
    return false;
}

console.log(breadthSearch(graph, "a", "e"));

/*
-includes - есть ли в массиве данный элемент
 */
