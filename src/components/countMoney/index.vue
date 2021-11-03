<template>
  <div id="theCount">{{ theCount }}</div>
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

<style lang="less" scoped>
#theCount {
  color: aliceblue;
  font-size: 200px;
}
</style>
