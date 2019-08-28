<template>
  <v-app>
    <v-card color="grey lighten-4" flat tile>
        <v-toolbar dense :color="colors[tid].color">
        <v-btn v-on:click="navigate()">
            Teams Stats
        </v-btn>
        <div :style="colors[tid].text">{{player.fullName}}</div>
        <div class="flex-grow-1" ></div>
        </v-toolbar>
    </v-card>
   <PlayerProfile v-bind:id="pid" v-bind:player="player" v-if="player"/>
   <v-tabs fixed-tabs >
            <v-tab ripple v-for="type in player.stats" v-bind:key="type.group.displayName">
                 <v-icon>{{type.group.displayName.toUpperCase()}}</v-icon>
            </v-tab>
            <v-tab-item v-for="type in player.stats" v-bind:key="type.group.displayName" style="height:45vh;">
                <div v-if="type.group.displayName == 'hitting'" >
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
import colours from '../assets/colours';
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
    this.pid = this.$route.params.pid
    this.tid = this.$route.params.tid
    this.colors = colours;
    axios.get('https://statsapi.mlb.com/api/v1/people/'+ this.$route.params.pid+'?hydrate=stats(group=[pitching,hitting,fielding],type=[yearByYear])')
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
