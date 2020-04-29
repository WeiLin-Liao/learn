## let
---
- 不存在变量提升

    ```js
    console.log(foo) // undefined
    var foo = 2

    console.log(bar) // ReferenceError
    let bar = 1
    ```

- 暂时性死区

    只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。

    ```js
    var temp = 2

    {
        temp = 3 // ReferenceError
        let temp
    }
    ```

- 不允许重复声明

    ```js
    // Uncaught SyntaxError: Identifier 'a' has already been declared
    function func () {
        let a = 12
        var a = 1
    }

    // Uncaught SyntaxError: Identifier 'a' has already been declared
    function func () {
        let a = 10
        let a = 1
    }
    ```

## const
---

- 声明后不允许改变

    const声明一个只读的常量。一旦声明，常量的值就不能改变。

    ```js
    const a = 1

    // TypeError: Assignment to constant variable.
    a = 2
    ```
- 不允许重复声明

    const声明的常量，也与let一样不可重复声明。

    ```js
    var a  = 1
    let b = 2

    // Uncaught SyntaxError: Identifier 'a' has already been declared
    const a = 2
    // Uncaught SyntaxError: Identifier 'b' has already been declared
    const b = 1
    ```
- 暂存性死区

    const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。

    ```js
    {
        // ReferenceError
        console.log(a)
        const a = 5
    }
    ```

## 解构赋值

- 数组解构赋值
    ```js
    let [a, b, c] = [1, 2, 3]
    
    console.log(a) // 1
    console.log(b) // 2
    console.log(c) // 3

    let [a, ...b] = [1, 2, 3, 4]
    
    console.log(a) // 1
    console.log(b) // [2,3,4]

    ```

    如果一个数组成员是null，默认值就不会生效，因为null不严格等于undefined。

    ```js
    let [x = 1] = [undefined]
    console.log(x) // 1

    let [x = 1] = [null]
    console.log(null)
    ```
- 对象解构赋值

    如果解构失败，变量的值等于undefined

    ```js
    let { foo, bar } = { foo: 1, bar: 2 }

    console.log(foo) // 1
    console.log(bar) // 2
    ```

    对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量

    ```js
    const { log } = console

    log('哈哈') // '哈哈'
    ```

    如果变量名与属性名不一致，必须写成下面这样

    ```js
    let { foo: f } = { foo: 'aaa', bar: 'bbb' }

    console.log(f) // 'aaa'

    let { hello: h, word: w } = { hello: 'hello', word: 'word' }

    console.log(h) // 'hello'
    console.log(w)  // 'word'
    ```
## 