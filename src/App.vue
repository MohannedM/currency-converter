<template>
  <div id="app">
    <v-app>

      <Header />
      <v-container style="min-height: 86vh">
        <Home :items="items" :currencies="currencies" />

      </v-container>
        <Footer class="mb-0" />
    </v-app>
  </div>
</template>

<script>
import Home from './views/Home.vue'
import Header from './views/shared/Header.vue'
import Footer from './views/shared/Footer.vue'
export default {
  components:{
    Home,
    Header,
    Footer
  },
  created(){
    this.$store.dispatch('import_items');
  },
  computed:{
    currencies(){
      return this.$store.getters.get_currencies;
    },
    items(){
       return this.$store.getters.get_items;
    }
  }
}
</script>
<style scoped>

</style>

