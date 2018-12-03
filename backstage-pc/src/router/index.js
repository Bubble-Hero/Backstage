import Vue from 'vue'
import Router from 'vue-router'
import index from "@/pages/index"
import form from "@/pages/form"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/form',
      component: form
    }
  ]

})
