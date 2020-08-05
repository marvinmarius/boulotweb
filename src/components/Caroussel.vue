<template>

<v-flex fill-height="true"  >
 

            <v-carousel hide-delimiters cycle   dark
     height="500"
     interval="4000"
   class="mt-n16"
     >

    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      
      :title="item.title"
     
      class="flex fill-height"
      
      
      
    >

<v-row class="justify-center">
  
         <v-col 
          class="fill-height  "
          align="center"
          justify="center"

          
        >
    
                      <div class="text-center justify-center mb-n9"> 
                        <h1 class="ligne "> {{ item.title }}</h1>
                      </div>
        
                      <div class="text-center justify-center">
                        <h1 class="ligne2"> <div><v-btn  class="red mb-n10" rounded :to="`/${$i18n.locale}/contact`">{{$t('Contact  US')}}</v-btn></div></h1>
                      </div> 
      
        </v-col>
</v-row> 
    </v-carousel-item>

      </v-carousel>

</v-flex>

 

</template>

<script>

  export default {
      name:'Caroussel',
      components:{
       
      },
      computed:{
items(){

return [

        
          {
            src: require('../assets/background-images-for-registration-page-12.jpg'),
            title: this.$t('items.titlet')
          },
         
           {
            src: require('../assets/construction 5.jpg'),
            title: this.$t('items.titles')
          },
           {
            src: require('../assets/1nordalta-stats-background-1024x576.jpg'),
            
          },
          
          
           {
            src: require('../assets/construction 4.jpg'),
            title: this.$t('items.titlea')
          },
            {
            src: require('../assets/kitchen-renovation.jpg'),
            title: this.$t('items.home1')
          },
          
            {
            src: require('../assets/flatmechanic-1_c.jpg'),
           
          },
             {
            src: require('../assets/service1.jpg'),
            title: this.$t('items.title')
          },
         
        
        ]
}
      },
    
    data () {
      return {
        
      }
    },
  }
</script>
<style >
.ligne{
  color:lemonchiffon;
        background-size: cover;
      
    float: left;
   padding-top: 160px;
    position: relative;
    width: 100%;
}
.ligne2{
      background-size: cover;
    float: left;
    padding-top: 10px;
    
    position: relative;
    width: 100%;
}
</style>
