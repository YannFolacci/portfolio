const c1 = () => import(/* webpackChunkName: "page--src--templates--project-vue" */ "/mnt/d/Yann/Documents/projet/portfolio-summer2021/portfolio2021/frontend/src/templates/Project.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/mnt/d/Yann/Documents/projet/portfolio-summer2021/portfolio2021/frontend/src/pages/About.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/mnt/d/Yann/Documents/projet/portfolio-summer2021/portfolio2021/frontend/node_modules/gridsome/app/pages/404.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/mnt/d/Yann/Documents/projet/portfolio-summer2021/portfolio2021/frontend/src/pages/Index.vue")

export default [
  {
    path: "/project/noise-playground/",
    component: c1
  },
  {
    path: "/project/connected-lines/",
    component: c1
  },
  {
    path: "/about/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
