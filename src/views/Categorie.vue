<template>
<v-layout>
  <v-container>
  
      <v-row>
        <v-col cols="12">
          <div class="flex justify-center "
          >
         
         <h1 class="categoriess">{{$t('CATEGORIES OF SERVICES')}}</h1>
          </div>
        </v-col>
    </v-row>
  <v-spacer></v-spacer>
  <v-divider ></v-divider>
   
      
        <v-row class="flex">
            
    <v-col  cols="12" sm="4" md="4" 
    v-for="categorie in categories"
    :key="categorie.id">

  
   <v-skeleton-loader
          :loading="loading"
          :transition="transition"
          height="150"
          type="card,list-item-two-line"
        >
      <v-card   outlined shaped class="ma-3">
  
    <v-img
      class="align-center"
      :src="categorie.image"
      height="150px"
    ></v-img>
              <v-card-text class="text-center">
                <p><strong>{{categorie.name}}</strong></p>
                
                  <p class="hint red--text">{{categorie.hint}}</p>
              </v-card-text>
              <v-card-actions>
                <div class="text-center mx-auto  bg-black">
    
                    <v-btn :to="{name: 'categories', params:{id:categorie.slug}}" rounded color="teal accent-3" >{{$t('EXPLORE')}}</v-btn>
                   
                </div>
              </v-card-actions>
          </v-card>
           </v-skeleton-loader>
   
            </v-col>
          
          </v-row>
     

    
 
  
 
</v-container>
</v-layout>

</template>

<script>

import {mapState} from 'vuex'

  export default {
     data: () => ({
   
    loading:true,
     transition: 'scale-transition',
    }),
    inject: ['theme'],
     mounted(){
   
      this.loading = false
   },
    name:'Categories',

computed: {
  ...mapState(['categories'])
 
},



    
  };
</script>
<style >
.categoriess{
  text-align: center;
  text-justify: auto;
  
   
    font-weight: 600;
    font-size: 40px
}
</style>
