/*
---------------- EVENT_LOOP --------------------------------------------------------------------------------------------------------------
- отделяем код строчками чтобы глазу понятнее было
- пишем коммент "//" и пимем ответ: // 1 6 3 5 2.........
- setTimeout внутри "микротаски" выполнится после обычнного таимаута
- код после await выполниться в последнюю очередь (область видимости фигурные скобки "{ }" )
- если промисс "резолвиться" внутри setTimeout - то "микротаска" выполнится после макротаски
- то что внутри: resolve() сихронно работает, но если resolve() внутри setTimeout-а тогда становится микротаской - зн.выполнится после
 синхронного кода
 - если resolve() написан в setTimeout, то сначала отработает setTimeout, потом только микротаски с then() - тк промис резолвится в setTimeout
- синхр.код выполнится первый не зависимо от уровня вложенноси, микротаски идут по области видимости или по-другому: по очередности
добавления микротасок в очередь
- Promise.resolve(5).then(() => setTimeout(() => console.log(8), 0)); - 5 не выводится тк не попадает в аргументы then()
- макротаски: setTimeout_ы выполняются в очередности добавления в очередь если не установлена задержка.
setTimeout с нулевой задержкой выполняется раньше чем с delay задержкой
- setTimeout выполнится быстрее тот который просто (даже если у него > delay), а не тот что внутри then() находится (даже если у того
 который в then - delay меньше или "нулевая")
 - timeOut - нет в консоли тк функция "run" не вызывается
 ---------------- PROMISE --------------------------------------------------------------------------------------------------------------
- чтобы в след then - res был ни undefined - возвращаем в первом then: return res (см.файл promise_console.js)
- если пишем через асинк-евеит то перед промисом ставим await и делаем отдельную fetchData функцию, если через then то await не нужен, а
 после Promise.all([sleep(666), sleep(777)).then(promisesArray => promisesArray.forEach(pr => console.log(pr)))
 - можно сразу полностью не писать return new Promise((resolve,reject)), а написать коротко сразу: return Promise.reject(p + 'b')
 */
