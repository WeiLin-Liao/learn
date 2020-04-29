<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive include="home">
        <router-view></router-view>
      </keep-alive>
    </transition>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import TabBar  from '@/components/tabbar'
  export default {
    name: 'App',
    data () {
      return {
        transitionName: '',
        clientX: 0,
        clientY: 0
      }
    },
    watch: {
      $route (to, from) {
        if (from.name === null) {
          return
        }
        if (to.meta.index > from.meta.index) {
          this.transitionName = "slide-left"
        } else {
          this.transitionName = "slide-right"
        }
      }
    },
    components: {
      TabBar
    }
  }
</script>

<style>
  html, body, #app {
    height: 100%;
  }
  .content {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -70px;
    width:100%;
    height: 100%;
    color: #ffffff;
    transition: .38s ease-in-out;
    transition: all .8s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    transform: translateX(92%);
  }
  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    transform: translateX(-92%);
  }
</style>
