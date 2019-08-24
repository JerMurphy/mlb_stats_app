<template>
    <div class="teamStat">
        <v-row >
            <v-col :md="1">
            </v-col>
            <v-col :md="3">
                <v-img :src="getImage(id)" contain height="400px" width="300px"></v-img>
            </v-col>
            <v-col :md="6"  style="margin-top: 100px; text-align: center">
                 <h1>{{player.fullName}} #{{player.primaryNumber}}</h1>
                 <h3>{{player.primaryPosition.name}} </h3>
                 <v-row align="center" justify="center">
                    <v-col :md="3">
                        <h1> </h1>
                        <p> Batting %</p>
                    </v-col>
                       <v-col :md="3">
                        <h1> </h1>
                        <p>On-Base %</p>
                    </v-col>
                       <v-col :md="3">
                        <h1> </h1>
                        <p> Slugging %</p>
                    </v-col>
                 </v-row>
                 <v-row align="center" justify="center">
                    <v-col :md="2">
                        <h4>  </h4>
                        <p>HR</p>
                    </v-col>
                    <v-col :md="2">
                        <h4>  </h4>
                        <p>RBI's.</p>
                    </v-col>
                    <v-col :md="2">
                        <h4> </h4>
                        <p>Walks</p>
                    </v-col>
                    <v-col :md="2">
                        <h4>  </h4>
                        <p>Hits (H)</p>
                    </v-col>
                    <v-col :md="2">
                        <h4>  </h4>
                        <p> Strikeouts (K)</p>
                    </v-col>
                    <v-col :md="2">
                        <h4> </h4>
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

export default {
  name: 'PlayerProfile',
  props: {
    id: {
        type: String,
        required: true
    },
    player:{
        type: Object,
        required: true
    }
  },
  data() {
    return {
       
    }
  },
  methods:{
    getImage(id){
         return "https://securea.mlb.com/mlb/images/players/head_shot/"+id+".jpg"
     },
  },
  created(){
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   
</style>
