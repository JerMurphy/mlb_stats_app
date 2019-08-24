<template>
  <v-container>
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
  </v-container>
</template>

<script>
export default {
  name: "Header"
};
</script>
