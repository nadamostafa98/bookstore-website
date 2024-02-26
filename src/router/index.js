import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomePage.vue'),
      props:true
    },
    {
      path: '/:genrename',
      name: 'GenrePage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Genres.vue'),
      props:true
    },
    {
      path: '/cart',
      name: 'MyCart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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
    },
    {
      path: '/orderplaced',
      name: 'Done',
      component:() => import('../views/OrderPlaced.vue')
    }
  ]
})

export default router
