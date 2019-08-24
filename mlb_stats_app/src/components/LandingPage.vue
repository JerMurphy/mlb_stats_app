<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>
      Please choose a team below to get started!
    </p>
  <v-container class="grey lighten-5">
    <v-row justify="space-around">
      <v-col v-for="team in teams" :key="team.id" cols="lg">
        <TeamCard v-bind:team="team"/>
      </v-col>
    </v-row>
  </v-container>
      <!-- <mdb-col md="4" v-for="team in teams" v-bind:key="team.id"> -->
        
        <!-- <b-card :img-src=returnImg(team.id) img-top id="teamLogo" class="mb-2" :title=team.name>
            <b-button href="#" variant="primary">View Team Stats</b-button>
        </b-card>   -->

  </div>
</template>

<script>
import axios from 'axios';
import TeamCard from './TeamCard';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    TeamCard
  },
  data() {
    return {
      teams: []
    }
  },
  methods:{
    returnImg(id){
      return "https://www.mlbstatic.com/team-logos/"+id+".svg";
    }
  },
  created(){
    //var tempThis = this;
    axios.get('https://statsapi.mlb.com/api/v1/teams?sportId=1')
    .then(res => this.teams = res.data.teams)
    .catch(err => alert(err));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#teamLogo {
    height:10%;
    width:10%;
    background-color: grey;
    border: 1px solid black;
}


</style>
