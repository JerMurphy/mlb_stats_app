<template>
  <v-card  flat tile>
    <v-toolbar dense height="75" class="header">
    <v-toolbar-title>
      <img class="logo" :src="require('../assets/mlblogo.png')" contain height="75"/>
    </v-toolbar-title>
    <h2>My Stats App</h2>
    <div class="flex-grow-1" >
        
    </div>
    <v-toolbar-items>
        <!-- <v-select items=[] label="Teams" solo ></v-select> -->
    </v-toolbar-items>
    </v-toolbar>
</v-card>
  <!-- <v-container>
    <v-layout text-center wrap >
    <v-flex xs12>
        <v-img
          :src="require('../assets/mlblogo.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="">
          Welcome to my MLB Statictics Web App
        </h1>
      </v-flex>
    </v-layout>
  </v-container> -->
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.logo{
  margin-top: 10px
}
.header{
  background-color:white;
}
</style>
