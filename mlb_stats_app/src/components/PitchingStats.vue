<template>
<div>
    <v-simple-table class="pitcherTable" height="300px" fixedHeader>
        <thead>
        <tr>
            <th class="text-center">Year</th>
            <th class="text-center">Team</th>
            <th class="text-center">Games Played</th>
            <th class="text-center"> Starts</th>
            <th class="text-center">Wins:Losses</th>
            <th class="text-center">Win Percentage</th>
            <th class="text-center">ERA</th>
            <th class="text-center">WHIP</th>
            <th class="text-center">Strikeouts</th>
            <th class="text-center">Walks</th>
            <th class="text-center">Strike Percentage</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="year in stats" :key="year.season" v-if="year.team"> 
            <td class="text-center">{{year.season}}</td>
            <td class="text-center">{{year.team.name}}</td>
            <td class="text-center">{{year.stat.gamesPlayed}}</td>
            <td class="text-center">{{year.stat.gamesStarted}}</td>
            <td class="text-center">{{year.stat.wins}}:{{year.stat.losses}} </td>
            <td class="text-center">{{year.stat.winPercentage}}</td>
            <td class="text-center">{{year.stat.era}}</td>
            <td class="text-center">{{year.stat.whip}}</td>
            <td class="text-center">{{year.stat.strikeOuts}}</td>
            <td class="text-center">{{year.stat.baseOnBalls}}</td>
            <td class="text-center">{{year.stat.strikePercentage}}</td>
        </tr>
        </tbody>
    </v-simple-table>
</div>
</template>

<script>
    import _ from 'lodash';

export default {
  name: 'PitchingStats',
  props: {
    stats: []
  },
  data() {
    return {
    
    }
  },
  created(){
    this.stats = _.orderBy(this.stats,['season'], ['desc'])
  },
  methods: {
    
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .avatar {
       margin-top: 5px;
       margin-bottom: 5px;
   }
   .pitcherTable{
       margin-left: 20px;
       margin-right: 20px;
   }
   .more:hover{
       text-decoration: underline;
   }

</style>
