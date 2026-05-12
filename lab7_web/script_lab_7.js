const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    let currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});

window.addEventListener('DOMContentLoaded', () => {
    let savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    }

    let views = localStorage.getItem('page_views');
    if (!views) views = 0;
    views++;
    localStorage.setItem('page_views', views);
    document.getElementById('view-count').textContent = views;
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('contactName').value;
    alert("Дякую, " + name + "! Ваше повідомлення надіслано.");
    this.reset();
});