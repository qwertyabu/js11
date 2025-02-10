function changeTextColor() {
    const color = prompt("Введите цвет:");
    document.getElementById('text').style.color = color;
}

changeTextColor();

function changeBackground() {
    const backgroundColor = prompt("Введите background:");
    document.getElementById('back').style.backgroundColor = backgroundColor;
}

changeBackground();