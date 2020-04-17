- 公共样式

```html
<head>
	<style>
		#div {
		 height: 300px;
		}
	</style>
</head>

<body>
	<div id="div" style="width: 200px;"></div>
</body>
```

## 1. dom.style.width/height  // 取内联的值

```js
var div = document.getElementById('div');
var width = div.style.width
var height = div.style.height

console.log(width) // 200px
console.log(height) // ""
```

```txt
取值:
  parseInt(div.style.width);  // 用parseInt转换成整数
缺点：
  只能取内联的宽高
优点：
  能取值也能赋值
```

### 2.dom.currentStyle.width/height   // 取渲染后的值

```js
var div = document.getElementById('div')
var width = div.currentStyle.width
var height = div.currentStyle.height

console.log(width) // 200px
console.log(height) // 300px
```

```text
缺点：
  该属性只支持IE
  该方法只读不允许写入
  返回值不是计算后的值
```

### 3.window.getComputedStyle(dom).width/height
```js
var div = document.getElementById('div')
var width = window.getCoputedStyle(div).width
var height = window.getCoputedStyle(div).height

console.log(width) // 200px
console.log(height) // 300px
```

```text
缺点：
  该方法只读不允许写入
  IE8及以下浏览器不兼容
优点：
  获的是取计算后的值
```

### 4.dom.getBoundingClientRect().width/height
```js
var div = document.getElementById('div')
var width = div.getBoundingClientRect().width
var height = div.getBoundingClientRect().height

console.log(width) // 200
console.log(height) // 300
```

### 5.dom.offsetWidth/offsetHeight

```js
var div = document.getElementById('div')
var width = div.offsetWidth
var height = div.offsetHeight

console.log(width) // 200
console.log(height) // 300
```