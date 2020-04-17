### DOM事件

DOM事件类 | 事件级别
---|---
DOM0 | element.onclick = function(){}
DOM2 | element.addEventListener('click',function(){}, false)
DOM3 | element.addEventListener('keyup', function(){}, false)

---

### DOM事件模型：

- 冒泡和捕获

- DOM事件流：
 - 捕获阶段 -> 目标阶段 -> 冒泡阶段

- DOM事件捕获的流程：

  window
       👇
  document
       👇
     html
       👇
     body
       👇
     .........
       👇
   目标元素

- DOM事件冒泡的流程：

	window
	   👆
	document
	   👆
	html
	   👆
	body
	   👆
	.........
	   👆
	目标元素

### 常见的Event对象：

```js
  event.preventDefault()	// 阻止默认行为

  event.stopPropagation()	// 阻止冒泡

  event.stopImmediatePropagation()	// 取消事件的进一步获取

  event.currentTarget // 当前所绑定的事件
  
  event.target  // 当前被点击的元素
```
### 自定义事件：

```js
var eve = new Event('custome'); // 创建事件
// 定义事件
dom.addEventListener(eve', function(event) {
	console.log('custome');
})

dom.dispatchEvent(eve);  // 触发事件

var eve = new CustomEvent('custome', {
	detail: {
	   a: 1,
	   b: 2
	}
});
dom.addEventListener(eve', function(event) {
	console.log('custome');
})

dom.dispatchEvent(eve);  // 触发事件
```