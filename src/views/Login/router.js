
const LoginRouter = [
  {
    path: "/login",
    name: "Login",
    meta: {
      title: '登录'
    },
    component: () => import('./Index.vue'),
  },
  {
    // 注册，找回密码路由配置
  }
]

export default LoginRouter
