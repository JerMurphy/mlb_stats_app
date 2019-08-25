<template>
<div>
    <v-simple-table class="pitcherTable" height="300px" fixedHeader>
        <thead>
        <tr>
            <th class="text-center">Year</th>
            <th class="text-center">Team</th>
            <th class="text-center">Average</th>
            <th class="text-center">Hits</th>
            <th class="text-center">Doubles</th>
            <th class="text-center">Triples</th>
            <th class="text-center">Home Runs</th>
            <th class="text-center">RBI</th>
            <th class="text-center">Strikeouts</th>
            <th class="text-center">Walks</th>
            <th class="text-center">
                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <span v-on="on">OBP</span>
                    </template>
                <span>OBP: On-base Percentage</span>
                </v-tooltip>
            </th>
            <th class="text-center">
                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <span v-on="on">SLG</span>
                    </template>
                <span>SLG: Sluggin Percentage</span>
                </v-tooltip>
            </th>
            <th class="text-center">
                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <span v-on="on">OPS</span>
                    </template>
                <span>OPS: On-base plus Slugging</span>
                </v-tooltip>
            </th><!-- add tooltips to these -->
        </tr>
        </thead>
        <tbody>
        <tr v-for="year in stats" :key="year.season" v-if="year.team"> 
            <td class="text-center">{{year.season}}</td>
            <td class="text-center">{{year.team.name}}</td>
            <td class="text-center">{{year.stat.avg}}</td>
            <td class="text-center">{{year.stat.hits}}</td>
            <td class="text-center">{{year.stat.doubles}}</td>
            <td class="text-center">{{year.stat.triples}}</td>
            <td class="text-center">{{year.stat.homeRuns}}</td>
            <td class="text-center">{{year.stat.rbi}}</td>
            <td class="text-center">{{year.stat.strikeOuts}}</td>
            <td class="text-center">{{year.stat.baseOnBalls}}</td>
            <td class="text-center">{{year.stat.obp}}</td>
            <td class="text-center">{{year.stat.slg}}</td>
            <td class="text-center">{{year.stat.ops}}</td>
        </tr>
        </tbody>
    </v-simple-table>
</div>
</template>

<script>
    import _ from 'lodash';

export default {
  name: 'HittingStats',
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
