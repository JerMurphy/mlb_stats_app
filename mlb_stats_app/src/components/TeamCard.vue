<template>
  <div>
    <v-card id="team" v-on:click="navigate(team.id)" height="75" width="300">
      <v-row>
        <v-col cols="lg-3">
          <v-img :src="this.imgsrc" contain class="logo"></v-img>
        </v-col>
        <v-col cols="lg-8">
          <v-card-text>{{team.name}}</v-card-text>
        </v-col>
      </v-row>
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
      height: 50px;
      width: 50px;
      margin: auto;
    }
</style>
