<template>
<v-container >
  <v-overlay  :opacity="1"
      :value="overlay">
      <v-progress-circular indeterminate size="64">loading...</v-progress-circular>
    </v-overlay>
  
            
 <v-flex>
        <v-col cols="12">
          <div class="justify-center"
          >
         
         <h1 class="categoriess">  {{$t('Available Services')}}</h1>
          </div>
        </v-col>
    </v-flex>
   <v-spacer></v-spacer>
   <v-divider></v-divider>
       
  
   
         <v-row dense >
    <v-col cols="12" sm="4" md="3"  
    v-for="allservice in allservices"
    :key="allservice.id"
    >
  
   <v-skeleton-loader
          :loading="loading"
          :transition="transition"
          height="190"
          type="card,list-item-two-line"
        >
      <v-card outlined shaped class="ma-3">
  
  
    <v-img
      class="align-center"
      :src="allservice.image"
      height="190px"
    ></v-img>

              <v-card-text class="text-center">
                <p><strong>{{allservice.name}}</strong></p>
                
                  <p class="hint red--text">{{allservice.hint}}</p>
              </v-card-text>
              <v-card-actions>
                <div class="text-center mx-auto bg-black">
                  
             
                    <v-btn  :to="{name: 'service', params:{id:allservice.slug}}" rounded color="teal accent-3" v-html= "$t('bookk')" >
                    
                    </v-btn>
                    
                </div>
              </v-card-actions>
          </v-card>
   </v-skeleton-loader>

            </v-col>
          </v-row>
   
   
</v-container>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    mounted(){
      this.overlay = false
      this.loading = false
   },

     data: () => ({
    overlay: true,
    loading:true,
     transition: 'scale-transition',
    }),
       inject: ['theme'],
    name:'AllServices',

computed:{
        allservices(){
            return this.$store.state.allservices  
        },
        ...mapGetters(['getRelatedServices']),
       
    
  
      
}
  }
  
</script>
<style >


</style>