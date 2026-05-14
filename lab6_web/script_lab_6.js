document.getElementById('regForm').addEventListener('submit', function(event) {
    let isValid = true;
    let errors = [];

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value;
    let confirmPass = document.getElementById('confirm_password').value;
    let age = document.getElementById('age').value;
    let group = document.getElementById('group').value;

    if (name === "") {
        errors.push("Поле ім'я є обов'язковим.");
        isValid = false;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push("Введено некоректний email.");
        isValid = false;
    }

    if (password.length < 6) {
        errors.push("Пароль має містити мінімум 6 символів.");
        isValid = false;
    }
    if (password !== confirmPass) {
        errors.push("Паролі не збігаються.");
        isValid = false;
    }
    if (age < 10) {
        errors.push("Вік повинен бути не менше 10 років.");
        isValid = false;
    }
    if (group === "") {
        errors.push("Будь ласка, оберіть групу.");
        isValid = false;
    }

    let genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
        errors.push("Будь ласка, оберіть стать.");
        isValid = false;
    }

    if (!isValid) {
        alert("Помилки реєстрації:\n- " + errors.join("\n- "));
        event.preventDefault();
    } else {
        alert("Реєстрація успішна!");
        event.preventDefault();
    }
});