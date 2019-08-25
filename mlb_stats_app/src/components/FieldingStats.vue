<template>
<div>
    <v-simple-table class="pitcherTable" height="300px" fixedHeader>
        <thead>
        <tr>
            <th class="text-center">Year</th>
            <th class="text-center">Team</th>
            <th class="text-center">Games Started</th>
            <th class="text-center">Fielding %</th>
            <th class="text-center">Put Outs</th>
            <th class="text-center">Chances</th>
            <th class="text-center">Assists</th>
            <th class="text-center">Double Plays</th>
            <th class="text-center">Errors</th>
            <th class="text-center">Total Innings</th>
            <th class="text-center">
                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <span v-on="on">Range Factor per Game</span>
                    </template>
                <span>Range Factor (commonly abbreviated RF) is a baseball statistic developed by Bill James. It is calculated by dividing putouts and assists by the number of innings or games played at a given defense position.</span>
                </v-tooltip>
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="year in stats" :key="year.season" v-if="year.team"> 
            <td class="text-center">{{year.season}}</td>
            <td  class="text-center">{{year.team.name}}</td>
            <td class="text-center">{{year.stat.gamesStarted}}</td>
            <td class="text-center">{{year.stat.fielding}}</td>
            <td class="text-center">{{year.stat.putOuts}}</td>
            <td class="text-center">{{year.stat.chances}}</td>
            <td class="text-center">{{year.stat.assists}}</td>
            <td class="text-center">{{year.stat.doublePlays}}</td>
            <td class="text-center">{{year.stat.errors}}</td>
            <td class="text-center">{{year.stat.innings}}</td>
            <td class="text-center">{{year.stat.rangeFactorPerGame}}</td>
        </tr>
        </tbody>
    </v-simple-table>
</div>
</template>

<script>
    import _ from 'lodash';

export default {
  name: 'FieldingStats',
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
