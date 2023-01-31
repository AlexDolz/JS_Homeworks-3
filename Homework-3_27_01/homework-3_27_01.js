// ************************ Task 1 ********************************
// 1. Задан объект someObj с произвольными сво-ми. Напишите функцию getKeys(), которая в качестве аргумента получает объект и возвращает результат работы метода Object.keys() согласно примеру:

// Примечание: Использовать класс Object нельзя.

// Результат: ['key1','key2','key3','key4']
// Пример:
let someObj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: 'value4',
};

function getKeys(obj) {
  let array = [];
  for (let key in obj) {
    array.push(key);
  }
  return array;
}
console.log(getKeys(someObj)); // ['key1','key2','key3','key4']

// ************************** Task 2 ********************************
// Создайте функцию getAvg(), которая получает в качестве аргумента массив и возвращает среднее значение среди всех элементов. Примечание: гарантируется, что все элементы передают числовое значение

// Результат: 3
// Пример:
const array = [1, 2, 3, 4, 5];

function getAvg(array) {
  return array.reduce((total, value) => total + value) / array.length;
}

console.log(getAvg(array)); // 3

// ************************** Task 3 *********************************
// Создайте функцию countString(), которая получает массив в качестве аргумента.
// Реализуйте функционал, который посчитает и выведет в консоль количество элементов, чей тип равен ‘string’

// Результат: 3
// Пример:
const array2 = [1, true, '3', 'value1', 9, 'key'];

let count = 0;

const countString = array => {
  for (let elem of array) {
    if (typeof elem === 'string') {
      count++;
    }
  }
  return count;
};

console.log(countString(array2)); // 3

// ***************************** Task 4 ******************************

// Задан объект someObj с произвольными сво-ми. Напишите функцию getEntries(), которая в качестве аргумента получает объект и возвращает результат работы метода Object.entries() согласно примеру:
// Пример:
// Результат: [['key1', 'value1'],['key2', 'value2'],['key3', 'value3'],['key4', 'value4']]

// Примечание: Использовать класс Object нельзя

let someObj2 = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: 'value4',
};

function getEntries(obj) {
  const entriesArray = [];
  for (let key in obj) {
    entriesArray.push([key, obj[key]]);
  }
  return entriesArray;
}

console.log(getEntries(someObj2));

// ***************************** Task 5 ******************************

// Задан массив array, передающий произвольное количество элементов.
// реализуйте функционал, который преобразует его в объект по следующему правилу:
// Ключ элемента должен содержать его порядковый номер, в качестве значения взять строку ‘keyN’, где N - это порядковый номер.
// Количество сво-тв должно быть равным количеству элементов массива

// 	Результат:
// 	{
// key1: 1,
// key2: true,
// key3: ‘3’,
// key4: ‘value1’
// key5: 9,
// key6: ‘key’
// }

// Пример:
let array3 = [1, true, '3', 'value1', 9, 'key'];

let newObject = {};
array3.forEach((elem, key) => (newObject[`key${+key + 1}`] = elem));

console.log(newObject); // {  key1: 1, key2: true, key3: '3', key4: 'value1', key5: 9, key6: 'key'}
