//  ************************* Task 1 ********************************

// 1. Напишите функцию checkDate() которая в консоль отобразит количество дней до конца текущего месяца.
// Примечание: инициализация дат должна быть внутри функции

function checkDate() {
  const date = new Date();
  const nowDate = date.getDate();
  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const remainsDays = daysInMonth - nowDate;
  console.log(remainsDays);
}

checkDate();

// **************************** Task 2 *******************************
// 2. Создайте функцию isItFridayToday(), которая выводит сообщение согласно условию:
// Если текущая дата определит пятницу, функция должна в консоль отобразить ответ “Сегодня пятница”!
// Если пятница была вчера - “Пятница была вчера”
// Если пятница будет завтра - “Завтра пятница!”
// Иначе необходимо вывести “Пятница будет через n дней”, где n - это количество дней до пятницы.

// Предусмотрите вывод 4 пункта (дня, дней)

function isItFridayToday() {
  const date = new Date();
  let day = date.getDay();
  if (day === 5) {
    console.log(`Сегодня пятница!`);
  } else if (day === 4) {
    console.log(`Завтра пятница!`);
  } else if (day == 6) {
    console.log(`Пятница была вчера`);
  } else {
    console.log(
      `Пятница будет через ${5 - day} ${5 - day === 5 ? 'дней' : 'дня'}`
    );
  }
}

isItFridayToday();

// ******************************* Task 3 ***************************
// Задан массив prices, передающий элементы строкового типа. Напишите функцию getInfo(prices), которая получает массив и возвращает количество элементов, которые начинаются на “Цена” и количество элементов, которые заканчиваются на “$” в виде массива по примеру:

// Результат: [3,3]

// Пример:
let prices = [
  'Цена товара - 1200$',
  'Стоимость - 500$',
  'Цена не определена',
  '9999',
  'Ценовая категория - больше 300$',
  'Цена за услугу 500 EUR',
];

// 1 Solution

const newList = [];
const newList2 = [];

function getInfo(prices) {
  const reg = /^Цена\s/;
  const reg2 = /\w{0,}[$]$/;
  for (let elem of prices) {
    const result = elem.match(reg);
    const result2 = elem.match(reg2);
    if (result != null) {
      newList.push(elem);
    }
    if (result2 != null) {
      newList2.push(elem);
    }
  }
  const newArray = [newList.length, newList2.length];

  return newArray;
}

console.log(getInfo(prices));

// 2 Solution

function getInfo2(prices) {
  const filteredArr1 = prices.filter(elem => elem.startsWith('Цена')).length;
  const filteredArr2 = prices.filter(elem => elem.endsWith('$')).length;
  const finishedArray = [filteredArr1, filteredArr2];
  return finishedArray;
}
console.log(getInfo2(prices));

// ************************ Task 4 **********************************
// 4. Задан массив array. Сформируйте два новых массива phones и emails, которые будут содержать данные по примеру:

// Результат:
// phones = [
//   '89840959944',
//   '+79840959933',
//   '89840959900',
//   '+79840959911',
//   '89840959922',
// ];
// emails = [
//   'exampleonemain@mail.ru',
//   'forreason@yandex.net',
//   'somemail@mail.ru',
//   'example@gmil.ru',
//   'grandthere@mail.ru',
//   'jetpackfor@gmail.ru',
//   'some@yandex.com',
// ];

let array = [
  '89840959944 exampleonemain@mail.ru',
  '+79840959933 forreason@yandex.net',
  'somemail@mail.ru',
  '89840959900 example@gmail.ru',
  '+79840959911',
  'grandthere@mail.ru',
  'jetpackfor@gmail.ru',
  '89840959922 some@yandex.com',
];

const emails = [];
const phones = [];

const regEmail = /\w*[@]\w*[.][a-z]*/;
const regPhones = /^[+|\d]\d*/;
for (let elem of array) {
  const resultEmail = elem.match(regEmail);
  const resultPhones = elem.match(regPhones);
  if (resultEmail != null) {
    emails.push(resultEmail.join());
  }
  if (resultPhones != null) {
    phones.push(resultPhones.join());
  }
}
console.log(emails);
console.log(phones);

// *************************** Task 5 *******************************
// Задан массив cards, передающий элементы строкового типа. Необходимо зашифровать номера карт по следующему правилу: заменить всю строку на 5 символов “*”, оставив первые 4 и последние 4 цифры.

// Пример:

// Результат: [
//   '4000*****9499',
//   '4000*****7379',
//   '4000*****9869',
//   '4000*****7859',
//   '4000*****6899',
//   '4000*****4699'
//   ]

let cards = [
  '4000 0012 0056 9499',
  '4000 0013 5456 7379',
  '4000 0014 1456 9869',
  '4000 0015 3466 7859',
  '4000 0016 3556 6899',
  '4000 0017 4456 4699',
];

// 1 Solution

const newCards = cards.map(elem => elem.replaceAll(elem.slice(4, 15), '*****'));

console.log(newCards);

// 2 Solution

for (let i in cards) {
  cards[i] = cards[i].replaceAll(/\s\d{0,4}\s\d{0,4}\s/g, '*****');
}
console.log(cards);
