<template>
  <v-container fluid>

    <article class=" flex-grow" >
            <header>
              <div class="progress">
                <div class="progress-step"
                :class="{'active':index  === activeStep}"
                v-for="(step, index) in subservices"
                :key="'step'+index"
                :id="subservices[activeStep].id">
                  {{ index + 1 }}
                </div>
              </div>
              </header>
            <section :class="animation">
      
        <v-card style=" width: calc(100% - 20px);" flat class=" fill-height">
          <v-card-title > <h2 :v-text="quiz.question=subservices[activeStep].id" > {{ subservices[activeStep].text }}</h2></v-card-title>
          <v-spacer></v-spacer>
           <span id="error" ></span>
          <v-card-text  
            v-for="(choice, index) in subservices[activeStep].choices"
                :key="'choice'+index" >
               
                <input type="checkbox"  :value="choice.id" :id="choice.id" v-model="quiz.answers" 
                 >
                <label :for="choice.text" class="ma-4 pa-4" >{{ choice.text }}</label>
            </v-card-text>
                <v-spacer></v-spacer>
          <v-card-actions class=" mt-4 pt-6 flex-end">
            
                <v-btn v-if="activeStep !=0 " @click="checkFields2">previous</v-btn>
                <v-btn class="success" v-if="activeStep +1 < subservices.length +1" @click="checkFields3">next</v-btn>
                
          </v-card-actions>
        </v-card>

        </section>
    </article>
  
  </v-container>
</template>

<script>


//mport Modal from '../components/Modal'
import {mapGetters} from 'vuex'
  export default {
    name: 'Stepbystep2',
    components:{
     //Modal,
    },

    mounted(){

localStorage.setItem('sub_service',JSON.stringify(this.subservice.id))



  //let rr = JSON.parse(localStorage.getItem('list')) || [];
      // let qui = JSON.parse(localStorage.getItem('myQuiz'))
    
      // localStorage.setItem('marius', JSON.stringify(rr.push(qui)))
     // let tr = JSON.parse( localStorage.getItem('marius'))
     // console.log(tr)
   

    },

  
    computed: {
     

     
    
     //list: {
         // get: function() {
           
            //let data =  localStorage.getItem(JSON.parse('myQuiz'))
           
         //set: function() {
           // let list = [];
           // list.push(this.quiz);
            //localStorage.setItem('list' , JSON.stringify(this.list))

      //}
        //},
        //openStorage () {
      //return JSON.parse(localStorage.getItem('formData'))
   // },
    
     // localStorage.setItem('formData', JSON.stringify(formData)),
    
 
    
    ...mapGetters(['getOneSubServices','getSubService']),
     
  subservices(){
  return this.getOneSubServices(this.$route.params.id)
   },

  subservice(){
    return this.getSubService(this.$route.params.id)
  },
  

 
    },

    
    data: () => {
      
      return {
      
        quiz:{
          question: "",
          answers: [],   
        },

        list:[],

//1 set the form data
        
       
     
 
        
        activeStep: 0,
        animation: 'animate-in',
        
      }
    },
  beforeDestroy() {
        

  
        //this.$store.dispatch('createJobRequest')
  },    
  
    
    methods: {
//2 the method 





      nextStep() {
        this.animation = 'animate-out';
        setTimeout(() => {
          this.animation = 'animate-in';
          this.activeStep += 1;
        }, 550);
      },
        previousStep() {
           

        this.animation = 'animate-out';
        setTimeout(() => {
          this.animation = 'animate-out';
          this.activeStep -= 1;
        }, 550);
      },
   
      checkFields() {
          this.nextStep();
        },
        checkFields2()
        {
       
          
          this.previousStep();
         
          
          
             
        },

        checkFields3(){
        let valid = true;
       
        let error = document.getElementById("error")
        this.subservices[this.activeStep].choices.forEach(subservices => {
          if(this.quiz.answers.length == 0) {
            
             
            valid = false;
            subservices.valid = false;
          }
          else {
            subservices.valid = true;
      
          }
        });
        if(valid) {
          
          this.nextStep();
         
             //localStorage.setItem('myQuiz' , JSON.stringify(this.quiz))
           let quiz = JSON.parse(localStorage.getItem('myQuiz'))
         
           
         // liste.pop()
          //localStorage.setItem('liste', JSON.stringify(liste))
          //for(let i =0; i<=subservices.length ; i++){
           //   list.push(quiz)
         // }
       // let o =  Object.entries(quiz)
          let list = this.list
     
  
     
      for (var i = 0 ; i<this.list.length; i++){

    if(list[i].question == quiz.question)
    {
    
      list.splice(i, 1 );
    }
      } 
    list.push(quiz)
    localStorage.setItem('arr' , JSON.stringify(list))
    
   
   
  
   
    

        
          //localStorage.setItem('list', JSON.stringify(arr))
           //JSON.parse(localStorage.getItem('list'))

          
           
           
                 
            
          
         
          
       
          
          
           //JSON.parse(localStorage.getItem('myQuiz'))
         //this.$store.dispatch('Localquiz');
       // this.$store.dispatch('createQuiz')
    
        //this.modal = true
      if(this.activeStep === this.subservices.length -1){
        //this.$store.dispatch('Localquiz');
        this.$router.push({name:'final', params: {id: this.subservice.name }})
         }
          this.quiz.answers.length = 0  ;
            error.textContent = "";
             //this.$store.dispatch('Localquiz');
            
          
        }
        else {
          this.animation = 'animate-wrong';
            error.textContent = "please select at least one item !"; 
            error.style.color = "red"
          setTimeout(() => {
            this.animation = '';
          }, 400);
          
        }
       
        
        }
        
    }

         
          
    }
    
