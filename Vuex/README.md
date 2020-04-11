# vuex学习笔记

## 1.  安装vuex
```bash
npm install vuex --save
```

## 2. 导入vuex创建store对象
```js
// store/index.js

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        count: 0
    }
})
```

## 3. 将Store挂载到vue实例
```js
// main.js

import store from './store'

new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
```

--- 

## 4. 核心概念

> ##  1. State

- 访问State数据的`第一种方式`

    ```html
    <view>{{$store.state.count}}</view>
    ```

    ```js
    this.$store.state.count += 1
    ```
- 访问State数据的`第二种方式`

    ```js
    import { mapState } from 'veux'

    computed: {
        ...mapState(['count'])
    }
    ```

    ```html
    <view>{{count}}</view>
    ```
> ## 2. Mutation（只支持同步操作）

- 第一种方式

    ```js
    // store/index.js

    export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        add (state, step) {
            state.count += step
        }
    }
    })
    ```

    ```js
    // components/.vue

    methods: {
        add () {
            // 触发mutations
            this.$store.commit('add', 1)
        },
        del () {
            this.$store.commit('del', 1)
        }
    }
    ```
- 第二种方式

    ```js
    // components/.vue

    // 导入mapMutations函数
    import { mapMutations } from 'vuex'


    methods: {
        // 将mapMutations映射到当前组件
        ...mapMutations(['add', 'del']),

        // 直接调用即可
        tapEvent () {
            this.add()
            this.del()
        }
    }
    ```

> ## 3. Action（支持异步操作）

- 第一种方法

    ```js
    // store/index.js

    export default new Vuex.Store({
        state: {
            count: 0
        },
        mutations: {
            add (state, step) {
                state.count += step
            }
        },
        actions: {
            addSync (context) {
                setTimeout(() => {
                    // 通过触发Mutations的方式间接变更数据
                    context.commit('add')
                }, 1000)
            }
        }
    })
    ```

    ```js
    // components/.vue

    methods: {
        handle () {
            // 触发actions
            this.$store.dispatch('addSync')
        }
    }
    ```
- 第二种方法

    ```js
    // 导入mapActions函数
    import { mapActions } from 'vuex'

    // 将函数映射为当前组件的methods中
    methods: {
        ...mapActions(['addSync']),

        handle () {
            this.addSync(1)
        }
    }

    ```
 
> ## 4. Getter

- 第一种方法

    ```js
    // store/index.js

    export default new Vuex.Store({
        state: {
            count: 0
        },
        getters: {
            showCount (state) {
                return state.count
            }
        }
    })
    ```

    ```js
    // 访问

    this.$store.getters.showCount()
    ```

- 第二种方法

    ```js
    import { mapGetters } from 'vuex'

    computed: {
        ...mapGetters(['showCount'])
    }

    this.$store.getters.showCount()
    ```

    ```html
    <view>{{showCount}}</view>
    ```