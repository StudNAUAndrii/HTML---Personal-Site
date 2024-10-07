// URL-адреси зображень кубиків
var diceImages = [
    "dice1.png", // 1
    "dice2.png", // 2
    "dice3.png", // 3
    "dice4.png", // 4
    "dice5.png", // 5
    "dice6.png"  // 6
];

// Генеруємо випадкові числа для обох гравців
var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);

// Оновлюємо зображення кубиків відповідно до випадкових чисел
document.getElementById("dice1").setAttribute("src", diceImages[randomNumber1]);
document.getElementById("dice2").setAttribute("src", diceImages[randomNumber2]);

// Визначаємо переможця
if (randomNumber1 > randomNumber2) {
    document.getElementById("title").innerHTML = "Gambler 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.getElementById("title").innerHTML = "Gambler 2 Wins!";
} else {
    document.getElementById("title").innerHTML = "0_0";
}
