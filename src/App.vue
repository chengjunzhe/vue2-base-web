<template>
  <div id="app">
    <div>nav</div>
    <div id="theCount">{{ theCount }}</div>
    <div>foot</div>
  </div>
</template>

<script>
import anime from 'animejs'
export default {
  data() {
    return {
      theCount: 4500,
    }
  },
  created() {
    new Promise((res) => {
      setTimeout(() => {
        res(500)
      }, 2000)
    }).then((count) => {
      anime({
        targets: this,
        round: 1,
        duration: 3000,
        theCount: count,
        easing: 'cubicBezier(0.000, 1.010, 1.000, -0.600)',
      })
    })
  },
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #2c3e50;
  height: 100vh;
  width: 100%;
  .flexColumnBetweenCenter();
}
#theCount {
  color: aliceblue;
  font-size: 200px;
}
</style>
