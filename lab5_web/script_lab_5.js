document.getElementById('btn-change').addEventListener('click', function() {
    document.getElementById('text-to-change').textContent = "Текст змінено! Це новий вміст.";
});

const btnHover = document.getElementById('btn-hover');
btnHover.addEventListener('mouseover', function() {
    this.classList.add('active-hover');
});
btnHover.addEventListener('mouseout', function() {
    this.classList.remove('active-hover');
});

document.getElementById('btn-add').addEventListener('click', function() {
    const container = document.getElementById('elements-container');
    const newDiv = document.createElement('div');
    newDiv.className = 'new-element';
    newDiv.textContent = 'Це новий доданий елемент.';
    container.appendChild(newDiv);
});

let clicks = 0;
document.getElementById('btn-var7').addEventListener('click', function() {
    clicks++;
    if (clicks === 7) {
        alert("Майнкрафт!");
        clicks = 0;
    }
});