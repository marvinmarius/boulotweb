<template>
  <v-row justify="center">
    <v-dialog v-model="modal"  persistent transition="scale-transition" width="800px" >

      <v-card>
        <v-card-title class="justify-center green ">Please Fill the form below in order to complete the requirements 
          for <div><h3 class="text--red mr-4" >{{this.$route.params.id}}</h3></div>
           </v-card-title>
    
        <v-card-text>
         
            <v-form class="align-content-center"
    ref="form"
    @submit.prevent="onSubmit"
    id="nativeForm"
    v-model="valid"

  >
 
    <v-row justify="space-between" xs12 lg6>
          <v-col cols="12" sm="6" md="5">
          <v-text-field
              v-model="customer.first_name"
             :counter="15"
             :rules="nameRules"
              label="FirstName"
              required
            ></v-text-field>
            
          </v-col>
          <v-col cols="12" sm="6" md="5">
          <v-text-field
              v-model="customer.last_name"
            :counter="15"
             :rules="nameRules"
              label="LastName"
              required
            ></v-text-field>
           
          </v-col>
    </v-row>

    <v-text-field
      v-model="customer.address"
      
      label="Personal Address"
      
    ></v-text-field>

     <v-row justify="space-between" xs12 lg6>
       <v-col cols="12" sm="6" md="5">
        <v-text-field
        v-model="customer.email"
        :rules="emailRules"
        label="E-mail"
        outlined
        required
    ></v-text-field>
       </v-col>
        <v-col cols="12" sm="6" md="5">
            <v-text-field
              label="enter your phone number"
              outlined 
              
               :rules="phoneRules"
              :counter="9"
              type="Phone"    
                  mask="phone" 
                  :value="customer.phone_number"  
             v-model="customer.phone_number"
             required
             
            ></v-text-field>
        
          </v-col>
          
     </v-row>
    
    
    <v-text-field
      v-model="order.address"
      
      label="Working Address"
      required
    ></v-text-field>
    <v-row justify="space-between" xs12 lg6>
     
    <v-col cols="12" sm="6" md="5">
        <v-menu
          v-model="fromDateMenu"
          :close-on-content-click="false"
          full-width
          max-width="290"
          :nudge-right="40"
            transition="scale-transition"
            offset-y 
            
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              :value="fromDateDisp"
              
              clearable
              label="Working Date"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="order.date"
            @input="fromDateMenu = false"
              :min="minDate"
          ></v-date-picker>
        </v-menu>
    </v-col>
    
    <v-col cols="12" sm="6" md="5">
        <v-menu
        ref="menu"
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="order.time"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="time"
            label="choose a time"
         
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="menu2"
          v-model="time"
          full-width
          @click:minute="$refs.menu.save(time)"
        ></v-time-picker>
      </v-menu>
    </v-col>
      </v-row>


    <v-select
      v-model="order.calling_period"
      :items="items"
     
      label="I Would you like to received call from"
    
    ></v-select>
      <v-textarea
        v-model="order.more_info"
        auto-grow
        box
      outlined
        :rules="textAreaRules"
        :counter="150"
        label="specify your requirements if Any"
        rows="2"
      ></v-textarea>
      
  </v-form>
        
        </v-card-text>
        <v-card-actions class="marron">
          <v-spacer></v-spacer>
         

    <v-btn
      color="error"
      class="mr-4"
  flat
      @click="$refs.form.reset()"
    >
      Reset
    </v-btn>
          <v-btn color="blue darken-1" @click="modal=false">quit</v-btn>
             <v-btn class="mr-4" rounded color="success" :disabled="!valid" @click="onSubmit">BOOK NOW</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import moment from 'moment'
  export default {
    name: 'FinalForm',



    
    data: () => ({
      dialog: false,
      valid: false,
     
      customer:{
          
          first_name: '',
          last_name: '',
          phone_number:'',
          address:'',
          email:'',
         
        },
        order:{
          address:'',
          date:'',
          time:'',
          calling_period:'',
          more_info:'',
        },

        isLoading: false,
        form: false,
        object:{ 
    state: '',
    creation_date:'',
    customer: {},
    info: {},
    sub_service:'' ,
    service: '',
    quizzes: [],
    },
 

      
        menu2: false,
        modal2: false,
     
      items: [
        'from 2AM to 7Pm',
        'everytime',
        'Before 3 AM',
        'After 4PM',
      ],
     fromDateMenu: false,
     fromDateVal: null,
     minDate: "2020-01-05",
     maxDate: "2019-08-30",
      
    
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ],
      
      nameRules: [
        v => !!v || 'this field  is required',
        v => v.length <=15 || 'must be less than 15 characters'
      ],

        phoneRules: [
        //v => v.length = 9 || "the phone number contains 9 characters",
        //v => v.length > 0 ||  'this field may not be empty',
        //v => Number.isInteger(Number(v)) || "the value must be an integer number",
           v => !!v || 'this field  is required',
        
        
        
      ],
        textAreaRules:[
        v => v.length <= 150 ||  " must be less than 150 characters",
       
        
      ],
   
      
        //modal: true,
  
    }),
    methods:{
      onSubmit(){
  localStorage.setItem('clients', JSON.stringify(this.customer));
  localStorage.setItem('order',JSON.stringify(this.order));
  this.$store.dispatch('preserveLocal');
  localStorage.setItem('myQuiz' , JSON.stringify(this.quiz))
    //this.$store.dispatch('Localquiz');
  // this.$store.dispatch('createQuiz')

  //this.$store.dispatch('createOrderInfos')
   this.$store.dispatch('createCustomer')

 
 


   // this.$store.dispatch('createJobRequest')
    
    

    
      
      
 // this.$store.dispatch('jobRequest')
 

   
   this.$router.push('/')
      }
    },
    computed:{
        fromDateDisp() {
      return this.order.date? moment(this.order.date).format('dddd,  Do MMMM YYYY') : '';
      // format/do something with date
    },
    tt(){
     
     let u =  new Date().toJSON().slice(0,10).replace(/-/g,'/')
return moment(u).format('dddd,  Do MMMM YYYY ')
     },
    },

    beforeDestroy:{}

  }
</script>