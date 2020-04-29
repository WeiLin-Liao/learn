<template>
    <div class="tab-bar">
        <router-link to="/home">
            <i class="iconfont icon-shouye"></i>
            <span>首页</span>
        </router-link>
        <router-link to="/jingxuan">
            <i class="iconfont icon-jingxuan"></i>
            <span>精选</span>
        </router-link>
        <router-link to="/faxian">
            <i class="iconfont icon-faxian"></i>
            <span>发现</span>
        </router-link>
        <router-link to="/me">
            <i class="iconfont icon-me"></i>
            <span>我的</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'tab',
    data () {
        return {

        }
    }
}
</script>

<style lang="scss">
    .tab-bar {
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: fixed;
        z-index: 2;
        bottom: 0;
        width: 100%;
        height: 70px;
        text-align: center;
        background: #ffffff;
        box-shadow:0px 0px 6px 0px rgba(132,132,132,0.19);

        a {
            text-align: center;
            text-decoration: none;
            .iconfont {
                color: #5e5e5e;
                font-size: 30px;
            }
            span {
                margin-top: 4px;
                display: block;
                color: #727272;
                font-size: 14px;
            }
        }

        .router-link-exact-active {
            .iconfont, span {
                color: #469DEF;
            }
        }
    }
</style>