<template>
  <div class="theImage" :style="{ height: '100%', width: '100%' }">
    <input
      type="file"
      class="uploadImage"
      :id="uploadImageID"
      @change="onUploadChange"
      accept=".jpg, .jpeg, .png"
      multiple
    />
    <div class="theImageList" v-if="imageList.length">
      <div v-for="item in imageList" :key="item.id">
        <img :src="item.src" />
      </div>
    </div>
  </div>
</template>

<script>
import { compress } from '@/utils/compress'
export default {
  props: ['uploadImageID'],
  data() {
    return {
      imageList: [],
    }
  },
  methods: {
    upload() {
      document.querySelector(`#${this.uploadImageID}`).click()
    },
    onUploadChange() {
      const files = document.querySelector(`#${this.uploadImageID}`).files
      const filelist = Array.from(files)
      filelist.forEach((element) => {
        compress(element, (blob) => {
          const hasTheOne = this.imageList.some((el) => {
            return el.id === element.name
          })
          if (hasTheOne) {
            console.log(`选过这个了:${element.name}`)
            return
          }

          this.imageList.unshift({ id: element.name, src: URL.createObjectURL(blob) })
        })
      })
    },
  },
}
</script>

<style lang="less" scoped>
.theImage {
  position: relative;
}
.uploadImage {
  opacity: 0;
  position: absolute;
}
.theImageList {
  height: 100%;
  width: 100%;
  .flexLeftAndTop();
  flex-wrap: nowrap;
  img {
    max-height: 200px;
  }
}
</style>
