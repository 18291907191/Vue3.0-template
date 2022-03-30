import BaseLayout from '@/layouts/Base.vue'

const InfoRouter = [
  {
    path: "/info",
    name: "Info",
    meta: {
      title: '讯息'
    },
    component: BaseLayout,
    redirect: '/info/index',
    children: [
      {
        path: 'index',
        component: () => import('./Index.vue'),
      }
    ]
  }
]

export default InfoRouter