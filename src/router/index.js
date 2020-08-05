import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Requirement from '../views/Requirement.vue'
import AllServices from '../views/AllServices.vue'
import StepByStep2 from '../views/StepByStep2.vue'
import Modal from '../views/Modal.vue'
import FinalForm from '../views/FinalForm.vue'
import Customers from '../views/Customers.vue'
import TermsConditions from '../views/TermsConditions.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import i18n from '../i18n'


Vue.use(VueRouter)

  const routes = [
    {
      path: '*',
      name: 'notfound',
      //redirect(){
       // return process.env.VUE_APP_I18N_LOCALE;
     // }
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
  
      component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue')

  },
   
    {
        path: '/',
        redirect: `/${i18n.locale}`
    },
   
    

    {

      
      path:'/:lang',
      component: {
        render (c) {
          return c('router-view')
        }
      },

      
      children:[
      {
        path: '/',
        name: 'Home',
        component: Home,
       
      },
      
      {
        path: 'services',
        name: 'services',
        component: AllServices,
       
      },
    
      {
        path: 'step',
        name: 'step',
        component: Modal,
        
       
      },
    
   
      {
        path: 'rrr',
        name: 'rrr',
        component: Modal,
        
       
      },
  
      
      {
        path: 'categories',
        name: 'categorie',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "categories" */ '../views/Categorie.vue')
      },
      
      {
        path: 'about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },

      {
        path: 'contact',
        name: 'autour',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
      },
     
      {
        path: 'requirements/:slug/:id',
        name: 'requirements',
        component: StepByStep2,
        params:true,
        children:[
         
        ]
       
      },
  
      {
        path: 'service/:id',
        name: 'service',
        component: Requirement,
        params:true,
       
      },
  
      {
        path: 'categories/:id',
        name: 'categories',
        component: Services,
        params: true,
        children:[
          
        ]
       
      },
  
  
      {
        path: 'final-step/:id',
        name: 'final',
        component: FinalForm,
        params: true
        
       
      },
      {
        path: 'customers',
        name: 'customers',
        component: Customers,
        
       
      },
      {
        path: 'terms-and-conditions',
        name: 'terms-and-conditions',
        component: TermsConditions,
      },
      {
        path: 'privacy-policy',
        name: 'privacy-policy',
        component: PrivacyPolicy,
        
       
      },
  
    
      
  ]

    }

  
]

const router = new VueRouter({
 mode: 'history',
 base: process.env.BASE_URL,
  routes
})
router.afterEach(to => {
  localStorage.setItem('key_route', JSON.stringify(to.name) );
})
router.beforeEach((to,from,next)=>{
  const lastRouteName = localStorage.getItem('key_route');

  const shouldRedirect = Boolean(JSON.stringify(to.name) === "home" && lastRouteName);
  if (shouldRedirect) next({name:lastRouteName})
  else next();
})
export default router
