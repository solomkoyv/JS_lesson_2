'use strict';

// 2) В файле скрипта создать 2 переменные (money и time), которые будут получать данные от пользователя:
// Первая будет спрашивать "Ваш бюджет на месяц?"
// Вторая "Введите дату в формате YYYY-MM-DD"

let money = +prompt('Ваш бюджет на месяц?', ''),
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

// 3) Создать объект appData, который будет содержать такие данные:
let appData = {
  // бюджет (передаем сюда переменную из п.2)
  budget: money,
  // данные времени - timeData (передаем сюда переменную из п.2)
  timeData: time,
  // объект с обязательными расходами - expenses (смотри пункт 4)
  expenses: {},
  // объект с необязательными расходами - optionalExpenses (оставляем пока пустым)
  optionalExpenses: {},
  // массив данных с доп. доходом - income (оставляем пока пустым)
  income: [],
  // свойство savings (выставляем его как false)
  savings: false
};

// 4) Задать пользователю по 2 раза вопросы:
//“Введите обязательную статью расходов в этом месяце”
//“Во сколько обойдется?”
//Записать ответы в объект expenses в формате:

for (let i = 0; i < 2; i++) {
  let expensesItem = prompt('Введите обязательную статью расходов в этом месяце', ''),
    expensescCost = +prompt('Во сколько обойдется?', '');

  if ((typeof (expensesItem)) === 'string' &&
    typeof (expensesItem) != '' &&
    typeof (expensesItem) != null &&
    expensesItem.length < 50 &&
    typeof (expensescCost) != null &&
    typeof (expensescCost) != '') {
    console.log(`done`);
    appData.expenses[expensesItem] = expensescCost;
  } else {
    i--;
  }
}

// var i = 0;
// while (i < 2) {
//   let expensesItem = prompt('Введите обязательную статью расходов в этом месяце', ''),
//     expensescCost = +prompt('Во сколько обойдется?', '');

//   if ((typeof (expensesItem)) === 'string' &&
//     typeof (expensesItem) != '' &&
//     typeof (expensesItem) != null &&
//     expensesItem.length < 50 &&
//     typeof (expensescCost) != null &&
//     typeof (expensescCost) != '') {
//     console.log(`done`);
//     appData.expenses[expensesItem] = expensescCost;
//     i++;
//   } else {
//     i--;
//   }
// }

// var i = 0;
// do {
//   let expensesItem = prompt('Введите обязательную статью расходов в этом месяце', ''),
//     expensescCost = +prompt('Во сколько обойдется?', '');
//   if ((typeof (expensesItem)) === 'string' &&
//     typeof (expensesItem) != '' &&
//     typeof (expensesItem) != null &&
//     expensesItem.length < 50 &&
//     typeof (expensescCost) != null &&
//     typeof (expensescCost) != '') {
//     console.log(`done`);
//     appData.expenses[expensesItem] = expensescCost;
//     i++;
//   } else {
//     i--;
//   }
// } while (i < 2);

appData.moneyPerDay = appData.budget / 30;
alert(`Ежедневный бюджет пользователя = ${appData.moneyPerDay}`);

if (appData.moneyPerDay < 100) {
  console.log(`Минимальный уровень достатка`);
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
  console.log(`Средний уровень достатка`);
} else if (appData.moneyPerDay > 2000) {
  console.log(`Высокий уровень достатка`);
} else {
  console.log(`Произошла ошибка`);
}