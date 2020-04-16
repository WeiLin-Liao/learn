## 记录一下echart中遇到的问题

- 居中对齐
    ```js
        series: {
            x: 'center'
        }
        title: {
            x: 'center'
        }
    ```

- 去除统计图横线或竖线
    ```js
    xAxis: {
        splitLine: {
            show: false
        }
    }
    ```

- 修改统计图边缘字体颜色
    ```js
    xAxis: {
        axisLabel: {
            fontSize: 12,
            color: '#fff'
        }
    }
    yAXis: [
        {
            show: true,
            data: [],
            axisLabel: {
                fontSize: 12,
                color: '#fff'
            }
        },
        {
            axisLabel: {
                fontSize: 12,
                color: '#fff'
            }
        }
    ]
    ```