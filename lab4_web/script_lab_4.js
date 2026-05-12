// 1. Привітання користувача
let userName = prompt("Введіть своє ім'я:");
if (userName) {
    alert("Привіт, " + userName + "! Радий тебе бачити!");
    console.log("Привіт, " + userName + "! Радий тебе бачити!");
}

// 2. Проста арифметика (непарне -> добуток та частка)
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
        alert("Помилка: введено не число.");
    }
}

// 3. Обчислення віку користувача
let birthYearStr = prompt("Введіть ваш рік народження:");
if (birthYearStr !== null) {
    let birthYear = parseInt(birthYearStr);
    
    if (!isNaN(birthYear)) {
        let currentYear = 2026;
        let userAge = currentYear - birthYear;
        const MY_AGE = 19; // Константий вік студента
        
        let difference = Math.abs(userAge - MY_AGE);
        let comparison = "";
        
        if (userAge > MY_AGE) {
            comparison = "старший(а)";
        } else if (userAge < MY_AGE) {
            comparison = "молодший(а)";
        } else {
            comparison = "одноліток, різниця";
        }
        
        alert("Ваш поточний вік: " + userAge + " років.\nКористувач " + comparison + " на " + difference + " років.");
    }
}