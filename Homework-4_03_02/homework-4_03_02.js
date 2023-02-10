// ************************* Task 1 ******************************

// В программе объявлена переменная order, которая хранит объект. Объявите переменную descriptor, которая должна содержать значения всех атрибутов ключа totalPrice объекта orders в виде массива. Результат выведите в консоль. Пример значений переменных:

// Пример результата:
// [['value', 15000], ['writable', true], ['enumerable', true], ['configurable', true]]

let order = {
  productName: 'Велосипед',
  costomerName: 'Саша',
  salesName: 'Петя',
  totalPrice: 15000,
};

const descriptor = Object.getOwnPropertyDescriptor(order, 'totalPrice');

const array = [];

for (let key in descriptor) {
  array.push([key, descriptor[key]]);
}

console.log(array); // [['value', 15000], ['writable', true], ['enumerable', true], ['configurable', true]]

// 2 Solution

const descriptor2 = Object.getOwnPropertyDescriptor(order, 'totalPrice');

console.log(Object.entries(descriptor2)); // [['value', 15000], ['writable', true], ['enumerable', true], ['configurable', true]]

// ***************************** Task 2 ***************************

// В программе задан объект employees, который содержит ряд свойств и методов. Сформируйте строку с именами всех свойств через запятую и пробел (, ) и выведите в консоль. Имена методов добавляться не должны. Пример значений переменных:

// Пример результата: firstName, lastName, ratePerDay, workingDays

let employees = {
  firstName: 'Петя',
  lastName: 'Иванов',
  ratePerDay: 2500,
  workingDays: 5,
  getSalary() {
    console.log(employees.ratePerDay * employees.workingDays);
  },
};

let array2 = [];
let string2;

for (let key in employees) {
  if (typeof employees[key] !== 'function') {
    array2.push(key);
  }
  string2 = array2.join(', ');
}

console.log(string2); // firstName, lastName, ratePerDay, workingDays

// ***************************** Task 3 ***************************

// В программе объявлены переменные name и phone, которые хранят строки. В name указано название заведения, а в phone — его номер телефона. Создайте класс Delivery со свойствами name и phone. Помимо описанных свойств, добавьте свойство validPhone, которое проверяет значение свойства phone на вхождение знака + в начале строки. Если знак отсутствует, свойство validPhone должно принять булевое значение false, в противном случае — true. Создайте экземпляр класса Delivery и в качестве аргументов конструктора укажите значения переменных name и phone. Получившийся экземпляр класса запишите в переменную deliveryName.

// Пример результата: false

// Пример значений переменных:

let name = 'Pizza';
let phone = '81234567890';

class Delivery {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }
  get validPhone() {
    return this.phone.startsWith('+');
  }
}

let test = new Delivery('Pizza', '+81234567890');
test.phone = '11231234';
console.log(test.validPhone); // false

// ****************************** Task 4 **************************

// В программе создан класс Permission, свойства которого описывают права пользователей на редактирование статей на сайте. Создайте новый класс User, который наследуется от класса Permissions. Дополнительно в классе User добавьте свойство name, значение которого класс принимает в качестве аргумента конструктора.

// Входные данные:

class Permission {
  constructor() {
    this.create = false;
    this.read = true;
    this.update = false;
    this.remove = false;
  }
}

class User extends Permission {
  constructor(name) {
    super();
    this.name = name;
  }
}

let test2 = new User('Alex');
console.log(test2);
