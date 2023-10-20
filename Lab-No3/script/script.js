function task1() {
    let numN = parseInt(prompt('Введите число N: '));
    let sum = 0;
    let output = `Округленные значения введенных чисел: `;
    for (let i = 0; i < numN; ++i) {
        let num = parseFloat(prompt(`Введите число (${i + 1} / ${numN}): `));
        let roundNum = Math.round(num);  // Округление до целого числа (int)
        sum += roundNum;
        output += `\n${roundNum} (${num})`;
    }
    output += `\n\nСумма значений: ${sum}`;
    // Вывод результата
    alert(output);
}


function task2() {
    let candyCost = parseFloat(prompt('Введите цену за 1 кг конфет: '))
    let output = `Стоимость 1 кг: ${candyCost} \n\n`;
    for (let i = 1.2; i <= 2; i += 0.2) {
        let weight = i.toFixed(1);  // Округление до одного знака после запятой (float)
        let cost = (weight * candyCost).toFixed(2);
        output += `Стоимость ${weight} кг примерно: ${cost} \n`;
    }
    // Вывод результата
    alert(output);
}
