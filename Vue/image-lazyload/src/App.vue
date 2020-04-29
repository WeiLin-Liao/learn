<template>
  <div id="app">
    <div class="douban-top-ten">
      <div v-for="(item, key) in image" :key="key">
        <img v-lazy="item">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      image: [
        'https://cdn.mom1.cn/img/mom19-12%20(94).jpg',
        'http://img3.imgtn.bdimg.com/it/u=298431224,3357531727&fm=26&gp=0.jpg',
        'http://img5.imgtn.bdimg.com/it/u=208726670,698677599&fm=26&gp=0.jpg',
        'http://img0.imgtn.bdimg.com/it/u=2428675328,2474845448&fm=26&gp=0.jpg',
        'http://img0.imgtn.bdimg.com/it/u=284619070,2403770816&fm=26&gp=0.jpg',
        'http://img0.imgtn.bdimg.com/it/u=1558994602,1605433454&fm=26&gp=0.jpg',
        'http://img5.imgtn.bdimg.com/it/u=1517087636,1857782439&fm=26&gp=0.jpg',
        'http://img5.imgtn.bdimg.com/it/u=2854825721,1035605202&fm=26&gp=0.jpg',
        'https://cdn.mom1.cn/img/mom2018%20(724).jpg',
        'https://cdn.mom1.cn/img/mom-2019%20(111).jpg',
        'https://cdn.mom1.cn/img/mom2018%20(431).jpg',
        'https://cdn.mom1.cn/img/mom2018%20(704).jpg'
      ]
    }
  }
}
</script>

<style lang="scss">
  html, body {
    margin: 0;
  }
  .douban-top-ten {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    div {
      text-align: center;

      img {
        width: 200px;
        height: 200px;
      }
    }
  }
</style>
