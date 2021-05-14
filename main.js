'use strict'

alert('Вопрос 1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту.\nПодсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию');

var tC = prompt('Введите градусы Цельсия');

var tF = (9 / 5) * tC + 32;

alert(tC + String.fromCharCode(176) + 'С соответствует ' +
    tF.toFixed() + String.fromCharCode(176) + 'F');

alert('Вопрос 2. Объявить две переменные: admin и name. Записать в name строку "Василий";\nСкопировать значение из name в admin. Вывести admin (должно вывестись «Василий»).');

var name = "Василий";
var admin = name;
alert('name = ' + name);
alert('admin = ' + admin);

name = "Petr";
alert('name = ' + name);
alert('admin = ' + admin);