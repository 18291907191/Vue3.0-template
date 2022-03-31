import MeetRouter from '@/views/Meet/router'
import InfoRouter from '@/views/Info/router'
import NotFind from '@/views/404.vue'
import LoginRouter from '@/views/Login/router'

export const constantRoutes = [
  {
    path: '/404',
    name: '404',
    component: NotFind
  },
  // {
  //   path: '',
  //   redirect: '/login'
  // },
  {
    path: '',
    name: 'app',
    redirect: '/home'
  },
  ...LoginRouter,
  ...MeetRouter,
  ...InfoRouter,
  {
    path: '/:pathMatch(.*)*/',
    component: NotFind
  }
]

export const asyncRoutes = []