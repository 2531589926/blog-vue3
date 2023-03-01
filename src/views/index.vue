<!-- 首页 -->
<template>
  <div ref="HomeBox" class="home-box">
    <div ref="FirstBox" class="first-box">
      <span class="title">咸鱼</span>
    </div>
    <div class="next-btn-box">
      <i @click="scrollPage()" class="next-page-btn ycyui icon-down"></i>
    </div>
    <div class="message">
      <p>2023</p>
      <span>{{ poetry }}</span>
    </div>
    <span class="next"></span>
    <div class="container-box">
      <div class="container">
        <template v-for="(item, index) in blogList" :key="index">
          <div class="blog-card animate__zoomIn wow" data-wow-duration="1s">
            <blog-card :data="item" @jump-url="jumpPage"></blog-card>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, inject } from 'vue';
import WOW from "wow.js";
import BlogCard from "@/components/module/blog-card.vue"

export default defineComponent({
  name: "home",
  components: {
    BlogCard
  },
  data() {
    return {
      //博客list
      blogList: [
        {
          id: 0,
          title: "某JS逆向记录",
          img: "https://ytxy-images.oss-cn-shanghai.aliyuncs.com/wallpaper/1671725084009.jpg?x-oss-process=image/resize,l_768/format,webp",
          message: "最近我冤种堂哥给我提了一个需求，要下载他买的付费课程，要过期了。我脑子第一件事就是蹦出来，这不就找m3u8下载嘛，立马动手。但是随之而来第一个问题，那个网站的m3u8播放地址是通过点击播放触发js随机生成的，没法找规律（后面深入观察，其实有规律的）",
          createDate: "2023-01-05",
          views: 999,
          labels: [
            {
              id: "",
              label: "JAVA",
            },
            {
              id: "",
              label: "JS",
            },
            {
              id: "",
              label: "编程",
            }
          ]
        },
        {
          id: 0,
          title: "某JS逆向记录",
          img: "https://ytxy-images.oss-cn-shanghai.aliyuncs.com/wallpaper/1671725084009.jpg?x-oss-process=image/resize,l_768/format,webp",
          message: "最近我冤种堂哥给我提了一个需求，要下载他买的付费课程，要过期了。我脑子第一件事就是蹦出来，这不就找m3u8下载嘛，立马动手。但是随之而来第一个问题，那个网站的m3u8播放地址是通过点击播放触发js随机生成的，没法找规律（后面深入观察，其实有规律的）",
          createDate: "2023-01-05",
          views: 999,
          labels: [
            {
              id: "",
              label: "JAVA",
            },
            {
              id: "",
              label: "JS",
            },
            {
              id: "",
              label: "编程",
            }
          ]
        },
        {
          id: 0,
          title: "某JS逆向记录",
          img: "https://ytxy-images.oss-cn-shanghai.aliyuncs.com/wallpaper/1671725084009.jpg?x-oss-process=image/resize,l_768/format,webp",
          message: "最近我冤种堂哥给我提了一个需求，要下载他买的付费课程，要过期了。我脑子第一件事就是蹦出来，这不就找m3u8下载嘛，立马动手。但是随之而来第一个问题，那个网站的m3u8播放地址是通过点击播放触发js随机生成的，没法找规律（后面深入观察，其实有规律的）",
          createDate: "2023-01-05",
          views: 999,
          labels: [
            {
              id: "",
              label: "JAVA",
            },
            {
              id: "",
              label: "JS",
            },
            {
              id: "",
              label: "编程",
            }
          ]
        }, {
          id: 0,
          title: "某JS逆向记录",
          img: "https://ytxy-images.oss-cn-shanghai.aliyuncs.com/wallpaper/1671725084009.jpg?x-oss-process=image/resize,l_768/format,webp",
          message: "最近我冤种堂哥给我提了一个需求，要下载他买的付费课程，要过期了。我脑子第一件事就是蹦出来，这不就找m3u8下载嘛，立马动手。但是随之而来第一个问题，那个网站的m3u8播放地址是通过点击播放触发js随机生成的，没法找规律（后面深入观察，其实有规律的）",
          createDate: "2023-01-05",
          views: 999,
          labels: [
            {
              id: "",
              label: "JAVA",
            },
            {
              id: "",
              label: "JS",
            },
            {
              id: "",
              label: "编程",
            }
          ]
        }, {
          id: 0,
          title: "某JS逆向记录",
          img: "https://ytxy-images.oss-cn-shanghai.aliyuncs.com/wallpaper/1671725084009.jpg?x-oss-process=image/resize,l_768/format,webp",
          message: "最近我冤种堂哥给我提了一个需求，要下载他买的付费课程，要过期了。我脑子第一件事就是蹦出来，这不就找m3u8下载嘛，立马动手。但是随之而来第一个问题，那个网站的m3u8播放地址是通过点击播放触发js随机生成的，没法找规律（后面深入观察，其实有规律的）",
          createDate: "2023-01-05",
          views: 999,
          labels: [
            {
              id: "",
              label: "JAVA",
            },
            {
              id: "",
              label: "JS",
            },
            {
              id: "",
              label: "编程",
            }
          ]
        }, {
          id: 0,
          title: "某JS逆向记录",
          img: "https://ytxy-images.oss-cn-shanghai.aliyuncs.com/wallpaper/1671725084009.jpg?x-oss-process=image/resize,l_768/format,webp",
          message: "最近我冤种堂哥给我提了一个需求，要下载他买的付费课程，要过期了。我脑子第一件事就是蹦出来，这不就找m3u8下载嘛，立马动手。但是随之而来第一个问题，那个网站的m3u8播放地址是通过点击播放触发js随机生成的，没法找规律（后面深入观察，其实有规律的）",
          createDate: "2023-01-05",
          views: 999,
          labels: [
            {
              id: "",
              label: "JAVA",
            },
            {
              id: "",
              label: "JS",
            },
            {
              id: "",
              label: "编程",
            }
          ]
        }, {
          id: 0,
          title: "某JS逆向记录",
          img: "https://ytxy-images.oss-cn-shanghai.aliyuncs.com/wallpaper/1671725084009.jpg?x-oss-process=image/resize,l_768/format,webp",
          message: "最近我冤种堂哥给我提了一个需求，要下载他买的付费课程，要过期了。我脑子第一件事就是蹦出来，这不就找m3u8下载嘛，立马动手。但是随之而来第一个问题，那个网站的m3u8播放地址是通过点击播放触发js随机生成的，没法找规律（后面深入观察，其实有规律的）",
          createDate: "2023-01-05",
          views: 999,
          labels: [
            {
              id: "",
              label: "JAVA",
            },
            {
              id: "",
              label: "JS",
            },
            {
              id: "",
              label: "编程",
            }, {
              id: "",
              label: "JAVA",
            },
            {
              id: "",
              label: "JS",
            },
            {
              id: "",
              label: "编程",
            }
          ]
        },
        {
          id: 0,
          title: "某JS逆向记录",
          img: "https://ytxy-images.oss-cn-shanghai.aliyuncs.com/wallpaper/1671725084009.jpg?x-oss-process=image/resize,l_768/format,webp",
          message: "最近我冤种堂哥给我提了一个需求，要下载他买的付费课程，要过期了。我脑子第一件事就是蹦出来，这不就找m3u8下载嘛，立马动手。但是随之而来第一个问题，那个网站的m3u8播放地址是通过点击播放触发js随机生成的，没法找规律（后面深入观察，其实有规律的）",
          createDate: "2023-01-05",
          views: 999,
          labels: [
            {
              id: "",
              label: "JAVA",
            },
            {
              id: "",
              label: "JS",
            },
            {
              id: "",
              label: "编程",
            }
          ]
        },
        {
          id: 0,
          title: "某JS逆向记录",
          img: "https://ytxy-images.oss-cn-shanghai.aliyuncs.com/wallpaper/1671725084009.jpg?x-oss-process=image/resize,l_768/format,webp",
          message: "最近我冤种堂哥给我提了一个需求，要下载他买的付费课程，要过期了。我脑子第一件事就是蹦出来，这不就找m3u8下载嘛，立马动手。但是随之而来第一个问题，那个网站的m3u8播放地址是通过点击播放触发js随机生成的，没法找规律（后面深入观察，其实有规律的）",
          createDate: "2023-01-05",
          views: 999,
          labels: [
            {
              id: "",
              label: "JAVA",
            },
            {
              id: "",
              label: "JS",
            },
            {
              id: "",
              label: "编程",
            }
          ]
        }, {
          id: 0,
          title: "某JS逆向记录",
          img: "https://ytxy-images.oss-cn-shanghai.aliyuncs.com/wallpaper/1671725084009.jpg?x-oss-process=image/resize,l_768/format,webp",
          message: "最近我冤种堂哥给我提了一个需求，要下载他买的付费课程，要过期了。我脑子第一件事就是蹦出来，这不就找m3u8下载嘛，立马动手。但是随之而来第一个问题，那个网站的m3u8播放地址是通过点击播放触发js随机生成的，没法找规律（后面深入观察，其实有规律的）",
          createDate: "2023-01-05",
          views: 999,
          labels: [
            {
              id: "",
              label: "JAVA",
            },
            {
              id: "",
              label: "JS",
            },
            {
              id: "",
              label: "编程",
            }
          ]
        }, {
          id: 0,
          title: "某JS逆向记录",
          img: "https://ytxy-images.oss-cn-shanghai.aliyuncs.com/wallpaper/1671725084009.jpg?x-oss-process=image/resize,l_768/format,webp",
          message: "最近我冤种堂哥给我提了一个需求，要下载他买的付费课程，要过期了。我脑子第一件事就是蹦出来，这不就找m3u8下载嘛，立马动手。但是随之而来第一个问题，那个网站的m3u8播放地址是通过点击播放触发js随机生成的，没法找规律（后面深入观察，其实有规律的）",
          createDate: "2023-01-05",
          views: 999,
          labels: [
            {
              id: "",
              label: "JAVA",
            },
            {
              id: "",
              label: "JS",
            },
            {
              id: "",
              label: "编程",
            }
          ]
        }, {
          id: 0,
          title: "某JS逆向记录",
          img: "https://ytxy-images.oss-cn-shanghai.aliyuncs.com/wallpaper/1671725084009.jpg?x-oss-process=image/resize,l_768/format,webp",
          message: "最近我冤种堂哥给我提了一个需求，要下载他买的付费课程，要过期了。我脑子第一件事就是蹦出来，这不就找m3u8下载嘛，立马动手。但是随之而来第一个问题，那个网站的m3u8播放地址是通过点击播放触发js随机生成的，没法找规律（后面深入观察，其实有规律的）",
          createDate: "2023-01-05",
          views: 999,
          labels: [
            {
              id: "",
              label: "JAVA",
            },
            {
              id: "",
              label: "JS",
            },
            {
              id: "",
              label: "编程",
            }
          ]
        },
      ],
      //每日一言
      poetry: "",
    }
  },
  methods: {
    //跳转详情页
    jumpPage(url: string): void {
      this.$router.push({ path: url })
    },
    //获取每日一言
    getPoetry(): void {
      const xhr = new XMLHttpRequest();
      //https://v1.jinrishici.com/all.json
      //https://saying.api.azwcl.com/saying/get
      //https://v.api.aa1.cn/api/yiyan/index.php
      xhr.open('get', 'https://v.api.aa1.cn/api/yiyan/index.php');
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          let content = xhr.responseText.replace(/<\/?[^>]*>/g, "");//去除标签
          content = content.replace(/[|]*\n/, "");//去除行尾空格
          //let data = JSON.parse(xhr.responseText);

          this.poetry = content;
        }
      };
      xhr.send();
    },
    //滚动至内容
    scrollPage(): void {
      let parent: any = document.querySelector("#app");
      parent.scrollTo({ "behavior": "smooth", "top": parent.clientHeight });
    },
  },
  mounted() {
    let firstBox: any = this.$refs.FirstBox;
    let box: any = document.querySelector("#app");

    //主页背景图滚轮视差
    box.addEventListener("scroll", () => {
      let scrollY = box.scrollTop;
      if (scrollY !== 0) {
        firstBox.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`;
      } else {
        firstBox.style.backgroundPosition = "";
      }
    });

    /* WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        callback: null,
        scrollContainer: box
      }).init(); */
  },
  created() {
    this.getPoetry();
  }
})
</script>
<style scoped lang="scss">
@import "src/assets/css/views/index.scss";
</style>