import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Team from './views/Team.vue'
import Player from './views/Player.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/team/:id',
      name: 'about',
      component: Team
    },
    {
      path: '/player/:id',
      name: 'player',
      component: Player
    }
  ]
})
