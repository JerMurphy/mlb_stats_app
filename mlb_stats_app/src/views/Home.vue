<template>
  <v-app id="app">
    <v-content>
      <Header/>
      <LandingPage/>
    </v-content>
  </v-app>
</template>

<script>
import LandingPage from '../components/LandingPage';
import Header from '../components/Header';

export default {
  name: 'Home',
  components: {
    LandingPage,
    Header
  },
  data: () => ({
    //
  }),
};
</script>
<style >
  #app{
    text-align: center
  }
</style>
