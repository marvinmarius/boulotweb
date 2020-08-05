<template>
    <v-container  >
          <v-row 
              
              class="flex   " 
              
           >
        
        
      <v-col  class="justify-center">
      
    
         <v-card-text class="display-1  text-center test3 ">
        <p v-html="$t('text')"> </p>
    </v-card-text>

          <v-row class="flex align-content-center space">
            <v-col  >
               
                <div class="text-center white--text">
                  
                   <v-btn rounded class="red" 
                   @click.native="scrollToTop"  :to="`/${$i18n.locale}/contact`" >{{$t('Contact US')}}
                   </v-btn>
                   
            
                </div>   
  
            </v-col>
      
          
        
        
        
          </v-row>
   

         
        </v-col>
          </v-row>
    </v-container>
  


</template>

<script>
export default {
   methods:{
     scrollToTop() {
                window.scrollTo(0,0);
           }
  },
    name:'Book',
}

</script>
<style>
.test3{
   font-family: cursive;
}
</style>