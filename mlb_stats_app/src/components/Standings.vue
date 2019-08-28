<template>
    <v-tabs fixed-tabs>
        <v-tab ripple v-for="type in types" v-bind:key="type">
                <v-icon>{{type}}</v-icon>
        </v-tab>
        <v-tab-item v-for="type in types" v-bind:key="type">
            <div v-if="type == 'American League'" style="height:300px; overflow-y:scroll">
                <h4> AL East</h4>
                <v-simple-table class="pitcherTable" height="300px" fixedHeader>
                    <thead>
                    <tr>
                        
                        <th class="text-center">Rank</th>
                        <th class="text-center">Team</th>
                        <th class="text-center">Wins</th>
                        <th class="text-center">Losses</th>
                        <th class="text-center">Win Pct</th>
                        <th class="text-center">Games Behind</th>
                        <th class="text-center">Home Record</th>
                        <th class="text-center">Away Record</th>
                        <th class="text-center">Last 10</th>
                        <th class="text-center">Streak</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="team in ale" :key="team" > 
                        <td>{{team.ordinal_rank}}</td>
                        <td>{{team.first_name}} {{team.last_name}}</td>
                        <td>{{team.won}}</td>
                        <td>{{team.lost}}</td>
                        <td>{{team.win_percentage}}</td>
                        <td>{{team.games_back}}</td>
                        <td>{{team.home_won}}:{{team.home_lost}}</td>
                        <td>{{team.away_won}}:{{team.away_lost}}</td>
                        <td>{{team.last_ten}}</td>
                        <td>{{team.streak_total}} {{team.streak_type}}</td>
                    </tr>
                    </tbody>
                </v-simple-table>
                <h4> AL Central</h4>
                <v-simple-table class="pitcherTable" height="300px" fixedHeader>
                    <thead>
                    <tr>
                        
                       <th class="text-center">Rank</th>
                        <th class="text-center">Team</th>
                        <th class="text-center">Wins</th>
                        <th class="text-center">Losses</th>
                        <th class="text-center">Win Pct</th>
                        <th class="text-center">Games Behind</th>
                        <th class="text-center">Home Record</th>
                        <th class="text-center">Away Record</th>
                        <th class="text-center">Last 10</th>
                        <th class="text-center">Streak</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="team in alc" :key="team" > 
                        <td>{{team.ordinal_rank}}</td>
                        <td>{{team.first_name}} {{team.last_name}}</td>
                        <td>{{team.won}}</td>
                        <td>{{team.lost}}</td>
                        <td>{{team.win_percentage}}</td>
                        <td>{{team.games_back}}</td>
                        <td>{{team.home_won}}:{{team.home_lost}}</td>
                        <td>{{team.away_won}}:{{team.away_lost}}</td>
                        <td>{{team.last_ten}}</td>
                        <td>{{team.streak_total}} {{team.streak_type}}</td>
                    </tr>
                    </tbody>
                </v-simple-table>
                <h4> AL West</h4>
                <v-simple-table class="pitcherTable" height="300px" fixedHeader>
                    <thead>
                    <tr>
                        
                        <th class="text-center">Rank</th>
                        <th class="text-center">Team</th>
                        <th class="text-center">Wins</th>
                        <th class="text-center">Losses</th>
                        <th class="text-center">Win Pct</th>
                        <th class="text-center">Games Behind</th>
                        <th class="text-center">Home Record</th>
                        <th class="text-center">Away Record</th>
                        <th class="text-center">Last 10</th>
                        <th class="text-center">Streak</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="team in alw" :key="team" > 
                       <td>{{team.ordinal_rank}}</td>
                        <td>{{team.first_name}} {{team.last_name}}</td>
                        <td>{{team.won}}</td>
                        <td>{{team.lost}}</td>
                        <td>{{team.win_percentage}}</td>
                        <td>{{team.games_back}}</td>
                        <td>{{team.home_won}}:{{team.home_lost}}</td>
                        <td>{{team.away_won}}:{{team.away_lost}}</td>
                        <td>{{team.last_ten}}</td>
                        <td>{{team.streak_total}} {{team.streak_type}}</td>
                    </tr>
                    </tbody>
                </v-simple-table>
            </div>
            <div v-if="type == 'National League'" style="height:300px; overflow-y:scroll">
                <h4> NL East</h4>
                <v-simple-table class="pitcherTable" height="300px" fixedHeader>
                    <thead>
                    <tr>
                        
                        <th class="text-center">Rank</th>
                        <th class="text-center">Team</th>
                        <th class="text-center">Wins</th>
                        <th class="text-center">Losses</th>
                        <th class="text-center">Win Pct</th>
                        <th class="text-center">Games Behind</th>
                        <th class="text-center">Home Record</th>
                        <th class="text-center">Away Record</th>
                        <th class="text-center">Last 10</th>
                        <th class="text-center">Streak</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="team in nle" :key="team" > 
                        <td>{{team.ordinal_rank}}</td>
                        <td>{{team.first_name}} {{team.last_name}}</td>
                        <td>{{team.won}}</td>
                        <td>{{team.lost}}</td>
                        <td>{{team.win_percentage}}</td>
                        <td>{{team.games_back}}</td>
                        <td>{{team.home_won}}:{{team.home_lost}}</td>
                        <td>{{team.away_won}}:{{team.away_lost}}</td>
                        <td>{{team.last_ten}}</td>
                        <td>{{team.streak_total}} {{team.streak_type}}</td>
                    </tr>
                    </tbody>
                </v-simple-table>
                <h4> NL Central</h4>
                <v-simple-table class="pitcherTable" height="300px" fixedHeader>
                    <thead>
                    <tr>
                        
                        <th class="text-center">Rank</th>
                        <th class="text-center">Team</th>
                        <th class="text-center">Wins</th>
                        <th class="text-center">Losses</th>
                        <th class="text-center">Win Pct</th>
                        <th class="text-center">Games Behind</th>
                        <th class="text-center">Home Record</th>
                        <th class="text-center">Away Record</th>
                        <th class="text-center">Last 10</th>
                        <th class="text-center">Streak</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="team in nlc" :key="team" > 
                        <td>{{team.ordinal_rank}}</td>
                        <td>{{team.first_name}} {{team.last_name}}</td>
                        <td>{{team.won}}</td>
                        <td>{{team.lost}}</td>
                        <td>{{team.win_percentage}}</td>
                        <td>{{team.games_back}}</td>
                        <td>{{team.home_won}}:{{team.home_lost}}</td>
                        <td>{{team.away_won}}:{{team.away_lost}}</td>
                        <td>{{team.last_ten}}</td>
                        <td>{{team.streak_total}} {{team.streak_type}}</td>
                    </tr>
                    </tbody>
                </v-simple-table>
                <h4> NL West</h4>
                <v-simple-table class="pitcherTable" height="300px" fixedHeader>
                    <thead>
                    <tr>
                        
                        <th class="text-center">Rank</th>
                        <th class="text-center">Team</th>
                        <th class="text-center">Wins</th>
                        <th class="text-center">Losses</th>
                        <th class="text-center">Win Pct</th>
                        <th class="text-center">Games Behind</th>
                        <th class="text-center">Home Record</th>
                        <th class="text-center">Away Record</th>
                        <th class="text-center">Last 10</th>
                        <th class="text-center">Streak</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="team in nlw" :key="team" > 
                        <td>{{team.ordinal_rank}}</td>
                        <td>{{team.first_name}} {{team.last_name}}</td>
                        <td>{{team.won}}</td>
                        <td>{{team.lost}}</td>
                        <td>{{team.win_percentage}}</td>
                        <td>{{team.games_back}}</td>
                        <td>{{team.home_won}}:{{team.home_lost}}</td>
                        <td>{{team.away_won}}:{{team.away_lost}}</td>
                        <td>{{team.last_ten}}</td>
                        <td>{{team.streak_total}} {{team.streak_type}}</td>
                    </tr>
                    </tbody>
                </v-simple-table>
            </div>
        </v-tab-item>
    </v-tabs>
</template>

<script>

import al from '../assets/alstandings';
import nl from '../assets/nlstandings';
export default {
    name: 'Standings',
    data() {
        return {
        types: ['American League','National League', ],
        ale: [],
        alc: [],
        alw: [],
        nle: [],
        nlc: [],
        nlw: []
        }
    },
    created(){
        this.ale = al[0];
        this.alc = al[1];
        this.alw = al[2];
        this.nle = nl[0];
        this.nlc = nl[1];
        this.nlw = nl[2];
    }
}
</script>
<style scoped>

</style>