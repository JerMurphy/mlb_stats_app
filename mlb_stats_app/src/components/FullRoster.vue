<template>
<div>
    <v-row>
        <v-col>
        <h2> Players</h2>
        <v-simple-table class="pitcherTable" height="400px" fixedHeader>
            <thead>
            <tr>
                <th class="text-center"></th>
                <th class="text-center">Name</th>
                <th class="text-center">#</th>
                <th class="text-center">Position</th>
                <th class="text-center">Games Played</th>
                <th class="text-center">Batting Avg.</th>
                <th class="text-center">RBI's</th>
                <th class="text-center">Home Runs</th>
                <th class="text-center"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="player in roster" :key="player.person.id" v-if="player.person.primaryPosition.name != 'Pitcher'"> 
                <td>
                    <!-- <img :src="getImage(player.person.id)" height="90px" width="75px"> -->
                    <v-avatar size="75px" class="avatar">
                        <img :src="getImage(player.person.id)">
                    </v-avatar>
                </td>
                <td>{{ player.person.fullName }}</td>
                <td>{{ player.person.primaryNumber }}</td>
                <td>{{ player.person.primaryPosition.abbreviation }}</td>
                <td v-if="player.person.stats">{{ player.person.stats[0].splits[0].stat.gamesPlayed }}</td>
                <td v-if="player.person.stats">{{ player.person.stats[0].splits[0].stat.avg }}</td>
                <td v-if="!player.person.stats">N/A</td>
                <td v-if="player.person.stats">{{ player.person.stats[0].splits[0].stat.rbi }}</td>
                <td v-if="!player.person.stats">N/A</td>
                <td v-if="player.person.stats">{{ player.person.stats[0].splits[0].stat.homeRuns }}</td>
                <td v-if="!player.person.stats">N/A</td>
                <td class="more" v-on:click="gotoPlayer(player.person.id)">More Details</td>
            </tr>
            </tbody>
        </v-simple-table>
        </v-col>
    <v-col>
        <h2> Pitchers</h2>
        <v-simple-table class="pitcherTable" height="400px" fixedHeader >
            <thead>
            <tr>
                <th class="text-center"></th>
                <th class="text-center">Name</th>
                <th class="text-center">#</th>
                <th class="text-center">Games Played</th>
                <th class="text-center">Win:Lose</th>
                <th class="text-center">Win %</th>
                <th class="text-center">ERA</th>
                <th class="text-center">WHIP</th>
                <th> </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="player in roster" :key="player.person.id" v-if="player.person.primaryPosition.name == 'Pitcher'">
                <td>
                    <!-- <img :src="getImage(player.person.id)" height="90px" width="75px"> -->
                    <v-avatar size="75px" class="avatar">
                        <img :src="getImage(player.person.id)">
                    </v-avatar>
                </td>
                <td>{{ player.person.fullName }}</td>
                <td>{{ player.person.primaryNumber }}</td>
                <td v-if="player.person.stats">{{ player.person.stats[0].splits[0].stat.gamesPlayed }}</td>
                <td v-if="player.person.stats">{{ player.person.stats[0].splits[0].stat.wins }} : {{ player.person.stats[0].splits[0].stat.losses }}</td>
                <td v-if="!player.person.stats">N/A</td>
                <td v-if="player.person.stats">{{ player.person.stats[0].splits[0].stat.winPercentage }}</td>
                <td v-if="!player.person.stats">N/A</td>
                <td v-if="player.person.stats">{{ player.person.stats[0].splits[0].stat.era }}</td>
                <td v-if="!player.person.stats">N/A</td>
                <td v-if="player.person.stats">{{ player.person.stats[0].splits[0].stat.whip }}</td>
                <td v-if="!player.person.stats">N/A</td>
                <td class="more" v-on:click="gotoPlayer(player.person.id)">More Details</td>
            </tr>
            </tbody>
        </v-simple-table>
    </v-col>
    </v-row>
</div>
</template>

<script>


export default {
  name: 'FullRoster',
  props: {
    id: String,
    roster: []
  },
  data() {
    return {
      imgsrc: String,
    }
  },
  created(){
    
  },
  methods: {
     getImage(id){
         return "https://securea.mlb.com/mlb/images/players/head_shot/"+id+".jpg"
     },
     gotoPlayer(id){
        this.$router.push({ path: `/player/${id}` })
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
       margin-left: 10px;
       margin-right: 10px;
       margin-bottom: 50px;
       box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

   }
   .more:hover{
       text-decoration: underline;
   }

</style>
