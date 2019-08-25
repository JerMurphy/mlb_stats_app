<template>
  <v-app>
    <v-card
    color="grey lighten-4"
    flat
    height=""
    tile
  >
    <v-toolbar dense>
      <v-btn v-on:click="navigate()">
        Team Stats
      </v-btn>
      <div class="flex-grow-1">
        <v-toolbar-title class="title">{{player.fullName}}</v-toolbar-title>
      </div>
    </v-toolbar>
  </v-card>
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
                    <FieldingStats v-bind:stats="type.splits"/>
                </div>
                <div v-if="type.group.displayName == 'pitching'">
                    <PitchingStats v-bind:stats="type.splits"/>
                </div>
                
            </v-tab-item>
        </v-tabs>
  </v-app>
</template>

<script>
import PlayerProfile from '../components/PlayerProfile';
import HittingStats from '../components/HittingStats';
import FieldingStats from '../components/FieldingStats';
import PitchingStats from '../components/PitchingStats';

import axios from 'axios';

export default {
  name: 'Player',
  components: {
      PlayerProfile,
      HittingStats,
      FieldingStats,
      PitchingStats
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
  },
  methods: {
    navigate(){
        this.$router.go(-1)
    }
  }
};
</script>
<style >
  .title{
    margin-left: 10px;
  }
</style>
