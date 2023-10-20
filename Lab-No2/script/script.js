function task1() { 
    // Запрос чисел у пользователя, преобразование в тип float
    let numA = parseFloat(prompt('Введите число A: '));
    let numB = parseFloat(prompt('Введите число B: '));
    let numC = parseFloat(prompt('Введите число C: '));
    // Создание строки вывода в зависимости от результата сравнения
    if ((numA < numB) && (numB < numC)) {
        var output = `Неравенство "A < B < C" является истинным\n(${numA} < ${numB} < ${numC} - верно)`;
    }
    else {
        var output = `Неравенство "A < B < C" истинным не является\n(${numA} < ${numB} < ${numC} - НЕ верно)`;
    }
    // Вывод результата
    alert(output);
}


function task2() {
    // Запрос чисел у пользователя, преобразование в тип float
    let num1 = parseFloat(prompt('Введите первое число'));
    let num2 = parseFloat(prompt('Введите второе число'));
    // Вывод результата
    let output = `Из чисел "${num1}" и "${num2}" большим является "${Math.max(num1, num2)}"`;
    alert(output);
}


function getYValue(numX) {
    const numA = 7.1;
    const numB = 4.2;
    // Вычисление значения функции Y в зависимости от значения X
    if (numX <= 3) {
        return numB - numX ** 2 - 1;
    }
    else if (numX >= 8) {
        return Math.log(numX + numA) ** (1 / 2)
    }
    else {
        return Math.cos(numA * (numX ** 2)) ** 2 + 3
    }
}


function task3() {
    let xArray = [1.48, 9.17, 6.23];  // Список значений X
    // Создание строки вывода
    let output = ``;
    for (let i = 0; i < xArray.length; ++i) {
        let numX = xArray[i];
        output += `При X = "${numX}", Y = "${getYValue(numX)}" \n`;
    }
    // Вывод результата
    alert(output);
}
