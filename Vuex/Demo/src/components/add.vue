<template>
  <div class="container">
    <button @click="addCount">+</button>
  </div>
</template>

<script>
export default {
  name: 'Add',
  methods: {
    addCount () {
      // this.$store.state.count += 1
      this.$store.commit('add', 1)
    }
  }
}
</script>

<style lang="css">

</style>
