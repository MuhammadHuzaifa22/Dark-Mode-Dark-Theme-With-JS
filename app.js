const icon = document.getElementById('icon');

if (icon) {
    icon.onclick = function() {
        document.body.classList.toggle('dark-theme');

        // Optionally change the icon based on the theme
        if (document.body.classList.contains('dark-theme')) {
            icon.src = './dark theme icon/sun.png';
            icon.alt = 'Sun icon';
        } else {
            icon.src = './dark theme icon/moon.png';
            icon.alt = 'Moon icon';
        }
    };
}
