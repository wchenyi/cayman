// 检查用户之前的主题偏好和系统主题
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

function setTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
}

// 初始化主题
if (currentTheme) {
    setTheme(currentTheme);
} else if (prefersDarkScheme.matches) {
    setTheme("dark");
} else {
    setTheme("light");
}

function toggleTheme() {
    if (document.body.classList.contains("dark-theme")) {
        setTheme("light");
        localStorage.setItem("theme", "light");
    } else {
        setTheme("dark");
        localStorage.setItem("theme", "dark");
    }
}

// 当页面加载完成后添加事件监听器
document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.querySelector(".theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", toggleTheme);
    }
});

// 监听系统主题变化
prefersDarkScheme.addListener((e) => {
    const currentTheme = localStorage.getItem("theme");
    if (!currentTheme) {
        setTheme(e.matches ? "dark" : "light");
    }
});
