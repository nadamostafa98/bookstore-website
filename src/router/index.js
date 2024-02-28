//import necessary methods from vue-router

import { createRouter, createWebHistory } from 'vue-router'

/* Create a new router with an array of all the possible paths that will be used throughout the project */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  //array of all routes, each has a name to be easily identified in the code, a path and the component vue that id redirects to 
  
  routes: [ 
    {
      path: '/',
      name: 'HomePage',
      component: () => import('../views/HomePage.vue'),
      props:true
    },
    {
      path: '/:genrename',
      name: 'GenrePage',
      component: () => import('../views/Genres.vue'),
      props:true
    },
    {
      path: '/cart',
      name: 'MyCart',
      component: () => import('../views/MyCart.vue'),
      props:true
    },
    {
      path: '/:bookname',
      name: 'Book',
      component:() => import('../views/Book.vue')
    },
    {
      path: '/search',
      name: 'SearchResult',
      component:() => import('../views/Search.vue')
    },
    {
      path: '/:authorname',
      name: 'Author',
      component:() => import('../views/Author.vue')
    }
  ]
})

export default router
