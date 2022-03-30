import BaseLayout from '@/layouts/Base.vue'

const MeetRouter = [
  {
    path: "/home",
    name: "Home",
    meta: {
      title: '遇见'
    },
    component: BaseLayout,
    redirect: '/home/index',
    children: [
      {
        path: 'index',
        component: () => import('./Index.vue'),
      }
    ]
  }
]

export default MeetRouter