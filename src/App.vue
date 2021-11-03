<template>
  <div id="app">
    <div id="top">nav</div>
    <div id="middle">
      <div class="tenUpload">
        <UploadImage ref="theUploadOne" uploadImageID="ten"></UploadImage>

        <img @click="uploadOne" class="uploadTitle" src="./assets/iFonts-日常-1000x400.png" alt="" />
        <div class="uploadOkCon"><img class="uploadOk" src="./assets/iFonts-ok-1000x400.png" alt="" /></div>
      </div>
      <div class="fifteenUpload">
        <UploadImage ref="theUploadTwo" uploadImageID="fifteen"></UploadImage>

        <img @click="uploadTwo" class="uploadTitle" src="./assets/iFonts-加练-1000x400.png" alt="" />
        <div class="uploadOkCon"><img class="uploadOk" src="./assets/iFonts-ok-1000x400.png" alt="" /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    uploadTwo() {
      this.$refs.theUploadTwo.upload()
    },
    uploadOne() {
      this.$refs.theUploadOne.upload()
    },
  },
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #5a5a5a;
  height: 100vh;
  width: 100%;
  .flexColumnBetweenCenter();
}
#top {
  height: 80px;
  width: 100%;
  background-color: rgb(61, 61, 61);
}
#middle {
  width: 100%;
  height: 100%;
  .flexBetween();
}
.tenUpload {
  height: 100%;
  width: 100%;
  background-color: rgb(160, 160, 160);
  position: relative;
}
.fifteenUpload {
  height: 100%;
  width: 100%;
  background-color: rgb(109, 109, 109);
  position: relative;
}
.uploadTitle {
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
.uploadOkCon {
  height: 100px;
  width: 100px;
  background-color: rgba(44, 97, 141, 0.103);
  border-radius: 100%;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  overflow: hidden;
  cursor: pointer;
  .uploadOk {
    width: 150px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
