<template>
  <div class="blog-card">
    <div class="blog-card-box">
      <div class="img-box">
        <img :src="cardData.img" draggable="false" alt="" />
        <div>
          <p>{{ cardData.message }}</p>
        </div>
      </div>
      <div class="title-box">
        <span @click="jumpPage('detail')" class="title">{{ cardData.title }}</span>
        <div class="date-views-box">
          <span class="date ycyui icon-history">{{ cardData.createDate }}</span>
          <span class="views ycyui icon-visible">{{ cardData.views }}</span>
        </div>
        <div class="labels">
          <template v-for="(item2, index) in cardData.labels">
            <span v-if="index <= 10">{{ item2.label }}</span>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "blog-card",
  props: {
    data: {},
  },
  data() {
    return {
      cardData: {}
    }
  },
  methods: {
    jumpPage(to) {
      this.$emit("jump-url", to);
    }
  },
  created() {
    if (this.data != null) {
      this.cardData = this.data;
    }
  }
}

</script>

<style scoped lang="scss">
.blog-card {
  margin: 20px 0;

  @media screen and (min-width: 900px) {
    .blog-card-box {
      display: flex;
      width: 100%;
      flex-direction: column;
      border-radius: $--border-radius-mini;
      box-shadow: $--box-shadow-5;
      transition: .3s;

      &:hover {
        transform: translateY(-2%);
        box-shadow: $--box-shadow-1;
      }

      .img-box {
        width: 100%;
        height: 200px;
        position: relative;
        overflow: hidden;

        &:hover {
          &>div {
            background-color: rgba(0, 0, 0, .1);
            backdrop-filter: blur(5px);
            transform: translateY(0);
            opacity: 1;
          }
        }

        img,
        div {
          border-radius: $--border-radius-mini $--border-radius-mini 0 0;
          position: absolute;
          transition: .3s;
          user-select: none;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        div {
          width: calc(100% - 80px);
          height: calc(100% - 80px);
          padding: 40px;
          z-index: $--z-index-1;
          transform: translateY(100%);
          opacity: 0;

          p {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 6;
            overflow: hidden;
            margin: 0;
            font-size: $--font-size-mini;
            color: $--color-primary-light-9;
            line-height: $--font-size-large;
          }
        }
      }

      .title-box {
        background-color: white;
        padding: 10px 0;
        width: 100%;
        color: $--color-primary-dark-7;
        border-radius: 0 0 $--border-radius-mini $--border-radius-mini;

        span::selection {
          background-color: rgba(0, 0, 0, .1);
        }

        .title {
          cursor: pointer;
          font-size: $--font-size-base;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          width: calc(100% - 80px);
          margin: 0 auto 10px auto;
          font-weight: bold;
          font-family: 幼圆;
        }

        .date {
          font-size: $--font-size-small;
          width: calc(60% - 40px);
          margin-left: 40px;
          display: inline-block;
          text-align: left;
        }

        .views {
          font-size: $--font-size-small;
          width: calc(40% - 40px);
          margin-right: 40px;
          display: inline-block;
          text-align: right;
        }

        .labels {
          padding: 0 40px;
          user-select: none;
          height: 40px;
          line-height: 40px;
          overflow: hidden;

          span {
            background-image: linear-gradient(to right, $--color-primary-dark-3 10%, $--color-secondary-dark-3 90%);
            font-size: $--font-size-mini;
            color: $--color-primary-light-9;
            padding: 5px 10px;
            border-radius: $--border-radius-mini;
            margin-right: 10px;
            cursor: pointer;
          }
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    .blog-card-box {
      width: 100%;
      display: flex;
      flex-direction: row;
      border-radius: $--border-radius-mini;
      box-shadow: $--box-shadow-5;
      transition: .3s;

      &:hover {
        transform: translateY(-2%);
        box-shadow: $--box-shadow-1;

        &>.img-box {

          &>div {
            background-color: rgba(0, 0, 0, .1);
            backdrop-filter: blur(5px);
            transform: translateX(0);
            opacity: 1;
          }
        }
      }

      .img-box {
        width: 35%;
        height: auto;
        position: relative;

        img,
        div {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: $--border-radius-mini 0 0 $--border-radius-mini;
          object-fit: cover;
          user-select: none;
        }

        div {
          width: calc(100% - 80px);
          height: calc(100% - 80px);
          padding: 40px;
          z-index: $--z-index-1;
          transform: translateX(100%);
          opacity: 0;
          transition: .3s;

          p {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
            overflow: hidden;
            margin: 0;
            font-size: $--font-size-mini;
            color: $--color-primary-light-9;
            line-height: $--font-size-large;
          }
        }
      }

      .title-box {
        width: 65%;
        background-color: white;
        border-radius: 0 $--border-radius-mini $--border-radius-mini 0;

        span::selection {
          background-color: rgba(0, 0, 0, .1);
        }

        .title {
          cursor: pointer;
          font-size: $--font-size-base;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
          overflow: hidden;
          width: calc(100% - 10vw);
          margin: 5vw;
          font-weight: bold;
          font-family: 幼圆;
        }

        .date-views-box {
          width: 100%;
          height: 20px;
          position: relative;
          font-size: $--font-size-small;

          .date {
            position: absolute;
            left: 5vw;
            top: 0;
            width: calc(60% - 5vw);
            display: inline-block;
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap
          }

          .views {
            position: absolute;
            right: 5vw;
            top: 0;
            width: calc(40% - 5vw);
            display: inline-block;
            text-align: right;
          }
        }


        .labels {
          border-top: $--color-primary-light-9 solid 1px;
          margin: 10px 0;
          padding: 0 5vw;
          height: 40px;
          line-height: 40px;
          overflow: hidden;

          span {
            background-image: linear-gradient(to right, $--color-primary-dark-3 10%, $--color-secondary-dark-3 90%);
            font-size: $--font-size-mini;
            color: $--color-primary-light-9;
            padding: 5px 10px;
            border-radius: $--border-radius-mini;
            margin-right: 10px;
            cursor: pointer;
          }
        }
      }
    }
  }

  @media screen and (max-width: 750px) and (min-width: 500px) {
    .blog-card-box {
      .img-box {
        div {
          p {
            -webkit-line-clamp: 4;
          }
        }
      }
    }
  }

  @media screen and (max-width: 500px) and (min-width: 400px) {
    .blog-card-box {
      .img-box {
        div {
          p {
            -webkit-line-clamp: 3;
          }
        }
      }
    }
  }

  @media screen and (max-width: 400px) {
    .blog-card-box {
      .img-box {
        div {
          display: none;
        }
      }
    }
  }
}
</style>