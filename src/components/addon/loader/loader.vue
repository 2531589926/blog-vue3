<template>
  <div class="y-loader">
    <div ref="loader" class="loader">
      <div :class="loaderData.name" v-html="loaderData.html"></div>
      <span class="tips" v-if="loaderTips !== ''">{{ loaderTips }}</span>
    </div>
  </div>
</template>

<script>
import { loader } from "./loader.js"
import "./loader.scss";

export default {
  name: "y-loader",
  props: {
    //类型
    type: "",
    //提示
    tips: "",
    //大小
    size: "",
    //颜色
    color: "",
  },
  data() {
    return {
      loaderType: "ball-beat",
      loaderData: {},
      loaderTips: "",
      loaderSize: "",
      loaderColor: "",
    }
  },
  methods: {
    //设置类型
    setLoaderData() {
      let data = loader.dataList.find(v => v.name === this.loaderType);
      this.loaderData = data === undefined ? loader.dataList[0] : data;
    },
    //设置大小
    setLoaderSize() {
      let size = loader.sizeList.find(v => v.name === this.loaderSize);
      size = size === undefined ? loader.sizeList[1].size : size.size;
      this.$refs.loader.style.setProperty(`--this-loader-size`, size);
    },
    //设置颜色
    setLoaderColor() {
      this.$refs.loader.style.setProperty(`--this-loader-color`, this.loaderColor);
    },
  },
  mounted() {
    if (this.type !== "" && this.type !== undefined) {
      this.loaderType = this.type;
    }
    if (this.tips !== "" && this.tips !== undefined) {
      this.loaderTips = this.tips;
    }
    if (this.size !== "" && this.size !== undefined) {
      this.loaderSize = this.size;
      this.setLoaderSize();
    }
    if (this.color !== "" && this.color !== undefined) {
      this.loaderColor = this.color;
      this.setLoaderColor();
    }
    this.setLoaderData();
  },
}
</script>