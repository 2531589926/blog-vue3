<template>
  <my-nav></my-nav>
  <router-view v-slot="{ Component }">
    <transition enter-active-class="animate__animated animate__fadeIn">
      <component :is="Component" />
    </transition>
  </router-view>
  <my-backdrop></my-backdrop>
  <n-back-top :right="50" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MyNav from "@/components/nav.vue";
import MyBackdrop from "@/components/backdrop.vue";

export default defineComponent({
  name: "app",
  components: {
    MyNav,
    MyBackdrop
  }
})
</script>

<style lang="scss">
body {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;

  @media screen and (min-width: 720px) {
    @include scrollbar();
  }

  @media screen and (max-width: 720px) {
    @include scrollbar(0, 0);
  }
}
</style>
