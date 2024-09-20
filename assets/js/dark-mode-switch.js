// 检查用户之前的主题偏好
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark" || (prefersDarkScheme.matches && !currentTheme)) {
    document.body.classList.toggle("dark-theme");
    document.querySelector("#dark-mode-toggle").textContent = "☀️";
}

function toggleDarkMode() {
    const darkModeToggle = document.querySelector("#dark-mode-toggle");
    document.body.classList.toggle("dark-theme");
    
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        darkModeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        darkModeToggle.textContent = "🌙";
    }
}

// 当页面加载完成后添加事件监听器
document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.querySelector("#dark-mode-toggle");
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", toggleDarkMode);
    }
});