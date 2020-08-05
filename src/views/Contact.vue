<template>
  <v-container fluid >

    <v-overlay  :opacity="14"
      :value="overlay">
      <v-progress-circular indeterminate size="64">loading...</v-progress-circular>
    </v-overlay>
   
      <div  class="flex  fill-height mt-n8  ml-n2" >
      <v-img  src="../assets/anytime-header.jpg"  >
    </v-img>
      </div>
      <v-divider></v-divider>
    <v-row class=" fill-height pt-6 mt-n6 justify-space-between "  >

    <v-col cols="12" sm="5" md="5">
          <v-card  class="fill-height pa-4"  dark>
   
      <v-row >
      <v-col>
          <div class="chat" v-html="$t('chat')">
        </div>
      </v-col>
    </v-row>

      <v-divider></v-divider> 
     <v-row class="mt-5 mb-5">
     
      <v-col class="mt-8 offset-4">
        <span>{{$t('whatsapp')}}</span>
      <v-img
   
          alt="whasapp Logo"
          @click="sendMessage"
          src="../assets/Whatsapp_logo_svg.png" 
          width="100"/>
      </v-col>
    </v-row>
    

    <v-divider></v-divider>

    <v-row class="mt-5 mb-5">
   
      <v-col class="mt-8 offset-4">
       <span> {{$t('mail')}}</span>
      <v-img
   
          alt="email Logo"
          @click="sendMail"
          src="../assets/mail.png" 
          width="100"/>
      </v-col>
    </v-row>
          </v-card>
    </v-col>
    
<v-col cols="12" sm="5" md="5">
         
     <v-card class="fill-height">
       <v-card-title class="justify-center" >OUR LOCATION</v-card-title>
     <iframe class="flex " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.6419389013713!2d9.741750914145667!3d4.093078847767482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610e0aeb0e27c7%3A0x81365289755f15c!2sInstitut%20Priv%C3%A9%20Polyvalent%20de%20Bonamoussadi!5e0!3m2!1sfr!2scm!4v1595902504204!5m2!1sfr!2scm" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
     </v-card>
   
</v-col>
    </v-row>
 

 
  </v-container>
</template>

<script>
//import emailjs from 'emailjs-com';

  export default {

    methods:{
        sendMail(){
          window.open("https://mail.google.com/mail/?view=cm&fs=1&to=boulotman237@gmail.com")
        },
        sendMessage(){
          window.open("https://api.whatsapp.com/send?phone=' +237 691582718 + '&text=%20 + I need more information")
        }
    },
   
    data: () => ({
    overlay: false,
    }),

    //mounted(){
     // this.overlay = true
   // }
    
    }
  

</script>
<style >
    .chat{
      
    font-size: 30px;

    font-weight: 40px;
    text-align: center
      
    }
</style>