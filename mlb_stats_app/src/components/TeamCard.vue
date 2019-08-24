<template>
  <div>
    <v-card id="team" v-on:click="navigate(team.id)" height="200px" width="200px">
      <v-img :src="this.imgsrc" contain class="logo"></v-img>
      <v-card-text>{{team.name}}</v-card-text>
      <v-card-actions v-if="actions">
        <v-btn outlined>View Stats</v-btn>
      </v-card-actions>
    </v-card>
  </div>

</template>

<script>

export default {
  name: 'TeamCard',
  props: {
    team: Object
  },
  data() {
    return {
      imgsrc: String
    }
  },
  created(){
    this.imgsrc = "https://www.mlbstatic.com/team-logos/"+this.team.id+".svg";
  },
  methods: {
      navigate(id){
          this.$router.push({ path: `/team/${id}` })
      }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #team:hover {
        border: 1px solid black;
    }
    .logo {
      height: 150px;
      width: 150px;
      margin: auto;
    }
</style>