</script>

<style lang="scss" scoped>
   @import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');
  @mixin flexbox() {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container {
    @include flexbox();
    width: 100%;
    min-height: 100vh;
    font-family: 'Noto Sans', sans-serif;
    background: radial-gradient(#DF5C2E, #A43227);
  }
  article {
    display: flex;
    margin: 10px;
    width: calc(100% - 20px);
    max-width: 720px;
    min-height: 480px;
    perspective: 1000px;
    header {
      @include flexbox();
      width: 60px;
      height: 480px;
      background-color: #fff;
      border-right: 2px dotted #DF5C2E;
      box-shadow: 0 15px 30px rgba(0,0,0,.2),
                  0 10px 10px rgba(0,0,0,.2);
    }
    .progress-step {
      @include flexbox();
      position: relative;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-bottom: 20px;
      color: #fff;
      background-color: #DF5C2E;
      font-weight: bold;
      &.active {
        background-color: blue;
        ~ .progress-step {
          color: #555;
          background-color: #ccc;
        }
        ~ .progress-step::before {
          background-color: #ccc;
        }
      }
      &:before {
        content: '';
        position: absolute;
        top: -20px;
        width: 2px;
        height: 20px;
        background-color: #DF5C2E;
        z-index: 10;
      }
      &:first-child::before {
        display: none;
      }
    }
    section {
      @include flexbox();
      flex-direction: row;
      width: 100%;
      background-color: #fff;
      box-shadow: 0 15px 30px rgba(0,0,0,.2),
                  0 10px 10px rgba(0,0,0,.2);
      h2 {
        font-size: 1.4rem;
        color: #DF5C2E;
        margin: 0;
        padding: 20px;
        
        
      }
      
      .input-container {
        position: relative;
        padding: 30px 20px 20px 20px;
        width: calc(100% - 40px);
        max-width: 900px;
        input {
          position: relative;
          width: 100%;
          font-family: 'Noto Sans', sans-serif;
          font-size: 1.35rem;
          outline: none;
          background: transparent;
          box-shadow: none;
          border: none;
          border-bottom: 2px dashed #DF5C2E;
          &:valid + .input-label {
            top: 10px;
            left: 20px;
            font-size: .7rem;
            font-weight: normal;
            color: #999;
          }
          &.wrong-input + .input-label {
            color: #B92938;
          }
        }
      }
      .input-label {
        position: absolute;
        top: 32px;
        left: 20px;
        font-size: 1.35rem;
        pointer-events: none;
        transition: .2s ease-in-out;
      }
      .actions {
        margin: 0;
        button {
          font-family: 'Noto Sans', sans-serif;
          outline: none;
          border: none;
          color: #fff;
          background-color: #DF5C2E;
          font-size: 1.35rem;
          padding: 5px 20px;
          margin: 0;
          text-transform: uppercase;
          border-radius: 3px;
          cursor: pointer;
        }
      }
    }
  }
  .animate-in {
    transform-origin: left;
    animation: in .6s ease-in-out;
  }
  .animate-out {
    transform-origin: bottom left;
    animation: out .6s ease-in-out;
  }
  .animate-wrong {
    animation: wrong .4s ease-in-out;
  }
  @keyframes in {
    0% {
      opacity: 0;
      transform: rotateY(90deg);
    }
    100% {
      opacity: 1;
      transform: rotateY(0deg);
    }
  }
  @keyframes out {
    0% { transform: translateY(0px) rotate(0deg); }
    60% { transform: rotate(10deg); }
    100% { transform: translateY(1000px); }
  }
  @keyframes wrong {
    0% { transform: translateX(0); }
    20% { transform: translateX(40px); }
    40% { transform: translateX(20px); }
    60% { transform: translateX(40px); }
    80% { transform: translateX(20px); }
    100% { transform: translateX(0); }
  }
</style>