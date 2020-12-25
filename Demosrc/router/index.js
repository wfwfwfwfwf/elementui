import Vue from 'vue'
import VueRouter from 'vue-router'

const layout =()=>import('../components/Layout')
const main =()=>import('../components/Main')

const pageOne =()=>import('../views/Page1')
const pageTwo =()=>import('../views/Page2')
const pageThree =()=>import('../views/Page3')
const pageFour =()=>import('../views/Page4')
const pageFive =()=>import('../views/Page5')




Vue.use(VueRouter)

const routes = [

/*  {
    path: '/',
    name: '导航1',
    component: layout,
    redirect:'/pageone',
    children:[
      {
        path: '/pageone',
        name: '页面1',
        component: pageOne
      },
      {
        path: '/pagetwo',
        name: '页面2',
        component: pageTwo
      }
    ]
  },

  {
    path: '/navigation2',
    name: '导航2',
    component: layout,
    children:[
      {
        path: '/pagethree',
        name: '页面3',
        component: pageThree
      },
      {
        path: '/pagefour',
        name: '页面4',
        component: pageFour
      }
    ]
  },
  {
    path: '/profile',
    name: '主页',
    component: pageFive
  }*/
  {
    path:"",
    redirect:'/nav1'
  },
  {
    path: '/nav1',
    name: '导航1',
    component: main,
    // redirect:'/pageone',
    children:[
      {
        path:'',
        redirect:"pageone"
      },

      {
        path: 'pageone',
        name: '页面1',
        component: pageOne
      },
      {
        path: 'pagetwo',
        name: '页面2',
        component: pageTwo
      }
    ]
  },

  {
    path: '/nav2',
    name: '导航2',
    component: main,
    redirect:'/nav2/pagethree',
    children:[
      {
        path: 'pagethree',
        name: '页面3',
        component: pageThree
      },
      {
        path: 'pagefour',
        name: '页面4',
        component: pageFour
      }
    ]
  },
  {
    path: '/nav3',
    name: '导航三',
    component: main,
    // redirect:'/nav3/profile',
    children:[
      {
        path:'profile',
        name:'主页',
        component:pageFive
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'  // 路由模式
  // base: process.env.BASE_URL,

})

export default router
