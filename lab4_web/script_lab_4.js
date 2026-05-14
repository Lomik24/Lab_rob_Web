// 1. Привітання користувача
let userName = prompt("Введіть ваше ім'я:");
if (userName) {
    alert("Привіт, " + userName + "! Радий тебе бачити!");
    console.log("Привіт, " + userName + "! Радий тебе бачити!");
}

// 2. Проста арифметика (Добуток та частка)
let num1Str = prompt("Введіть перше число:");
let num2Str = prompt("Введіть друге число:");

if (num1Str !== null && num2Str !== null) {
    let num1 = parseFloat(num1Str);
    let num2 = parseFloat(num2Str);

    if (!isNaN(num1) && !isNaN(num2)) {
        let product = num1 * num2;
        let quotient = num1 / num2;

        let resultMsg = "Добуток: " + product + "\nЧастка: " + quotient;
        alert(resultMsg);
        console.log("Добуток: ", product);
        console.log("Частка: ", quotient);
    } else {
        alert("Помилка: Введено не число.");
    }
}

// 3. Вік користувача
let birthYearStr = prompt("Введіть ваш рік народження:");
if (birthYearStr !== null) {
    let birthYear = parseInt(birthYearStr);

    if (!isNaN(birthYear)) {
        let currentYear = 2026;
        let userAge = currentYear - birthYear;
        const MY_AGE = 19; // Орієнтовний вік

        let difference = Math.abs(userAge - MY_AGE);
        let comparison = "";

        if (userAge > MY_AGE) {
            comparison = "старший(а)";
        } else if (userAge < MY_AGE) {
            comparison = "молодший(а)";
        } else {
            comparison = "одного віку зі мною";
        }

        alert("Ваш вік: " + userAge + " років.\nВи " + comparison + " на " + difference + " років.");
    }
}