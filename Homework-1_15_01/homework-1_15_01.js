// *************************** Task 1 *******************************

// 1. Задан массив elems, передающий элемент HTML разметки. Реализуйте очистку данных по примеру ниже:

// Результат: ['Home','About','FAQ','Contacts']

let elems = [
  '<div><p class="text">Home</p></div>',
  '<div><p class="text">About</p></div>',
  '<div><p class="text">FAQ</p></div>',
  '<div><p class="text">Contacts</p></div>',
];

// 1 Solution

const updatedArray = elems.map(elem =>
  elem.replace('<div><p class="text">', '').replace('</p></div>', '')
);
console.log(updatedArray);

// 2 Solution

const newArray = [];

for (let elem of elems) {
  if (elem.includes('Home')) {
    newArray.push('Home');
  } else if (elem.includes('About')) {
    newArray.push('About');
  } else if (elem.includes('FAQ')) {
    newArray.push('FAQ');
  } else if (elem.includes('Contacts')) {
    newArray.push('Contacts');
  }
}
console.log(newArray);

// *************************** Task 2 ********************************
// 2. Напишите функцию initCap(array), которая получает массив с элементами строкового значения и возвращает элементы с заглавной первой буквой по примеру:

// Результат: ['Cтакан','Молоко','Табуретка','Вода']

let words = ['стакан', 'молоко', 'табуретка', 'вода'];

// 1 Solution

function initCap(array) {
  const newArray = array.map(elem =>
    elem.replace(elem[0], elem[0].toUpperCase())
  );
  console.log(newArray);
}
initCap(words);

// 2 Solution

function initCap2(array) {
  const newArray = array.map(
    elem => elem.slice(0, 1).toUpperCase() + elem.slice(1)
  );
  console.log(newArray);
}
initCap2(words);

// **************************** Task 3 *******************************
// 3. Задан массив names.
// Сформируйте новый массив full_names, элементы которого будут содежрать вложенный массив с именем и фамилией. Если фамилии не окажется - второй элемент должен хранить undefined

// Результат: [
//   ['Steven','King'],
//   ['Jonh','Snow'],
//   ['Oliver', undefined],
//   ['Neena','Stich'],
//   ['Grant','Laster'],
//   ['Persius','Master'],
//   ['Lest', undefined] ]

let names = [
  'Steven King',
  'Jonh Snow',
  'Oliver',
  'Neena Stich',
  'Grant Laster',
  'Persius Master',
  'Lest',
];

const fullNames = names.map(elem => {
  if (elem.includes(' ')) {
    return elem.split(' ');
  } else {
    return [elem + ' ' + undefined];
  }
});
console.log(fullNames);

// Ternary operator

const fullNamesTernary = names.map(elem =>
  elem.includes(' ') ? elem.split(' ') : [`${elem}, undefined`]
);
console.log(fullNamesTernary);
