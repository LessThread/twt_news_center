import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    name:"userContent",
    //path:"/",
    component:()=>import('../views/userContent.vue'),
    meta: {
      index: 0,
    },
    children:[
      {
        name:"RecentNews",
        path:"/RecentNews",
        component:()=>import('../views/userContent/RecentNews.vue'),
        meta: {
          index: 1,
        },
      },
      {
        name:"ArticleDisplay",
        path:"/ArticleDisplay",
        component:()=>import("../views/userContent/ArticleDisplay.vue"),
        meta: {
          index: 2,
        },
      },
      {
        name:"SearchResult",
        path:"/SearchResult",
        component:()=>import('../views/userContent/SearchResult.vue'),
        meta: {
          index: 3,
        },
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
