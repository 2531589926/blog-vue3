import router from "../router";
//路由前置守卫
router.beforeEach((to, from, next) => {
  // 如果未匹配到路由
  if (to.matched.length === 0) {
    from.name ? next({ name: from.name }) : next("/");
  } else {
    next();
  }
});
//路由后置守卫，可以在确定导航到目标页面时再更改title
router.afterEach((to, from) => {
  //等待路由切换动画时间
  setTimeout(function () {
    let app: any = document.querySelector("#app");
    app.scrollTop = 0;
  }, 50);
});
