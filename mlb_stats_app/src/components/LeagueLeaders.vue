<template>
    <v-tabs fixed-tabs v-if="leaders">
            <v-tab ripple v-for="type in types" v-bind:key="type">
                 <v-icon>{{type}}</v-icon>
            </v-tab>
            <v-tab-item v-for="type in types" v-bind:key="type">
                <div v-if="type == 'hits'">
                    <v-simple-table class="leaderTable" fixedHeader>
                        <thead>
                        <tr>
                            <th class="text-center"></th>
                            <th class="text-center">Name</th>
                            <th class="text-center">Team</th>
                            <th class="text-center">Position</th>
                            <th class="text-center">Hits</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="player in leaders.hits" :key="player.id"> 
                            <td>
                                <img :src="getImage(player.id)" height="80px" width="70px" style="margin-top:5px">
                                <!-- <v-avatar size="75px" class="avatar">
                                    <img :src="getImage(player.id)">
                                </v-avatar> -->
                            </td>
                            <td>{{ player.name }}</td>
                            <td>{{ player.team }}</td>
                            <td>{{ player.position }}</td>
                            <td style="font-size: 40px">{{ player.hits}}</td>

                        </tr>
                        </tbody>
                    </v-simple-table>
                </div>
                <div v-if="type == 'ops'">
                    <v-simple-table class="leaderTable" fixedHeader>
                        <thead>
                        <tr>
                            <th class="text-center"></th>
                            <th class="text-center">Name</th>
                            <th class="text-center">Team</th>
                            <th class="text-center">Position</th>
                            <th class="text-center">Hits</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="player in leaders.ops" :key="player.id"> 
                            <td>
                                <img :src="getImage(player.id)" height="80px" width="70px" style="margin-top:5px">
                                <!-- <v-avatar size="75px" class="avatar">
                                    <img :src="getImage(player.id)">
                                </v-avatar> -->
                            </td>
                            <td>{{ player.name }}</td>
                            <td>{{ player.team }}</td>
                            <td>{{ player.position }}</td>
                            <td style="font-size: 40px">{{ player.ops}}</td>

                        </tr>
                        </tbody>
                    </v-simple-table>
                </div>
                <div v-if="type == 'homeruns'">
                    <v-simple-table class="leaderTable" fixedHeader>
                        <thead>
                        <tr>
                            <th class="text-center"></th>
                            <th class="text-center">Name</th>
                            <th class="text-center">Team</th>
                            <th class="text-center">Position</th>
                            <th class="text-center">Hits</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="player in leaders.homeruns" :key="player.id"> 
                            <td>
                                <img :src="getImage(player.id)" height="80px" width="70px" style="margin-top:5px">
                                <!-- <v-avatar size="75px" class="avatar">
                                    <img :src="getImage(player.id)">
                                </v-avatar> -->
                            </td>
                            <td>{{ player.name }}</td>
                            <td>{{ player.team }}</td>
                            <td>{{ player.position }}</td>
                            <td style="font-size: 40px">{{ player.homeruns}}</td>

                        </tr>
                        </tbody>
                    </v-simple-table>
                </div>
                <div v-if="type == 'avg'">
                    <v-simple-table class="leaderTable" fixedHeader>
                        <thead>
                        <tr>
                            <th class="text-center"></th>
                            <th class="text-center">Name</th>
                            <th class="text-center">Team</th>
                            <th class="text-center">Position</th>
                            <th class="text-center">Hits</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="player in leaders.avg" :key="player.id"> 
                            <td>
                                <img :src="getImage(player.id)" height="80px" width="70px" style="margin-top:5px">
                            </td>
                            <td>{{ player.name }}</td>
                            <td>{{ player.team }}</td>
                            <td>{{ player.position }}</td>
                            <td style="font-size: 40px">{{ player.avg}}</td>

                        </tr>
                        </tbody>
                    </v-simple-table>
                </div>
                <div v-if="type == 'slg'">
                    <v-simple-table class="leaderTable" fixedHeader>
                        <thead>
                        <tr>
                            <th class="text-center"></th>
                            <th class="text-center">Name</th>
                            <th class="text-center">Team</th>
                            <th class="text-center">Position</th>
                            <th class="text-center">Hits</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="player in leaders.slg" :key="player.id"> 
                            <td>
                                <img :src="getImage(player.id)" height="80px" width="70px" style="margin-top:5px">
                            </td>
                            <td>{{ player.name }}</td>
                            <td>{{ player.team }}</td>
                            <td>{{ player.position }}</td>
                            <td style="font-size: 40px">{{ player.slg}}</td>

                        </tr>
                        </tbody>
                    </v-simple-table>
                </div>
                <div v-if="type == 'obp'">
                    <v-simple-table class="leaderTable" fixedHeader>
                        <thead>
                        <tr>
                            <th class="text-center"></th>
                            <th class="text-center">Name</th>
                            <th class="text-center">Team</th>
                            <th class="text-center">Position</th>
                            <th class="text-center">Hits</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="player in leaders.obp" :key="player.id"> 
                            <td>
                                <img :src="getImage(player.id)" height="80px" width="70px" style="margin-top:5px">
                            </td>
                            <td>{{ player.name }}</td>
                            <td>{{ player.team }}</td>
                            <td>{{ player.position }}</td>
                            <td style="font-size: 40px">{{ player.obp}}</td>

                        </tr>
                        </tbody>
                    </v-simple-table>
                </div>
                <div v-if="type =='rbi'">
                    <v-simple-table class="leaderTable" fixedHeader>
                        <thead>
                        <tr>
                            <th class="text-center"></th>
                            <th class="text-center">Name</th>
                            <th class="text-center">Team</th>
                            <th class="text-center">Position</th>
                            <th class="text-center">Hits</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="player in leaders.rbi" :key="player.id"> 
                            <td>
                                <img :src="getImage(player.id)" height="80px" width="70px" style="margin-top:5px">
                            </td>
                            <td>{{ player.name }}</td>
                            <td>{{ player.team }}</td>
                            <td>{{ player.position }}</td>
                            <td style="font-size: 40px">{{ player.rbi}}</td>

                        </tr>
                        </tbody>
                    </v-simple-table>
                </div>
                <div v-if="type == 'strikeouts'">
                    <v-simple-table class="leaderTable" fixedHeader>
                        <thead>
                        <tr>
                            <th class="text-center"></th>
                            <th class="text-center">Name</th>
                            <th class="text-center">Team</th>
                            <th class="text-center">Position</th>
                            <th class="text-center">Hits</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="player in leaders.str" :key="player.id"> 
                            <td>
                                <img :src="getImage(player.id)" height="80px" width="70px" style="margin-top:5px">
                            </td>
                            <td>{{ player.name }}</td>
                            <td>{{ player.team }}</td>
                            <td>{{ player.position }}</td>
                            <td style="font-size: 40px">{{ player.str}}</td>

                        </tr>
                        </tbody>
                    </v-simple-table>
                </div>
            </v-tab-item>
        </v-tabs>
</template>

<script>
import _ from 'lodash';
import axios from 'axios';

export default {
    name: 'LeagueLeaders',
    props:{
        teams: [],
        leaders: Object
    },
    data() {
        return {
        types: ['avg','slg','obp','ops','hits', "rbi", 'HR', 'SO']
        }
    },
    created(){
        axios.post('/leagueLeaders', this.teams).then(res => this.leaders = res.data);
    },
    methods: {
        getImage(id){
         return "https://securea.mlb.com/mlb/images/players/head_shot/"+id+".jpg"
     }
    }
}
</script>
<style scoped>

</style>