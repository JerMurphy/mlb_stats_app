<template>
    <div class="teamStat">
        <v-card color="grey lighten-4" flat tile>
            <v-toolbar dense :color="colors[team_data.id].color">
            <v-btn v-on:click="navigate()">
                Teams
            </v-btn>
            <div :style="colors[team_data.id].text">{{team_data.name}}</div>
            <div class="flex-grow-1" >
                
            </div>
            <v-toolbar-items>
                <!-- <v-select items=[] label="Teams" solo ></v-select> -->
            </v-toolbar-items>
            </v-toolbar>
        </v-card>
        <v-row  class="team">
            <v-col :md="1">
            </v-col>
            <v-col :md="3">
                <v-img :src="this.imgsrc" contain height="400px" width="300px"></v-img>
            </v-col>
            <v-col :md="6"  style="margin-top: 100px; text-align: center">
                 <h1>{{team_data.name}}</h1>
                 <h3>League: {{team_data.league.name}}</h3>
                 <h3>Division: {{team_data.division.name.split(' ')[2]}}</h3>
                 <v-row align="center" justify="center">
                    <v-col :md="3">
                        <h1> {{avg}} </h1>
                        <p> Batting %</p>
                    </v-col>
                       <v-col :md="3">
                        <h1> {{obp}} </h1>
                        <p>On-Base %</p>
                    </v-col>
                       <v-col :md="3">
                        <h1> {{slg}} </h1>
                        <p> Slugging %</p>
                    </v-col>
                 </v-row>
                 <v-row align="center" justify="center">
                    <v-col :md="2">
                        <h4> {{hr}} </h4>
                        <p>HR</p>
                    </v-col>
                    <v-col :md="2">
                        <h4> {{rbi}} </h4>
                        <p>RBI's.</p>
                    </v-col>
                    <v-col :md="2">
                        <h4> {{walk}} </h4>
                        <p>Walks</p>
                    </v-col>
                    <v-col :md="2">
                        <h4> {{hits}} </h4>
                        <p>Hits (H)</p>
                    </v-col>
                    <v-col :md="2">
                        <h4> {{strikeouts}} </h4>
                        <p> Strikeouts (K)</p>
                    </v-col>
                    <v-col :md="2">
                        <h4> {{ratio}}</h4>
                        <p>H / K Ratio</p>
                    </v-col>
                 </v-row>
            </v-col>
            <v-col :md="1">
            </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
import colours from '../assets/colours';

export default {
  name: 'TeamStat',
  props: {
    id: {
        type: String,
        required: true
    },
    roster: {
        type: Array,
        required: true
    }
  },
  data() {
    return {
        team_data: Object,
        imgsrc: String,
        avg: 'N/A',
        slg: 'N/A',
        obp: "N/A",
        colors: Object,
        textcolor: Object
    }
  },
  methods:{
    calculateStats(roster){
      //calculate the stats
        if(roster[0]){
            var avgarr = [];
            var obparr = [];
            var slgarr = [];
            var hrarr = [];
            var rbiarr = [];
            var walkarr = [];
            var hitarr = [];
            var Karr = [];
            _.forEach(roster, function(player){
                if(player.person.stats){
                    //some players dont have a stats object??
                    if(player.person.stats[0].splits[0].stat.avg && player.person.stats[0].splits[0].stat.avg != '.---'){
                        avgarr.push(parseFloat(player.person.stats[0].splits[0].stat.avg));
                    }
                    if(player.person.stats[0].splits[0].stat.obp && player.person.stats[0].splits[0].stat.obp != '.---'){
                    obparr.push(parseFloat(player.person.stats[0].splits[0].stat.obp));
                    }
                    if(player.person.stats[0].splits[0].stat.slg && player.person.stats[0].splits[0].stat.slg != '.---'){
                    slgarr.push(parseFloat(player.person.stats[0].splits[0].stat.slg));
                    }

                    hrarr.push(parseFloat(player.person.stats[0].splits[0].stat.homeRuns));
                    if(player.person.stats[0].splits[0].stat.rbi){
                        rbiarr.push(parseFloat(player.person.stats[0].splits[0].stat.rbi));
                    }
                    walkarr.push(parseFloat(player.person.stats[0].splits[0].stat.baseOnBalls));
                    hitarr.push(parseFloat(player.person.stats[0].splits[0].stat.hits));
                    Karr.push(parseFloat(player.person.stats[0].splits[0].stat.strikeOuts));
                }
            });
            this.avg = _.mean(avgarr).toFixed(3);
            this.obp = _.mean(obparr).toFixed(3);
            this.slg = _.mean(slgarr).toFixed(3);
            this.hr = _.sum(hrarr);
            this.rbi = _.sum(rbiarr);
            this.walk = _.sum(walkarr);
            this.hits = _.sum(hitarr);
            this.strikeouts = _.sum(Karr);
            var temp = (this.hits/this.strikeouts).toFixed(2);
            this.ratio = "" + temp + " : 1";
            //this.calculateRatio(this.hits, this.strikeouts);
        }else{
            alert('no roster loaded');
        }
    },
    getGCD(p,q){
        if(q==0){
            alert(p);
            return p
        }else{
            return this.getGCD(q,p%q)
        }
    },
    calculateRatio(hits,strikeouts){
        var gcd = this.getGCD(hits, strikeouts);
        var newHits  = hits/gcd;
        var newK = strikeouts/gcd;
        return ""+newHits + " : " + newK;
    },
    navigate(){
        this.$router.go(-1)
    }
  },
  created(){
      this.colors = colours;
    this.calculateStats(this.roster);
    this.imgsrc = "https://www.mlbstatic.com/team-logos/"+this.id+".svg";
    axios.get('https://statsapi.mlb.com/api/v1/teams/'+ this.id).then(res => this.team_data = res.data.teams[0])
    .catch(err=> alert(err));
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   /* .team {
       box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
       background: white;
       margin-top: 50px;
       margin-left: 50px;
       margin-right:50px;
   } */
</style>
