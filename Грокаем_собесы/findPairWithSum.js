// 1) тоже часто дают на собеседованиях
// Решений множество, попробуйте сделать самый эффективный по времени)
//
// Нужно проверить, есть ли в массиве два целых числа x и y, которые при сложении равны указанному значению k
//
// Например:
//
//   findPairWithSum(arr, k){}
//
// let arr = [1, 2, 3, 4, 5, 6];
// let k = 11;
//
// Вернёт true, потому что такие числа есть в массиве
function findPairWithSum(arr, k) {
  const complements = new Set();

  for (let num of arr) {
    if (complements.has(num)) {
      return true;
    }
    complements.add(k - num);
  }

  return false;
}

let arr = [1, 2, 3, 4, 5, 6];
let k = 11;

console.log(findPairWithSum(arr, k));  // Вернёт true, потому что такие числа есть в массиве

// 2 способ:
