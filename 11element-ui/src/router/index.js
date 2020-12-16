import Vue from 'vue'
import VueRouter from 'vue-router'

import buttonTest from '../components/ButtonTest'
import linkTest from '../components/LinkTest'
import layout from '../components/Layout'
import container from '../components/Container'
import containerIns from '../components/ContainerIns'
// import pagination from "element-ui/packages/pagination/src/pagination";

const form1 = ()=>import('../components/Form1')
const form2 = ()=>import('../components/Form2')
const form3 = ()=>import('../components/Form3')

const selectOption =()=>import('../components/SelectOption')
const switchSlide =()=>import('../components/SwitchSlide')

const date1 =()=>import('../components/Date1')
const date2 =()=>import('../components/Date2')

const transfer =()=>import('../components/Transfer')
const formExample =()=>import('../components/FormExample')
const formExample2 =()=>import('../components/FormExample2')

const table =()=>import('../components/Data/Table')
const table2 =()=>import('../components/Data/Table2')
const table3 =()=>import('../components/Data/Table3')
const table4 =()=>import('../components/Data/Table4')
const table5 =()=>import('../components/Data/Table5')
const table6 =()=>import('../components/Data/Table6')

const treeControl =()=>import('../components/Data/TreeControl')
const paginations =()=>import('../components/Data/PageDvide')

const messages =()=>import('../components/notice/Messages')
const messageBox =()=>import('../components/notice/MessageBox')
const notification =()=>import('../components/notice/Notification')

const nav1 =()=>import('../components/navigation/Navmenu1')

const navchild =()=>import('../components/navigation/JieMian')
const navchild2 =()=>import('../components/navigation/Message')
const nav2 =()=>import('../components/navigation/Navmenu2')
const nav2Stu1 =()=>import('../components/navigation/Stu1')
const tabs =()=>import('../components/navigation/Tabs')

const kindsOfFrame =()=>import('../components/others/KindsOfFrame')
const dialog =()=>import('../components/others/Dialog')
const tooltip =()=>import('../components/others/Tooltip')
const popover =()=>import('../components/others/Popover')
const popconfirm =()=>import('../components/others/Popconfirm')

const card =()=>import('../components/others/Card')
const swiper1 =()=>import('../components/others/Swiper1')
const swiper2 =()=>import('../components/others/Swiper2')




Vue.use(VueRouter)

const routes = [
  {
    path:'/buttonTest',
    name:'button',
    component:buttonTest
  },
  {
    path:'/linkTest',
    name:'linkTests',
    component:linkTest
  },
  {
    path:'/container',
    name:'container',
    component:container
  },
  {
    path:'/layout',
    name:'layout',
    component:layout
  },
  {
    path:'/containerIns',
    name:'containerIns',
    component:containerIns
  },
  {
    path:'/form1',
    name:'form1',
    component:form1
  },
  {
    path:'/form2',
    name:'form2',
    component:form2
  },
  {
    path:'/form3',
    name:'form3',
    component:form3
  },
  {
    path:'/selectOption',
    name:'selectOption',
    component:selectOption
  },
  {
    path:'/switchSlide',
    name:'switchSlide',
    component:switchSlide
  },
  {
    path:'/date1',
    name:'date1',
    component:date1
  },
  {
    path:'/date2',
    name:'date2',
    component:date2
  },
  {
    path:'/transfer',
    name:'transfer',
    component:transfer
  },
  {
    path:'/formExample',
    name:'formExample',
    component:formExample
  },
  {
    path:'/formExample2',
    name:'formExample2',
    component:formExample2
  },
  //table
  {
    path:'/table',
    name:'table',
    component:table,

    children:[
      {
       path:'table2',
        name:'table2',
       component:table2
      },
      {
        path:'table3',
        name:'table3',
        component:table3
      },
      { path:'table4',
        name:'table4',
        component:table4
      },
      { path:'table5',
        name:'table5',
        component:table5
      },
      { path:'table6',
        name:'table6',
        component:table6
      }

    ]
  },

  { path:'/page',
    name:'page',
    component:paginations
  },

  { path:'/tree',
    name:'tree',
    component:treeControl
  },

  { path:'/messages',
    name:'messages',
    component:messages
  },
  { path:'/messageBox',
    name:'messageBox',
    component:messageBox
  },
  { path:'/notification',
    name:'notification',
    component:notification
  }
  ,
  { path:'/nav1',
    name:'nav1',
    component:nav1,
    children:[
      {
        path:"1",
        name1:"1",
        component:navchild
      },
      {
        path:"message",
        name1:"message",
        component:navchild2
      }
    ]

  },
  { path:'/nav2',
    name:'nav2',
    component:nav2,
    children:[
      {
        path:'stu1/:id',
        name:'stu1',
        component:nav2Stu1
      }
    ]
  },

  { path:'/tabs',
    name:'tabs',
    component:tabs
  },
  { path:'/card',
    name:'card',
    component:card
  },
  { path:'/swiper1',
    name:'swiper1',
    component:swiper1
  },
  { path:'/swiper2',
    name:'swiper2',
    component:swiper2
  },
  {
    path:'/notification',
    name:'notification',
    component:notification
  },
  { path:'/kindsOfFrame',
    name:'kindsOfFrame',
    component:kindsOfFrame,
    children:[
      {
        path:'dialog',
        name:'dialog',
        component:dialog
      },
      {
        path:'tooltip',
        name:'tooltip',
        component:tooltip
      },
      {
        path:'popconfirm',
        name:'popconfirm',
        component:popconfirm
      },
      {
        path:'popover',
        name:'popover',
        component:popover
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
