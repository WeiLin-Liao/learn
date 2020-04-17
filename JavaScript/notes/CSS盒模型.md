1.盒子模型的组成由：

```text
 内容（content）填充（padding）边框（border）外边距（margin）组成；
```

2.盒子模型分为两种：

```text
  标准盒模型 和 IE盒模型；
```

3.标准盒模型和IE盒模型的区别在于： 

```text
  他们的宽度（width）和高度（height）的计算方式不一样；
```

4.表准盒模型的计算方式：

```text
  只计算 内容（content）的宽高，实际就是设置的宽高（width|height）；
```

5.IE盒模型的计算方式：

```text
  计算 内容（content）+ 填充（padding）+ 边框（border）的总宽高
```

6.切换盒模型方法：

```text
  box-sizing：content-box;    // 标准盒模型  浏览器默认的模型
  box-sizing：border-box;  // IE盒模型
```