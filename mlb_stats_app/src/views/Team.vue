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
        Teams
      </v-btn>
      <div class="flex-grow-1">
          TEAM NAME GOES HERE
      </div>
       <v-toolbar-items>
        <!-- <v-select items=[] label="Teams" solo ></v-select> -->
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
    <TeamStat v-if="roster[0]" v-bind:id="id" v-bind:roster="roster"/>
    <FullRoster v-if="roster[0]" v-bind:id="id" v-bind:roster="roster"/>
    <div v-if="!roster[0]">
      <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
    </div>
  </v-app>
</template>

<script>
import axios from 'axios'
import LandingPage from '../components/LandingPage';
import Header from '../components/Header';
import TeamStat from '../components/TeamStat';
import FullRoster from '../components/FullRoster';

export default {
  name: 'Team',
  components: {
    TeamStat,
    FullRoster
  },
  data: () => ({
    imgsrc: String,
    id: String,
    roster: []
    //
  }),
  created(){
    this.id = this.$route.params.id
    this.imgsrc = "https://www.mlbstatic.com/team-logos/"+this.$route.params.id+".svg";
    axios.get('https://statsapi.mlb.com/api/v1/teams/'+ this.id +'/roster/Active?hydrate=person(stats(type=season))')
    .then(res => this.roster = res.data.roster)
    .catch(err=> alert(err));
  },
  methods:{
    navigate(){
        this.$router.go(-1)
    }
  }
};
</script>
<style >
  

</style>
