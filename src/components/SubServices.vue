<template>
      <v-container fluid > 

        <div class="custom-control custom-radio pa-6"  v-for="(item, index) in services.sub_services" :key="index">
         <router-link :to="{name: 'requirements',params:{id:item.name}}">
                    <v-btn rounded to="" color="teal accent-3" >{{item.name }}</v-btn>
        </router-link>
        </div>

 
   
  </v-container>
  
</template>
<script>

//import Questions from '../components/Questions'

export default {
  components:{
    //Questions,
  },
    name:'SubServices',
    props:{
      services: Object,
    },
  
    data: ()=>{
      return{
         id: this.$route.params.id,
          selectedItem: '',
          
      }
    },
  

}
</script>