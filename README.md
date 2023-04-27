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
- 增加了深色模式切换
- ……

# 修改方法

这里所写明的是针对原版主题[Cayman](https://github.com/pages-themes/cayman)的个性化修改内容，为了便于修改，我删掉了原本的[README](https://github.com/pages-themes/cayman#readme)。重写了自己需要的修改部分，想要查看原文档的请去看原本的仓库。本主题只为本人的一个项目[Wall](https://wangcy.tk/wall)做深度定制，所以不适合其他人直接配使用，如果你对本站的修改模式和成品效果感兴趣的话可以自行按照本站所提供的基础和方法修改出您想要的页面主题。<br>
在这里对原作者表示衷心的敬佩和感谢，如果本文内容有侵权或者其他违规内容，请联系本人，本人会在第一时间进行删除，并作出道歉。
    
## 1.修改远程主题配置
[Fork](https://github.com/pages-themes/cayman)主题**Cayman**，在 *_config.yml*中**变更主题名**为你想要的名字，这部分的主题名也是用作你的站店的远程配置名。具体修改格式如下⬇️
  
```yaml
remote_theme: wchenyi/cayman
 ```
## 2.主题基础配置：
- 在```jekyll-theme-cayman.gemspec*```文件修改改```name```，```title```字段要和*_config.yml*中的字段保持一致
- ```_config.yml```修改```title```和```remote_theme```
  
## 3.页面元素修改
- **顶部三框修改**
  - 在```layout```文件中选择```default.html```修改```<header class="page-header" role="banner">```字段
- **底部内容修改**
  - 在```layout```文件中选择```default.html```修改```<footer class="site-footer">```字段
  
## 4.其他修改
- **增加logo显示**
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

- **增加深色模式切换**
  - 在```layout```文件增加了深色模式切换选项（颜色反转，不习惯的不要使用）

<!--网站图标显示方法 ↓ -->
