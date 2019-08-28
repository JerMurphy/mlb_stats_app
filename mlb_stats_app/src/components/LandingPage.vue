<template>
  <div>
    <v-row style="margin-left: 15px">
      <v-col cols="lg-3">
        <h3> Teams</h3>
        <div style="overflow-y: auto; height:600px">
          <TeamCard v-bind:team="team" v-for="team in teams" :key="team.id" class="teamdiv"/>
        </div>
      </v-col>
      <v-col>
        <h3> League Leaders</h3>
        <LeagueLeaders/>
      </v-col>
    </v-row>
      <!-- <mdb-col md="4" v-for="team in teams" v-bind:key="team.id"> -->
        
        <!-- <b-card :img-src=returnImg(team.id) img-top id="teamLogo" class="mb-2" :title=team.name>
            <b-button href="#" variant="primary">View Team Stats</b-button>
        </b-card>   -->

  </div>
</template>

<script>
import axios from 'axios';
import TeamCard from './TeamCard';
import LeagueLeaders from './LeagueLeaders';

export default {
  name: 'HelloWorld',
  components:{
    TeamCard,
    LeagueLeaders
  },
  data() {
    return {
      teams: [],
      types: ['hits','ops', 'homeruns', 'avg']
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
.teamdiv{
  margin-top: 10px;
}


</style>
