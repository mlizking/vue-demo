import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import upload from '@/components/upload'
import story from '@/components/story'

Vue.use(Router)

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
    }
  ]
})

// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// const routerOptions = [
//   {
//     path: '/upload',
//     component: 'upload'
//   }
// ]

// const routes = routerOptions.map(route => {
//   return {
//     path: route.path,
//     component: () => import (`@/components/${route.component}.vue`)
//   }
// })

// export default new Router({
//   mode: 'history',
//   routes
// })
