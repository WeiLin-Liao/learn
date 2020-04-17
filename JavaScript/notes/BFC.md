> 1.什么叫BFC?

```text
  块级格式化上下文；
```

> 2.BFC的原理（渲染规则）?
```text
  1.在BFC这个元素的垂直方向的边距会发生重叠；
  2.BFC的区域不会与浮动元素的BOX重叠；
  3.BFC在页面上是一个独立的容器，外面的元素不会影响里面的元素，里面的元素也不会影响外面的元素；
  4.计算BFC高度时浮动元素也会参与计算；
```

> 3.如何创建BFC?
```text
  1.float值不为none；
  2.position值不为static或relative；
  3.display值为flex、inline-flex、inline-block、table-cell
  4.overflow值不为visible
```

> 4.BFC能干嘛？
```
  1.可以利用BFC解决边距的重叠
  2.可以用来清除浮动
```