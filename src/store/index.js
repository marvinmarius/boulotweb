import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../service/api'




Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   categories:[],
   allservices:[],
   category:{},
   allsubServices:[],
   
   formData:{},
   customer: {},
   order:{},
  
   info:{},
   
 
 list:[],
 quiz:{},
  Job:{},
  allcustomers:[],
  snackbar:{ 
    
    showing:  false,
    text:  'requirements succesfully submited',
   
  },
  modal:{
    dialog: false,
  },
  
  
  item:{},
  clients:{},
  listOfQuestionAnswer:[],
  object:{ 
    
   
    customer: '',
    info: '',
    sub_service:'' ,
    service: '',
    
    },
    arrayOfQuiz:[],
    jobRequest:[],
    
  },
  mutations: {

    SET_ALL_CUSTOMER(state,allcustomers){
      state.allcustomers = allcustomers
    },
   
    SET_X_DATA (state,listOfQuestionAnswer){
     /** let data =  JSON.parse(localStorage.getItem('myQuiz'))

           
           let m = []
           m.push(data)
           localStorage.setItem('answers2', JSON.stringify(m))
           let e =  JSON.parse(localStorage.getItem('answers2'))

      for (var i = 0 ; i<e.length; i++){
        if(e[i].question == data.question)
        {
        
          e.splice(i, 1 );
        }
      } 
      let ansers1 = e[i].answers
      let answers2 = data.answers
      ansers1.push(answers2)
            localStorage.setItem('item2' , JSON.stringify(ansers1))
       
      
        
        
  
        
  item =  JSON.parse(localStorage.getItem('item'))
    
 */
//state.list.push(item)
//localStorage.setItem('question', JSON.stringify(state.list))
          state.item = listOfQuestionAnswer
},

//SET_LIST_DATA(list){
  //list =  JSON.parse(localStorage.getItem('question'))

  //this.state.list = list
//},
    //SET_SELECTED_SUBSERVICE(state,payload){
      
      //let jobRequest = state.jobRequest.concat(subserviceId);
     
    //if(localStorage.getItem('jobRequest')){
     // this.replaceState(jobRequest, payload)
    //}
        //let jobRequest = state.jobRequest.concat(payload);
       
        //let jobRequest = state.jobRequest.concat(payload);
     // state.jobRequest = jobRequest;
        //window.localStorage.jobRequest = JSON.stringify(jobRequest) 
        SET_DIALOG (state,modal){
         
          state.modal = modal
        },
        SET_SNACBAR (state,snackbar){
        state.snackbar = snackbar
      },
    
  SET_ORDER_DATA(state,order){
          //for(let key in customer) {
            //state.customer[key] = customer[key];
  state.order = order
      },

    SET_FORM_DATA(state,clients){
    state.clients = clients
  },
 /* SET_QUIZ_DATA(state,quiz){
    state.quiz = quiz
  },

  NEW_QUIZ(state,quizzzz){
    state.quizzzz = quizzzz
  },
    
  ADD_ARRAY_QUIZZES(state,quizzes){
    state.quizzes =quizzes;
  },

  SET_ARRAY_QUIZZES(state,arrayOfQuiz){
      state.arrayOfQuiz =arrayOfQuiz;
   },*/
   ADD_NEW_CUSTOMER(state, customer){
    state.customer = customer;
   },
   ADD_NEW_JOB_REQUEST(state, jobRequest){
    state.jobRequest = jobRequest;
   },
 
  
         SET_JOB_DATA(state, job){

         state.job = job
      },

   ADD_NEW_ORDER(state, info){
    state.info = info;
   },

   SET_CATEGORIES(state, categories){
     state.categories = categories;
    },
  
      SET_SELECTED_ITEM(state, selectedItem){
        state.selectedItem = selectedItem;
       },

     SET_ALL_SERVICES(state, allservices){
      state.allservices = allservices;
     },
  
     SET_ONE_CATEGORY(state, category){
       state.category = category
     },
     SET_ONE_SERVICE(state, oneService){
      state.oneService = oneService
    },
    SET_SERVICES(state, myServices){
      state.myServices = myServices
    },
    SET_ALL_SUB_SERVICES(state, allsubServices){
      state.allsubServices = allsubServices
    },
   
  },
  actions: {

    async loadAllServices({commit}){
      let response = await Api.get('/services');
      let allservices = response.data
      let service = allservices.find(i=>i.id)
     
      commit('SET_ONE_SERVICE', service)
   
      commit('SET_ALL_SERVICES', allservices)  
      //let jobRequest = JSON.parse(window.localStorage.jobRequest)
      //commit('SET_JOB_REQUEST',jobRequest)
  
  },

  async loadAllCustomers({commit}){
    let response = await Api.get('/customers');
    let allcustomers = response.data
    localStorage.setItem('allcustomers' , JSON.stringify(allcustomers))
    commit('SET_ALL_CUSTOMER', allcustomers)  
    //let jobRequest = JSON.parse(window.localStorage.jobRequest)
    //commit('SET_JOB_REQUEST',jobRequest)

},
  
  async loadAllSubServices({commit}){
    let response = await Api.get('/sub-services');
    let allsubservices = response.data
  
    commit('SET_ALL_SUB_SERVICES', allsubservices )
   
  },
  selected({commit},payload){
    commit('SET_SELECTED_SUBSERVICE',payload);
  },
  
  
  async preserveLocal({commit,dispatch}) {
      
    let clients =   JSON.parse(localStorage.getItem('clients'));
    commit('SET_FORM_DATA', clients);
  
  
    let order =  JSON.parse(localStorage.getItem('order'));
    commit('SET_ORDER_DATA', order);
    dispatch('createCustomer')
},

 

    async loadCategories({commit}){
      let response = await Api.get('/categories');
      let categories = response.data;
      let category = categories.find(i=>i.id);
      let myServices = category.services;
      
      let oneService = myServices.find(i=>i.id);
    commit('SET_ONE_CATEGORY', category)
    commit('SET_SERVICES', myServices)
    commit('SET_ONE_SERVICE', oneService)
    commit('SET_CATEGORIES', categories)
  },



  /*async createQuiz({commit, dispatch}){
    //if(localStorage.getItem('order') !== null  ) {
    //let i = JSON.parse(localStorage.getItem('order'))
    try{

        let r = JSON.parse(localStorage.getItem('arr'))
        
        
         
          let datas = await Promise.all(r.map(async item => {
            let response = await Api.post('/quizzes/new/',item)
            return response.data.id
          })) 
        
        localStorage.setItem('quizzes', JSON.stringify(datas))
        //let tr = JSON.parse(localStorage.getItem('infosssss'))
               // let list = []
               // list.push(tr)

                   //localStorage.setItem('quizzes', JSON.stringify(list))

       
       
        let quizzes = JSON.parse(localStorage.getItem('quizzes'))
  commit('ADD_ARRAY_QUIZZES', quizzes)
  dispatch('loadJobArray')
  dispatch('createJobRequest')
 
}catch(e){
  console.error(e);
  
}
      },
 

*/
   
   

  async createOrderInfos({commit, dispatch}){
    try{

      let xx = JSON.parse(localStorage.getItem('order'))
      
    let response = await Api.post('/orders-info/new/',xx)
    let info = response.data
    localStorage.setItem('info', JSON.stringify(info.id))
    commit('ADD_NEW_ORDER', info)
   dispatch ('loadJobArray')
    
  
  }catch(e){
    console.error(e);
    
  }
},

  async createCustomer({commit, dispatch}){
   
    // let allcustomers = this.state.allcustomers
     //let xy = this.state.clients
     let allcustomers = JSON.parse(localStorage.getItem('allcustomers'))
     let xy =  JSON.parse(localStorage.getItem('clients'))
     let datas = await Promise.all(allcustomers.map(async item => {
        if((item.email == xy.email) || (item.phone_number == xy.phone_number)) {
        let customer =  item
        localStorage.setItem('customer',JSON.stringify(item.id))
        localStorage.setItem('datas',JSON.stringify(datas))
        commit('ADD_NEW_CUSTOMER', customer)
        dispatch('createOrderInfos')
      }else{
      let response = await Api.post('/customers/new/', xy)
      let customer = response.data
      localStorage.setItem('customer', JSON.stringify(customer.id))
      commit('ADD_NEW_CUSTOMER', customer)
      dispatch('createOrderInfos')
     }
  }))
    
    
  },
 
    

    async loadJobArray({commit,dispatch})  {
      try{
        let service = JSON.parse(localStorage.getItem('service'));
         let sub_service = JSON.parse(localStorage.getItem('sub_service'));
         //let quizzes = JSON.parse(localStorage.getItem('quizzes'));
         let info = JSON.parse(localStorage.getItem('info'));
         let customer = JSON.parse(localStorage.getItem('customer'));
        
        
        this.state.object.info = info
        this.state.object.customer = customer
        this.state.object.sub_service = sub_service
        this.state.object.service = service
         //state.object.quizzes = quizzes
         
         localStorage.setItem('Job',  JSON.stringify(this.state.object))
         let Job = JSON.parse(localStorage.getItem('Job'));

      commit('SET_JOB_DATA',Job);
      dispatch('createJobRequest')
    }catch(e){
      console.error(e);
      
    }

  
      },
 
  async createJobRequest({commit,dispatch}){
  try{
   
      let j = JSON.parse(localStorage.getItem('Job'))

    let response = await Api.post('jobs-request/new/',j)
    let jobRequest = response.data

    localStorage.setItem('jobRequest', JSON.stringify(jobRequest))
   
      //this.snackbar.showing = true
       //this.dialog = true
    commit('ADD_NEW_JOB_REQUEST', jobRequest)
    dispatch('setDialog')
    dispatch('setSnackbar')
    
  }catch(e){
    console.error(e);
   
  }
},


setDialog({commit}, modal){
 
  if(localStorage.getItem('jobRequest') !== null  ) {
   
   return   this.state.modal.dialog = true
  }
   
    commit('SET_DIALOG',modal)
 
},


setSnackbar({commit}, snackbar){
 
  if(localStorage.getItem('jobRequest') !== null  ) {
    return this.state.snackbar.showing = true

  }
  // snackbar.showing = true
  // this.state.snackbar.text = 'there is an error'
  // this.state.snackbar.color = "red"

 
  commit('SET_SNACBAR',snackbar)
},
 

  
  
/*Localquiz: context => {
  
  let a = JSON.parse(localStorage.getItem('arr'))
  let i = JSON.parse(localStorage.getItem('myQuiz'))
  
  a.push(i)
  localStorage.setItem('listOfQuestionAnswer', JSON.stringify(a))
  let listOfQuestionAnswer = JSON.parse(localStorage.getItem('listOfQuestionAnswer'))
    context.commit('SET_X_DATA', listOfQuestionAnswer);
 

}

*/

},

  getters:{
 
    getServicesOfParticularCategory: state => id =>{
      return state.categories.find(cat => cat.slug == id)
    },

    getServices: state => id =>{
      return state.allservices.find(cat => cat.slug == id)
    },
   getParticularService: state =>id =>{
     return state.categories.find(cat => cat.id ==id)
   },
   getOneSubServices: state=>id=>{
  return state.allsubServices.find(i=>i.slug ==id)
   },
   getSubService: state=>id=>{
    return state.allsubServices.find(i=>i.name ==id)
     },

  getRelatedServices:  state=>id=>{
      return state.allservices.find(i=>i.id ==id).sub_services
       }

  },

})
