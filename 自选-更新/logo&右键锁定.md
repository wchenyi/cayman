# 1、增加logo显示
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

# 2、增加右键锁定
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

**完成这些步骤后，新功能就会在您的网站上生效。每个文件都有其特定的功能：**
- ```buttons.html```: 包含按钮和搜索面板的 HTML 结构
- ```custom-buttons.css```: 包含所有按钮和面板的样式