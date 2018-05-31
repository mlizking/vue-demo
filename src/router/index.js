import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import upload from '@/components/upload'
import story from '@/components/story'
import signup from '@/components/signup'
import login from '@/components/login'

Vue.use(Router)


// const routerOptions = [
//   {
//     path: '/signup',
//     component: 'SignUp'
//   }
// ]

// const routes = routerOptions.map(route => {
//   return {
//     path: route.path,
//     component: () => import (`@/components/${route.component}.vue`)
//   }
// })


export default new Router({

  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
    ,
    {
      path: '/upload',
      name: 'upload',
      component: upload
    },
    {
      path: '/story',
      name: 'story',
      component: story
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
