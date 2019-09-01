<template>
    <div class="teamStat">
        <v-row >
            <v-col :md="1">
            </v-col>
            <v-col :md="3">
                <v-img :src="getImage(id)" contain height="300px" width="200px" style="margin-left: 25%"/>
                <h1>{{player.fullName}} #{{player.primaryNumber}}</h1>
                 <h3>{{player.primaryPosition.name}} </h3>
            </v-col>
            <v-col :md="6"  style="margin-top: 50px; text-align: center">
                 <h2>Player Profile </h2>
                 <v-row align="center" justify="center">
                    <v-col :md="3">
                        <h1>{{player.height}} </h1>
                        <p> Height</p>
                    </v-col>
                       <v-col :md="3">
                        <h1> {{player.weight}}lbs</h1>
                        <p>Weight</p>
                    </v-col>
                       <v-col :md="3">
                        <h1> {{player.currentAge}}</h1>
                        <p> Age</p>
                    </v-col>
                 </v-row>
                 <v-row align="center" justify="center">
                    <v-col :md="3">
                        <h2>{{player.birthDate}} </h2>
                        <p> Birth Date</p>
                    </v-col>
                       <v-col :md="3">
                        <h4> {{player.birthCity}},{{player.birthCountry}}</h4>
                        <p>Birth Place</p>
                    </v-col>
                       <v-col :md="3">
                        <h2 v-if="player.draftYear"> {{player.draftYear}}</h2>
                        <h2 v-if="!player.draftYear"> N/A</h2>
                        <p> Drafted</p>
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
