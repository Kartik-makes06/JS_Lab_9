
// Apply theme and save to both storages
function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }

    // Save to localStorage (persists even after browser is closed)
    localStorage.setItem('theme', theme);

    // Save to sessionStorage (clears when tab/browser is closed)
    sessionStorage.setItem('sessionTheme', theme);


}

// Clear preference from both storages
function clearPreference() {
    localStorage.removeItem('theme');
    sessionStorage.removeItem('sessionTheme');
    document.body.classList.remove('dark');

}

// On page load, restore saved theme from localStorage
window.onload = function () {
    var saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        document.body.classList.add('dark');
    }

};
