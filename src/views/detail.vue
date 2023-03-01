<!-- 首页 -->
<template>
  <div class="detail">
    <div class="header" :style="'background-image: url(' + headerBg + ');'">
      <div class="container">
        <span class="title">某JS逆向记录</span>
        <span class="author_date">
          <i class="ycyui icon-history">2023-01-05</i>
          <i class="ycyui icon-user">一条咸鱼</i>
        </span>
      </div>
    </div>
    <div class="container">
      <Blogs></Blogs>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MyFooter from "@/components/footer.vue";
import Blogs from "./module/blogs.vue";

export default defineComponent({
  name: "detail",
  components: { MyFooter, Blogs },
  data() {
    return {
      headerBg: "",
      msg: "asdasdasd"
    }
  },
  setup() {

  },
  methods: {
    getMsg(val: any) {

    }
  },
  created() {
    ;
  },
  mounted() {
    if (this.headerBg === "") {
      this.headerBg = "https://ytxy-images.oss-cn-shanghai.aliyuncs.com/wallpaper/1671418336253.jpg";
    }
  }
})
</script>

<style scoped lang="scss">
@import "src/assets/css/views/detail.scss";
</style>