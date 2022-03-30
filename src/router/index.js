import router from "./router";

router.beforeEach((to, from, next) => {
  debugger
  document.title = to.meta && to.meta.title
  if(to.path === '/login') {
    if(localStorage.getItem('userInfo')) {
      next({ path: '/home' })
    } else {
      next()
    }
  } else {
    if(localStorage.getItem('userInfo')) {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})

router.afterEach(() => {

})

export default router