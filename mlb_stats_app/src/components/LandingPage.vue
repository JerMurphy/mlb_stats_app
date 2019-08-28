<template>
  <div>
    <v-row style="margin-left: 15px">
      <v-col cols="lg-3">
        <h3> Teams</h3>
        <div style="overflow-y: auto; height:85vh">
          <TeamCard v-bind:team="team" v-for="team in teams" :key="team.id" class="teamdiv"/>
        </div>
      </v-col>
      <v-col>
        <div style=" margin-right: 20px;">
        <h3> Standings</h3>
        <p style="font-size: 12px;">as of: 2019-08-28</p>
        <Standings/>
        </div>
        <div style="margin-top:15px; margin-right: 20px;">
        <h3> League Leaders</h3>
        <p style="font-size: 12px;">as of: 2019-08-28</p>
        <LeagueLeaders v-bind:teams="teams"/>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';
import TeamCard from './TeamCard';
import LeagueLeaders from './LeagueLeaders';
import Standings from './Standings';

export default {
  name: 'HelloWorld',
  components:{
    TeamCard,
    LeagueLeaders,
    Standings
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
