<template>
<v-layout>
  <v-container>
  <v-skeleton-loader v-if="loading == true" :loading="loading" transition="fade-transition" type="card">
</v-skeleton-loader>
      <v-row>
        <v-col cols="12">
          <div class="flex justify-center"
          >
         <h1 class="categories"> CATEGORIES</h1>
          </div>
        </v-col>
    </v-row>
  <v-spacer></v-spacer>
  
    <v-layout class="justify-space-between flex">
      <v-flex >
        <v-row dense >
            
    <v-col  cols="4" 
    v-for="categorie in categories"
    :key="categorie.id">
    <v-lazy :options="{ threshold: 0.5 }" min-height="130">
           <v-hover v-slot:default="{ }">
      <v-card outlined shaped class="mx-auto" hover>
  
  <template v-slot:placeholder>
    <v-sheet>
      <v-skeleton-loader />
    </v-sheet>
  </template>
    <v-img
    
      class="align-center"
      :src="categorie.image"
      height="190px"
    ></v-img>
              <v-card-text class="text-center">
                <p><strong>{{categorie.name}}</strong></p>
                
                  <p>{{categorie.description}}</p>
              </v-card-text>
              <v-card-actions>
                <div class="text-center mx-auto">
                  
                  <router-link :to="{name: 'categories', params:{id:categorie.id}}">
                    <v-btn rounded color="teal accent-3" ><p>{{$t("EXPLORE")}}</p></v-btn>
                    </router-link>
                </div>
              </v-card-actions>
          </v-card>
          </v-hover>
           </v-lazy>
            </v-col>
          
          </v-row>
      </v-flex>

    </v-layout>
 
  
  <v-overlay  :opacity="0" translate
      :value="overlay">
      <v-progress-circular slot-scope="" size="64" >loading...</v-progress-circular>
    </v-overlay>
</v-container>
</v-layout>

</template>

<script>


  export default {
    name:'Categories',
 
data: () => ({
    loading: true,
    loaded: true,
    overlay: true,
}),
mounted(){
      this.overlay = true
    },
computed: {
  categories(){
    return this.$store.state.categories
  }
},

methods:{


  },


    
  };
</script>
<style >
.categories{
  text-align: center;
  text-justify: auto;
  font-family: Lobster Two,cursive;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 40px
}
</style>
