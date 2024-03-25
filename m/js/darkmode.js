
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme);
    const themeLink = document.getElementById('theme');
    themeLink.href = `./mt/theme.${savedTheme}.css`;
    if (!savedTheme) {
        savedTheme = 'light';
        localStorage.setItem('theme', 'light');
    }
    document.getElementById('theme-toggle').innerHTML = savedTheme === 'dark' ? 'dark_mode' : 'light_mode';
    savedTheme === 'dark' ? document.getElementById('theme-toggle').classList.add('isDark') : document.getElementById('theme-toggle').classList.remove('isDark')
}

function toggleTheme() {
    const themeLink = document.getElementById('theme');
    if (document.getElementById('theme-toggle').classList.contains('isDark')) {
        document.getElementById('theme-toggle').classList.remove('isDark');
        themeLink.href = './mt/theme.light.css';
        localStorage.setItem('theme', 'light');
        document.getElementById('theme-toggle').innerHTML = 'light_mode';
    } else {
        document.getElementById('theme-toggle').classList.add('isDark');
        themeLink.href = './mt/theme.dark.css';
        localStorage.setItem('theme', 'dark');
        document.getElementById('theme-toggle').innerHTML = 'dark_mode';
    }
}