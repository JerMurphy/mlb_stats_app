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
        <tr v-for="(year,i) in stats" :key="year.season" v-if="year.team"> 
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
                                    <h3> Pitch Placement Breakdown</h3>
                                    <h5> (Strikes, Non-Strikes</h5>
                                    <d3-pie
                                        :data="pitchingObj.pitchData[i]"
                                        width="100%"
                                        height="400px">
                                    </d3-pie>
                                    <h5> Figure 1.A</h5>
                                </v-col>
                                <v-col>
                                    <h3> Pitching Results Breakdown</h3>
                                    <h5> (Strikeouts, Walks, Hits, Ground Outs, Air Outs)</h5>
                                    <d3-pie
                                        :data="pitchingObj.resultData.values[i]"
                                        width="100%"
                                        height="400px">
                                    </d3-pie>
                                    <h5> Figure 1.B</h5>
                                </v-col>
                            </v-row>
                             <v-row>
                               <v-col cols="md-6">
                                 {{name}}, as broken down above in Figure 1.A, had a {{year.stat.strikePercentage}}% Strike percentage over the year.
                               </v-col>
                                <v-col cols="md-6">
                                    
                                    When facing an opposing batter, {{name}}, as broken down above in Figure 1.B, had a {{pitchingObj.resultData.resultObj[i].strP}}% chance of striking the batter out. A {{pitchingObj.resultData.resultObj[i].wlkP}}% chance of walking the batter. A {{pitchingObj.resultData.resultObj[i].hP}}% chance of giving up a hit resulting in at least one base and a {{pitchingObj.resultData.resultObj[i].goP}}% chance and {{pitchingObj.resultData.resultObj[i].aoP}}% chance of the batter getting out by ground out or air out respectively.

                                    
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
    import axios from 'axios';

export default {
  name: 'PitchingStats',
  props: {
    stats: [],
    name: String
  },
  data() {
    return {
        pitchingObj: Object
    }
  },
  created(){
    this.stats = _.orderBy(this.stats,['season'], ['desc'])
    axios.post('/pitchingStats', this.stats).then(res => this.pitchingObj = res.data);
  },
  methods: {
    getPitchData(p,s){
      return [{key: 'Strikes', value: s},{key: 'Non-Strikes (Balls,Fouls,etc)', value: parseInt(p-s)}];
    },
    getResultData(s,w,h,g,a){
        var total = s+w+h+g+a;
        this.strP =(parseInt(s)/total*100).toFixed(0)
        this.wlkP =(parseInt(w)/total*100).toFixed(0)
        this.hP =(parseInt(h)/total*100).toFixed(0)
        this.goP =(parseInt(g)/total*100).toFixed(0)
        this.aoP =(parseInt(a)/total*100).toFixed(0)
        return [{key: 'Strike Outs', value: s},{key: 'Walks', value: w},{key: 'Hits', value: h},{key: 'Gound Outs', value: g},{key: 'Air Outs', value: a}];
    },
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
