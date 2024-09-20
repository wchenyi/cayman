# 深色模式🌓
1️⃣ 根目录下创建一个新的文件夹，名为 ```assets/js```，然后在其中创建一个新文件 ```dark-mode-switch.js```

```javascript
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
```

2️⃣ 修改CSS，在```_sass/jekyll-theme-cayman.scss``` 文件中。您可以在文件末尾添加以下CSS：
```css
/* 深色模式样式 */
body.dark-theme {
    background-color: #2b2b2b;
    color: #e0e0e0;
}

body.dark-theme .page-header {
    background-color: #1b1b1b;
    background-image: linear-gradient(120deg, #155799, #159957);
}

body.dark-theme .main-content h1,
body.dark-theme .main-content h2,
body.dark-theme .main-content h3,
body.dark-theme .main-content h4,
body.dark-theme .main-content h5,
body.dark-theme .main-content h6 {
    color: #159957; /* 保持原来的绿色 */
}

body.dark-theme a {
    color: #1e90ff; /* 使用深蓝色来提高可读性 */
}

/* 深色模式切换按钮样式 */
.theme-toggle {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #ffffff;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

.theme-toggle:hover {
    transform: scale(1.1);
}

.theme-toggle .icon {
    width: 24px;
    height: 24px;
    transition: all 0.3s ease;
}

.theme-toggle .sun {
    opacity: 1;
}

.theme-toggle .moon {
    opacity: 0;
    position: absolute;
}

body.dark-theme .theme-toggle {
    background-color: #2b2b2b;
}

body.dark-theme .theme-toggle .sun {
    opacity: 0;
}

body.dark-theme .theme-toggle .moon {
    opacity: 1;
}

/* 添加过渡效果 */
body {
    transition: background-color 0.3s ease, color 0.3s ease;
}

.page-header, .main-content h1, .main-content h2, .main-content h3, 
.main-content h4, .main-content h5, .main-content h6, a {
    transition: color 0.3s ease, background-color 0.3s ease, background-image 0.3s ease;
}

@media screen and (max-width: 42em) {
    .theme-toggle {
        width: 40px;
        height: 40px;
    }
    
    .theme-toggle .icon {
        width: 20px;
        height: 20px;
    }
}
```
3️⃣ 修改布局文件,在主布局文件```_layouts/default.html```。在 </body> 标签之前添加以下代码：
```html
<button class="theme-toggle" aria-label="Toggle Dark Mode">
  <svg class="icon sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
  <svg class="icon moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</button>
<script src="{{ '/assets/js/dark-mode-switch.js' | relative_url }}"></script>
```
4️⃣ 更新 ```_config.yml```，确保```_config.yml``` 文件中包含以下行，以允许自定义JavaScript文件：
```yaml
include:
  - assets/js
```
5️⃣ 可选-调整饱和度
如果您想调整深色模式下的颜色饱和度，可以在 CSS 中使用 HSL 颜色模型。例如，要稍微降低饱和度，可以这样修改：
```css
body.dark-theme {
    background-color: hsl(0, 0%, 17%);  /* 略微降低饱和度的深灰色 */
    color: hsl(0, 0%, 88%);  /* 略微降低饱和度的浅灰色 */
}
```
