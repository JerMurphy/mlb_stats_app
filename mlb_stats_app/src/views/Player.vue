<template>
  <v-app>
   <PlayerProfile v-bind:id="id" v-bind:player="player" v-if="player"/>
   <v-tabs fixed-tabs>
            <v-tab ripple v-for="type in player.stats" v-bind:key="type.group.displayName">
                 <v-icon>{{type.group.displayName.toUpperCase()}}</v-icon>
            </v-tab>
            <v-tab-item v-for="type in player.stats" v-bind:key="type.group.displayName">
                <div v-if="type.group.displayName == 'hitting'">
                    <HittingStats v-bind:stats="type.splits"/>
                </div>
                <div v-if="type.group.displayName == 'fielding'">
                    <FieldingStats/>
                </div>
                <div v-if="type.group.displayName == 'pitching'">
                    <PitchingStats/>
                </div>
                
            </v-tab-item>
        </v-tabs>
  </v-app>
</template>

<script>
import PlayerProfile from '../components/PlayerProfile';
import HittingStats from '../components/HittingStats';

import axios from 'axios';

export default {
  name: 'Player',
  components: {
      PlayerProfile,
      HittingStats
  },
  data: () => ({
    id: String,
    player: Object
    
    //
  }),
  created(){
    this.id = this.$route.params.id
    axios.get('https://statsapi.mlb.com/api/v1/people/'+ this.$route.params.id+'?hydrate=stats(group=[pitching,hitting,fielding],type=[yearByYear])')
    .then(res => this.player = res.data.people[0])
    .catch(err => alert(err));
  }
};
</script>
<style >
  
</style>
