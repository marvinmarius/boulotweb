<template>
  <v-app >
  
    <NavBar/>

  <v-main >

       <v-slide-y-transition mode="out-in">
          <router-view></router-view>
       </v-slide-y-transition>

  </v-main>
<v-snackbar
      timeout="3000"
      top
      centered
      shaped
      color="success"
    
    
      v-model="this.$store.state.snackbar.showing"
     
    >
     {{snackbar.text}}
    </v-snackbar>
  <v-footer >
    <Footer> </Footer>
  </v-footer>
  </v-app>
</template>

<script>

 
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import {mapState} from 'vuex'



export default {
  
  name: 'App',

computed:{
  ...mapState(['snackbar'])
},
  
mounted(){
  this.$store.dispatch('loadAllCustomers')
 this.$store.dispatch('loadCategories'),
 this.$store.dispatch('loadAllServices')

 this.$store.dispatch('loadAllSubServices')
  this.$store.dispatch('sendNotification')

//localStorage.clear()
 //this.$store.dispatch('createCustomer')
//this.$store.dispatch('createOrderInfos')
 // this.$store.dispatch('createJobRequest')

 

  },



  components: {
   
    Footer,
    NavBar
 
  },

  data: () => ({
    //
  }),
};
</script>
<style>

</style>
