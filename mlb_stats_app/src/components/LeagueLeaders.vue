<template>
    <v-tabs fixed-tabs>
            <v-tab ripple v-for="type in types" v-bind:key="type">
                 <v-icon>{{type}}</v-icon>
            </v-tab>
            <v-tab-item v-for="type in types" v-bind:key="type">
                <div v-if="type == 'hits'">
                    <h3>HITS LEADER</h3>
                </div>
                <div v-if="type == 'ops'">
                    <h3>OPS LEADER</h3>
                </div>
                <div v-if="type == 'homeruns'">
                    <h3>HomeRuns LEADER</h3>
                </div>
                <div v-if="type == 'avg'">
                    <h3>Batting Average LEADER</h3>
                </div>
            </v-tab-item>
        </v-tabs>
</template>

<script>
export default {
    name: 'LeagueLeaders',
    data() {
        return {
        types: ['hits','ops', 'homeruns', 'avg']
        }
    }
}
</script>
<style scoped>

</style>