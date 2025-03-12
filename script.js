// Модальне вікно
let modal = document.getElementById("authorModal");
let logo = document.getElementById("logo");
let closeBtn = document.getElementsByClassName("close")[0];

logo.onclick = function() {
    modal.style.display = "block";
}
closeBtn.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Конвертація величин
function convert() {
    // конвертуємо початкове значення
    let value = parseFloat(document.getElementById("value").value); // Задаємо к-ль чогось
    let from = document.getElementById("fromUnit").value; // задаємо з якої величини хочемо конвертувати
    let to = document.getElementById("toUnit").value; // задаємо в яку величину будемо конвертувати
    let factors = { km: 1000, m: 1, cm: 0.01, mm: 0.001 };// самі величини
    let result = (value * factors[from]) / factors[to]; //результат
    document.getElementById("result1").textContent = `Результат: ${result} ${to}`;
}

// Найдовше слово
function findLongestWord() {
    let words = document.getElementById("sentence").value.split(" "); // вказуємо речення ( створюємо масив та заповнюємо його значеннями)
    let longest = words.reduce((a, b) => (b.length > a.length ? b : a), ""); // Розбиваємо слова на числа за допомогою .length , та шукаємо найдовше
    document.getElementById("result2").textContent = `Слово: ${longest}, Довжина: ${longest.length}`; // Друкуємо результат
}

// Генератор пароля
function generatePassword() {
    let num = "0123456789"; // задаємо цифри
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" ; //задаємо алфавіт
    let symbols = "!@#$%^&*";//задаємо символи
    
    let numCount = parseInt(document.getElementById("numCount").value); // перевіряємо на те , скільки чисел хоче користувач
    let letterCount = parseInt(document.getElementById("letterCount").value); // аналогічно , але до букв
    let symbolCount = parseInt(document.getElementById("symbolCount").value); // аналогічно , але до символів
    // Створюємо пароль , Створюємо масиви та додаємо рандомом стільки значень , скільки задав користувач
    let password = Array(numCount).fill().map(() => num[Math.floor(Math.random() * num.length)]).join("") +            
                   Array(letterCount).fill().map(() => letters[Math.floor(Math.random() * letters.length)]).join("") +
                   Array(symbolCount).fill().map(() => symbols[Math.floor(Math.random() * symbols.length)]).join("");

    document.getElementById("result3").textContent = `Пароль: ${password}`;
}

// Підрахунок букв
function countLetter() {
    let text = document.getElementById("textInput").value.toLowerCase(); //Оброблюємо заданий текст 
    let letter = document.getElementById("charInput").value.toLowerCase(); // розбиваємо на букви
    let count = text.split(letter).length - 1; // рахуємо ( за допомогою методу Спліт , ріжемо слова на букви )
    document.getElementById("result4").textContent = `Буква "${letter}" зустрічається: ${count} раз(и)`; //Друкуємо результат
}
