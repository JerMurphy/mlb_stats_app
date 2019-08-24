<template>
  <v-app>
   <PlayerProfile v-bind:id="id" v-bind:player="player" v-if="player"/>
  </v-app>
</template>

<script>
import PlayerProfile from '../components/PlayerProfile';

import axios from 'axios';

export default {
  name: 'Player',
  components: {
      PlayerProfile
  },
  data: () => ({
    id: String,
    player: Object
    
    //
  }),
  created(){
    this.id = this.$route.params.id
    axios.get('https://statsapi.mlb.com/api/v1/people/'+ this.$route.params.id+'?hydrate=stats(group=[hitting,fielding],type=[yearByYear])')
    .then(res => this.player = res.data.people[0])
    .catch(err => alert(err));
  }
};
</script>
<style >
  
</style>
