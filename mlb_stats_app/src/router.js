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
      path: '/team/:tid',
      name: 'about',
      component: Team
    },
    {
      path: '/team/:tid/player/:pid',
      name: 'player',
      component: Player
    }
  ]
})
