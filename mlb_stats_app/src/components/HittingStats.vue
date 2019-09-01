<template>
<div>
    <h3> Overall Stats by Season</h3>
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
            <td class="text-center">
                <div class="text-center">
                    <v-dialog v-model="dialog" width="1000">
                        <template v-slot:activator="{ on }">
                            <v-btn dark v-on="on"   color="#2076D2" outlined><v-icon>mdi-chart-pie</v-icon></v-btn>
                        </template>
                        <v-card>
                            <v-card-title class="headline grey lighten-2" primary-title>
                            <span class="centered">{{year.season}} - {{year.team.name}}</span>
                            </v-card-title>
                            <v-card-text>
                            <v-row>
                                <v-col>
                                    <h3> Plate Appearence Breakdown</h3>
                                    <h5> (Hits, Strikeouts,Walks,Ground Outs, Fly Outs)</h5>
                                    <d3-pie
                                        :data="getPlateData(year.stat.hits,year.stat.strikeOuts, year.stat.baseOnBalls, year.stat.groundOuts, year.stat.plateAppearances)"
                                        :options="options"
                                        width="100%"
                                        height="400px">
                                    </d3-pie>
                                    <h5> Figure 1.A</h5>
                                </v-col>
                                <v-col>
                                    <h3> Hit Placement Breakdown</h3>
                                    <h5> (Singles, Doubles, Triples, Home Runs)</h5>
                                    <d3-pie
                                        :data="getHitData(year.stat.hits,year.stat.doubles, year.stat.triples, year.stat.homeRuns)"
                                        width="100%"
                                        height="400px">
                                    </d3-pie>
                                    <h5> Figure 1.B</h5>
                                </v-col>
                            </v-row>
                            <v-row>
                               <v-col cols="md-2">
                               </v-col>
                                <v-col cols="md-8">
                                    
                                    {{name}}, as broken down in Figure 1.A, had a {{parseFloat(year.stat.avg)*100}}% chance of reaching base by hitting the 
                                    ball in to play and of those hits, as broken down in Figure 1.B, had a {{hitObj.single}}% chance of reaching by single, a 
                                    {{hitObj.double}}% change of reaching by double, a {{hitObj.triple}}% chance of reaching by triple and a {{hitObj.hr}}% chance of hitting a HomeRun

                                    
                                </v-col>
                                <v-col cols="md-2">
                               </v-col>
                            </v-row>
                            </v-card-text>

                            <v-divider></v-divider>
                        </v-card>
                    </v-dialog>
                </div>
            </td>
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
    stats: [],
    name: String
  },
  data() {
    return {
        data: [],
        hitObj: Object
    }
  },
  created(){
    this.stats = _.orderBy(this.stats,['season'], ['desc'])
  },
  methods: {
    getPlateData(hits,str,walks,go,pa){
        var fo = parseInt(pa)-parseInt(hits)-parseInt(str)-parseInt(walks)-parseInt(go);
        return [{key: 'Hits', value: hits},{key: 'Strikeouts', value: str}, {key: 'Walks', value: walks},{key: 'Ground Outs', value: go},{key: 'Fly Outs', value: fo}];
    },
    getHitData(hits,d,t,hr){
        this.hitObj = {
            single: (parseInt(hits-d-t-hr)/parseInt(hits)*100).toFixed(0),
            double: (parseInt(d)/parseInt(hits)*100).toFixed(0),
            triple: (parseInt(t)/parseInt(hits)*100).toFixed(0),
            hr: (parseInt(hr)/parseInt(hits)*100).toFixed(0)
        }
        return [{key: 'Singles', value: hits-d-t-hr},{key: 'Doubles', value: d}, {key: 'Triples', value: t},{key: 'Home Runs', value: hr}];
    }
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
   .centered{
       text-align: center;
   }

</style>
