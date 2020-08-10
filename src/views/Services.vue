<template>
<v-container>


  <v-row>
        <v-col cols="12">
          <div class="flex justify-center"
          >
         
         <h1 class="categoriess"> services of {{category.name}} category</h1>
          </div>
        </v-col>
    </v-row>
  <v-spacer></v-spacer>
  <v-divider ></v-divider>
        <v-flex class="pt-4 mt-4">
         <v-row dense >
    <v-col cols="12" sm="4" md="3" 
    v-for="service in category.services"
    :key="service.id"  >

  
   <v-skeleton-loader
          :loading="loading"
          :transition="transition"
          height="150"
          type="card,list-item-two-line"
        >
      <v-card outlined shaped class="ma-3" >

    <v-img
      class="align-center"
      :src="service.image"
      height="150px"
      lazy-src
    ></v-img>

              <v-card-text class="text-center">
                <p ><strong>{{service.name}}</strong></p>
               
                
                <p class="  hint red--text">  {{service.hint}}</p>
              </v-card-text>
              <v-card-actions>
                 
                <div class="text-center mx-auto bg-black"> 
                    <v-btn :to="{name: 'service', params:{id:service.slug}}"  rounded color="teal accent-3" v-html= "$t('bookk')"></v-btn>
                </div>
              </v-card-actions>
          </v-card>
   </v-skeleton-loader>
 
            </v-col>
          </v-row>
    </v-flex>
 
   
</v-container>
</template>

<script>
import { mapGetters} from 'vuex'
  export default {
    name:'Services',

   
    inject: ['theme'],
     mounted(){
   
      this.loading = false
   },
  
    data(){
      return {
        loading:true,
     transition: 'scale-transition',
        id: this.$route.params.id,
      

      }
    },
   
    computed:{
      isSelected(){
        return false;
      },
       
       ...mapGetters(['getServicesOfParticularCategory','getServices']),
    
    category(){
      return this.getServicesOfParticularCategory(this.id)
},
    service(){
return this.getServicesOfParticularCategory(this.id).services
      },
    services(){
      return this.getServices(this.id)
    },
  
  }
  }
</script>
<style>
.categories{
  text-align: center;
  text-justify: auto;
  font-family: Lobster Two,cursive;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 40px
}
.hint{
  
  font-size: 15px; 
}

.ide{
 
  font-size: 18px;
}
</style>
