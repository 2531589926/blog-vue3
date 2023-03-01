<template>
  <div>
    <div ref="myNav" class="myNav">
      <div class="container">
        <div class="min-inline">
          <i class="ycyui icon-menu" />
        </div>
        <div @click="jumpPage('/')" class="logo">博客</div>
        <div class="inline">
          <template :key="index" v-for="(item, index) in options">
            <a :class="item.icon1"><span>{{ item.label }}</span></a>
          </template>
        </div>
        <i @click="openSearch" class="search ycyui icon-search" />
        <div class="search-box">
          <input />
          <i @click="search" class="ycyui icon-search" />
          <i @click="openSearch" class="ycyui icon-close" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myNav',
  data() {
    return {
      //菜单栏
      options: [
        {
          label: '首页',
          icon1: "ycyui icon-home2-fill",
        },
        {
          label: '标签',
          icon1: "ycyui icon-tags-fill",
        },
        {
          label: '关于',
          icon1: "ycyui icon-about",
        },
        {
          label: '留言区',
          icon1: "ycyui icon-message2_fill",
        },
        {
          label: '友链',
          icon1: "ycyui icon-link",
        },
        {
          label: '碎语',
          icon1: "ycyui icon-message_fill",
        }
      ],
      //搜索框显示
      searchShow: false,
      //搜索内容
      searchText: "",
      //上次滚动距离
      initTop: 0,
    }
  },
  methods: {
    //点击搜索按钮
    openSearch() {
      let parent = this.$refs.myNav;
      let searchBtn = parent.querySelector(".search");
      let searchBox = parent.querySelector(".search-box");
      let inlineBox = parent.querySelector(".inline");
      let titleBox = parent.querySelector(".logo");

      let parentWidth = parent.clientWidth;
      if (this.searchShow) {
        searchBtn.style.transform = "translateY(0)";
        searchBox.style.transform = "translateY(-100%)";
        inlineBox.style.transform = "translateY(0)";
        titleBox.style.transform = "translateY(0)";

      } else {
        searchBtn.style.transform = "translateY(100%)";
        searchBox.style.transform = "translateY(0)";
        inlineBox.style.transform = "translateY(100%)";

        if (parentWidth < 720) {
          titleBox.style.transform = "translateY(150%)";
        }
      }

      this.searchShow = !this.searchShow;
    },
    //搜索
    search() {

    },
    //跳转页面
    jumpPage(to) {
      this.$router.push(to).catch(err => { });
    }
  },
  mounted() {
    let parent = document.querySelector("#app");
    let navBox = this.$refs.myNav;
    parent.addEventListener("scroll", () => {
      let scrollY = parent.scrollTop;
      //向上滚动展开导航栏，向下收起
      if (scrollY >= this.initTop && this.initTop > 0) {
        navBox.style.transform = "translateY(-100%)";
      } else {
        navBox.style.transform = "translateY(0)";
      }
      this.initTop = scrollY;

      //回到顶部背景设置透明
      if (scrollY !== 0) {
        navBox.style.backgroundColor = "rgba(0,0,0,.3)";
        navBox.style.backdropFilter = "blur(10px)";
      } else {
        navBox.style.backgroundColor = "";
        navBox.style.backdropFilter = "";
      }
    })
  }
}
</script>

<style scoped lang="scss">
.myNav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  color: rgba(255, 255, 255, .7);
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  z-index: $--z-index-8;
  transition: .15s;

  .container {
    flex-grow: 1;
    max-width: 1150px;
    display: flex;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 720px) {
      .inline {
        display: none;
      }

      .min-inline {
        margin: 20px;
        cursor: pointer;

        i {
          font-size: 20px;
        }
      }

      .logo {
        flex-grow: 1;
        font-size: 30px;
        margin: 20px;
        cursor: pointer;
        text-align: center;
        transition: .15s;
      }
    }

    @media screen and (min-width: 720px) {
      .min-inline {
        display: none;
      }

      .logo {
        font-size: 30px;
        margin: 20px;
        cursor: pointer;
        transition: .15s;
      }

      .inline {
        flex-grow: 1;
        text-align: right;
        transition: .15s;

        a {
          display: inline-block;
          padding: 20px;
          cursor: pointer;
          transition: .15s;
          font-size: 14px;

          &:hover {
            background-color: rgba(255, 255, 255, .05);
            color: white;
          }

          span {
            margin-left: 5px;
          }
        }
      }
    }

    .search {
      display: inline-block;
      width: 20px;
      height: 20px;
      font-size: 20px;
      padding: 20px;
      line-height: initial;
      cursor: pointer;
      transition: .15s;

      &:hover {
        color: white;
      }
    }

    .search-box {
      position: absolute;
      display: inline-block;
      right: 0;
      top: 0;
      bottom: 0;
      padding-right: 20px;
      line-height: 70px;
      color: rgba(255, 255, 255, .7);
      transform: translateY(-100%);
      transition: .15s;

      input {
        min-width: 150px;
        height: 20px;
        background-color: transparent;
        border: none;
        border-bottom: rgba(255, 255, 255, .7) solid 1px;
        outline: none;
        color: rgba(255, 255, 255, .7);
        padding-right: 40px;

        &:hover,
        &:focus {
          color: white;
          border-bottom: white solid 1px;
        }
      }

      .icon-search {
        font-size: 20px;
        margin-left: -20px;
        cursor: pointer;

        &:hover {
          color: white;
        }
      }

      .icon-close {
        font-size: 20px;
        margin-left: 10px;
        cursor: pointer;

        &:hover {
          color: white;
        }
      }
    }
  }
}
</style>
