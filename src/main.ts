import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/router/router";
import "@/http/interceptors";

import "@/assets/fonts/iconfont.css";

import "animate.css";
import "animate.css/animate.compat.css";

const app = createApp(App);

// 屏蔽错误信息
//app.config.errorHandler = () => null;
// 屏蔽警告信息
app.config.warnHandler = () => null;

app.use(store);
app.use(router);
app.mount("#app");
