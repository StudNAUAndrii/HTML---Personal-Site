// Додаємо обробники подій для кліків і натискань клавіш
const keys = document.querySelectorAll('.key');

// Мапа клавіш та відповідних звуків, використовуючи посилання на звуки з інтернету
const sounds = {
    w: 'mixkit-retro-game-notification-212.wav',
    a: 'mixkit-fast-small-sweep-transition-166.wav',
    s: 'mixkit-cartoon-toy-whistle-616.wav',
    d: 'mixkit-arrow-whoosh-1491.wav',
    k: 'mixkit-arcade-retro-game-over-213.wav',
    l: 'mixkit-air-zoom-vacuum-2608.wav'
};

// Програвання звуку при натисканні клавіші
function playSound(key) {
    const audio = new Audio(sounds[key]);
    audio.play();
}

// Додаємо візуальний ефект натискання
function buttonAnimation(key) {
    const activeButton = document.querySelector(`.key[data-key="${key}"]`);
    if (activeButton) {
        activeButton.classList.add('pressed');
        setTimeout(() => {
            activeButton.classList.remove('pressed');
        }, 100);
    }
}

// Обробка події натискання на клавішу
function handleKeyPress(event) {
    const key = event.key.toLowerCase();
    if (sounds[key]) {
        playSound(key);
        buttonAnimation(key);
    }
}

// Обробка кліку миші на клавішу
keys.forEach(key => {
    key.addEventListener('click', function () {
        const keyValue = this.getAttribute('data-key');
        playSound(keyValue);
        buttonAnimation(keyValue);
    });
});

// Додаємо обробник подій для клавіатури
document.addEventListener('keydown', handleKeyPress);
