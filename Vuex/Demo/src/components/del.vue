<template>
  <div class="container">
    <button @click="delCount">-</button>
  </div>
</template>

<script>
export default {
  name: 'Del',
  methods: {
    delCount () {
      // this.$store.state.count -= 1
      this.$store.commit('del', 1)
    }
  }
}
</script>

<style lang="css">

</style>
