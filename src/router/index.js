import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    name:"userContent",
    //path:"/",
    component:()=>import('../views/userContent.vue'),
    children:[
      {
        name:"RecentNews",
        path:"/RecentNews",
        component:()=>import('../views/userContent/RecentNews.vue')
      },
      {
        name:"ArticleDisplay",
        path:"/ArticleDisplay",
        component:()=>import("../views/userContent/ArticleDisplay.vue")
      },
      {
        name:"SearchResult",
        path:"/SearchResult",
        component:()=>import('../views/userContent/SearchResult.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
