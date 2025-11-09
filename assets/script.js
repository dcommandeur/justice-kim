const themeSwitcher = document.getElementById('theme-switcher');
const doc = document.documentElement;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    doc.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        console.log('Dark mode activated from saved preference.');
    }
}

themeSwitcher.addEventListener('click', () => {
    let currentTheme = doc.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        doc.setAttribute('data-theme', 'light');
        console.log('Dark mode activated from saved preference.');
        localStorage.setItem('theme', 'light');
    } else {
        doc.setAttribute('data-theme', 'dark');
        console.log('Dark mode activated from saved preference.');
        localStorage.setItem('theme', 'dark');
    }
});
