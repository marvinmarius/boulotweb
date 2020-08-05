<template>
  <v-layout row  justify="center">
    <v-dialog v-model="dialog"  persistent max-width="600px">
    
             <v-card dark class="justify-center ">
 
          <v-card-title>
              <marquee direction="left" behavior="scroll" scrollamount="10"><h1 class="red--text">{{$t('COMMING SOON !!!')}} </h1></marquee>
           
     
          </v-card-title>
          <v-card-text>

          </v-card-text>
        <v-card-actions>
          
          <v-btn right color="red" @click="$router.push('/')">OK</v-btn>
        </v-card-actions>
      
             </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>

  export default {
         

    name: 'Modal',
    data: () => ({
      dialog: true,
    }),
  }
</script>