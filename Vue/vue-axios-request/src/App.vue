<template>
  <div id="app">
    <div class="pic">
      <img :src="result.images">
      <p>{{result.name}}</p>
      <p>{{result.text}}</p>
      <p>{{result.top_comments_content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      result: {}
    }
  },
  mounted () {
    this.$api.get('/getJoke', {
      count: 1,
      type: 'image'
    }, response => {
      if (response.data.code == 200) {
        this.result = response.data.result[0]
      }
    })
  }
}
</script>

<style lang="scss">
  html, body {
    margin: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .pic {
    img {
      width: 100%;
    }
  }
</style>
