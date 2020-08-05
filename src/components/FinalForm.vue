<template>
  <v-row justify="center">
    <v-dialog v-model="modal" id="modal" persistent transition="scale-transition" width="800px" >

      <v-card>
        <v-card-title class="justify-center green ">Please Fill the form below in order to complete the requirements 
          for <div><h3 class="text--red mr-4" >{{this.$route.params.id}}</h3></div>
           </v-card-title>
    
        <v-card-text>
         
            <v-form class="align-content-center"
    ref="form"
    @submit.prevent="onSubmit"
 

  >
 
    <v-row justify="space-between" xs12 lg6>
          <v-col cols="12" sm="6" md="5">
          <v-text-field
              v-model="customer.first_name"
             
             
              label="FirstName"
              required
            ></v-text-field>
            <div class="red--text pt-n5 mt-n5">{{errors.first_name}}</div>
          </v-col>
          <v-col cols="12" sm="6" md="5">
          <v-text-field
              v-model="customer.last_name"
          
             
              label="LastName"
              required
            ></v-text-field>
            <div class="red--text pt-n5 mt-n5">{{errors.last_name}}</div>
          </v-col>
    </v-row>

    <v-text-field
      v-model="customer.address"
      :counter="20"
      label="Personal Address"
      
    ></v-text-field>

     <v-row justify="space-between" xs12 lg6>
       <v-col cols="12" sm="6" md="5">
        <v-text-field
        v-model="customer.email"
        :rules="emailRules"
        label="E-mail"
        outlined
        
    ></v-text-field>
       </v-col>
        <v-col cols="12" sm="6" md="5">
            <v-text-field
              label="enter your phone number"
              outlined 
              counter="9"
              type="phone"            
             v-model="customer.phone_number"
            ></v-text-field>
            <div class="red--text pt-n6 mt-n6">{{errors.phone_number}}</div>
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
             <v-btn class="mr-4" rounded color="success"  @click="onSubmit">BOOK NOW</v-btn>
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
      valid: true,
      success: false,
      errors: {},
      message: null,
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
        v => !!v || 'Name is required',
    
      ],

   
      
        modal: false,
  
    }),
    methods:{
      onSubmit(){
 const validateFirstName = first_name => {
  if (!first_name.length) {
    return { valid: false, error: "This field is required" };
  }
  return { valid: true, error: '' };
};

 const validateLastName = last_name => {
  if (!last_name.length) {
    return { valid: false, error: "This field is required" };
  }
  return { valid: true, error: '' };
};

const validatePhone = phone_number => {
  if (!phone_number.length) {
    return { valid: false, error: 'This field is required.' };
  }

  
  return { valid: true, error: '' };
};

      this.errors = {}

      const validFirstName = validateFirstName(this.customer.first_name);
      this.errors.first_name = validFirstName.error;
      if (this.valid) {
        this.valid = validFirstName.valid
      }

        const validLastName = validateLastName(this.customer.last_name);
      this.errors.last_name = validLastName.error;
      if (this.valid) {
        this.valid = validLastName.valid
      }

      const validPhone = validatePhone(this.customer.phone_number);
      this.errors.phone_number = validPhone.error;
      if (this.valid) {
        this.valid = validPhone.valid
      }
   

  localStorage.setItem('clients', JSON.stringify(this.customer));
  localStorage.setItem('order',JSON.stringify(this.order));
  this.$store.dispatch('preserveLocal');
  localStorage.setItem('myQuiz' , JSON.stringify(this.quiz))
    this.$store.dispatch('Localquiz');
   this.$store.dispatch('createQuiz')

  this.$store.dispatch('createOrderInfos')
   this.$store.dispatch('createCustomer')

 
/** if(localStorage.getItem('customer') !== null  ) {
 let service = JSON.parse(localStorage.getItem('service'));
    let sub_service = JSON.parse(localStorage.getItem('sub_service'));
    let quizzes = JSON.parse(localStorage.getItem('quizzes'));
    let info = JSON.parse(localStorage.getItem('info'));
    let customer = JSON.parse(localStorage.getItem('customer'))
    this.object.customer = customer
    this.object.info = info
    this.object.sub_service = sub_service
    this.object.service = service
    this.object.quizzes = quizzes
    let i = new Date().toJSON().slice(0,10).replace(/-/g,'/') 
    this.object.creation_date = i
    localStorage.setItem('Job',  JSON.stringify(this.object))
    
  } */
    
   // this.$store.dispatch('jobRequest')

    
      
      
 // this.$store.dispatch('jobRequest')
 

   this.modal = false
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
    }
  }
</script>