<!-- logo -->
<p align="center">
    <a href="https://wangcy.tk" alt="Wangcy Logo">
    <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9896bb2e-d7f9-41ac-a4e6-5f9ac2d2f652%2FWCY%E7%9A%84%E4%B8%AA%E4%BA%BAlogo.png?table=block&id=e714d3e8-f158-486c-87e0-baa42b87f805" height="173"/></a>
</p>

<!--个人项目跳转页-->
<div align="center">
    <a href="https://donate.wangcy.tk">投喂</a>|
    <a href="http://wangcy.tk/cayman/">在线预览</a>
</div>

# 目录

> [修改简介](#%E4%BF%AE%E6%94%B9%E7%AE%80%E4%BB%8B)<br>
> [修改内容](#%E4%BF%AE%E6%94%B9%E5%86%85%E5%AE%B9)<br>
> [修改方法](#%E4%BF%AE%E6%94%B9%E6%96%B9%E6%B3%95)

# 修改简介

本站以Jekyll的[Cayman](https://github.com/pages-themes/cayman)主题为基础，深度定制了本站主题，并不适合其他人用作自己的*jekyll*主题，如需使用还请使用[原版](https://github.com/pages-themes/cayman)。在这里说出修改的部分，但请注意本人并非系统训练过的开发者，所以在专业词汇和内容上可能不够精确或者完全不对，请大佬们多多包涵。

# 修改内容

- 修改原来的标头按钮，增加数量并赋予绝对链接<br>
- 将原本的单页布局改为类似于博客那种层层嵌套<br>
- 取消了对于本来GIthub的链接，增加了页面logo<br>
- 增加可选功能添加
- ……

# 修改方法

这里所写明的是针对原版主题[Cayman](https://github.com/pages-themes/cayman)的个性化修改内容，为了便于修改，我删掉了原本的[README](https://github.com/pages-themes/cayman#readme)。重写了自己需要的修改部分，想要查看原文档的请去看原本的仓库。本主题只为本人的一个项目[Wall](https://wangcy.tk/wall)做深度定制，所以不适合其他人直接配使用，如果你对本站的修改模式和成品效果感兴趣的话可以自行按照本站所提供的基础和方法修改出您想要的页面主题。<br>
在这里对原作者表示衷心的敬佩和感谢，如果本文内容有侵权或者其他违规内容，请联系本人，本人会在第一时间进行删除，并作出道歉。
    
## 1.修改远程主题配置
- 首先，[Fork](https://github.com/pages-themes/cayman)主题**Cayman**。<br>
- 如果你要在你的站点使用本托管主题，需要在你的站点的```_config.yml```文件中配置远程主题名，书写规范为```renmote_theme: username/主题仓库名```，例如使用本主题如下所示：

```yaml
remote_theme: wchenyi/cayman
 ```
 
## 2.主题基础配置：
这部分是Jekyll等原主题支持的配置

### ① 配置变量
本主题支持以下变量，只需要在您的网站的```_config.yml```中进行下列配置：
```yml
title: [The title of your site]
description: [A short description of your site's purpose]
```
此外，您可以选择设置以下可选变量：
```yml
show_downloads: ["true" or "false" (unquoted) to indicate whether to provide a download URL]
google_analytics: [Your Google Analytics tracking ID]
```

### ③ 样式表
如果您想添加自己的自定义样式：
1. 创建在站点中调用的文件```/assets/css/style.scss```
2. 将以下内容添加到文件顶部，如下所示：
```yml
---
---

@import "{{ site.theme }}";
```
3. 在该行之后立即添加您想要的任何自定义 CSS（或 Sass，包括导入）```@import```
注意：如果要更改主题的 Sass 变量，则必须在样式表中的```@import```行之前设置新值。

### ③ 页面布局
如果您想更改主题的 HTML 布局：

1. 对于某些更改（如自定义 ），您可以在本地文件夹中添加自定义文件。[随主题提供](https://github.com/pages-themes/cayman/tree/master/_includes)的文件提供了一个起点，并包含在原始布局模板中。```favicon_includes```
2. 要进行更广泛的更改，请从主题的存储库中复制原始[模板](https://github.com/pages-themes/cayman/blob/master/_layouts/default.html)（专业提示：单击“原始”以使复制更容易)
3. 创建在站点中调用的文件```/_layouts/default.html```
4. 粘贴第一步中复制的默认布局内容
5. 根据需要自定义布局

### ④ 自定义谷歌分析代码
自此主题首次创建以来，Google多年来已经发布了其Google Analytics代码的几次迭代。如果您想利用最新的代码，请将其粘贴到您的 Jekyll 网站中。```_includes/head-custom-google-analytics.html```

### ⑤ 覆盖 GitHub 生成的网址
模板通常依赖于 GitHub 提供的 URL，例如指向存储库的链接或用于下载项目的链接。如果您想覆盖一个或多个默认网址：

1. 查看[模板源](https://github.com/pages-themes/cayman/blob/master/_layouts/default.html)以确定变量的名称。它将采用 ```.{{ site.github.zip_url }}```
2. 指定您希望模板在站点中使用的 URL。例如，如果变量为 ，则应添加以下内容：```_config.ymlsite.github.url```
```yml
github:
  zip_url: http://example.com/download.zip
  another_url: another value
```
3. 构建网站后，Jekyll 将使用您指定的 URL，而不是 GitHub 提供的默认 URL。
注意：您必须删除```.site```，并且每个变量名称（在 github 之后）都应缩进，并在 ```github：``` 下面有两个空格。

有关更多信息，请参阅 [Jekyll 变量文档](https://jekyllrb.com/docs/variables/)。

## 3.页面元素修改
- **顶部三框修改**
  - 在```layout```文件中选择```default.html```修改```<header class="page-header" role="banner">```字段
- **底部内容修改**
  - 在```layout```文件中选择```default.html```修改```<footer class="site-footer">```字段
  
## 4.其他修改（自选添加）
可根据需要在```default.html```中添加到```<head></head>```中间的任意不干扰其他元素的位置

### ① 增加logo显示
  - 在```layout```文件中选择```default.html```修改```<fhead">```字段，新增以下内容：
```html
<!--网站图标显示方法 ↓ -->
    <link rel="shortcut icon" href="#">
    <link rel="bookmark" href="#">
    <link rel="icon" href="#" />
    <!--Safari图标显示方法 ↓ -->
    <link rel="a#">
    <!--<link rel="apple-touch-icon" sizes="76x76" href="#">
    <link rel="apple-touch-icon" sizes="120x120" href="#">
    <link rel="apple-touch-icon" sizes="152x152" href="#">-->
```
  - 在```_includes```文件选择```head-custom.html```在```<head>```字段增加```<!-- You can set your favicon here -->```下面的内容

### ② 增加深色模式切换(页面反色)
  - 在```layout```文件增加了深色模式切换选项（颜色反转，不习惯的不要使用）
```html
<!--深色模式-->
    <script src="https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js"></script>
    <script>
      function addDarkmodeWidget() {
      new Darkmode().showWidget();
      }
      window.addEventListener('load', addDarkmodeWidget);
    </script><!--深色模式-->
```

### ③ 增加右键锁定
```html
<script>
       function clear() {
       Source=document.body.firstChild.data;
       document.open();
       document.close();
       document.body.innerHTML=Source;
      }
    </script>
```
