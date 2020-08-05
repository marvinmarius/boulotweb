<template>
<v-container fluid>
   
                <v-app-bar app  dark 
               prominent
              clipped-left
               class="blue-grey darken-4"
               hide-on-scroll
               height="120"
               
              
             
                >
                
                <v-app-bar-nav-icon  @click.stop="sidebarMenu = !sidebarMenu" class="hidden-md-and-up">
               
                </v-app-bar-nav-icon>
               

        <router-link :to="`/${$i18n.locale}`" >
             <v-img
          alt="boulotman Logo"
          class="shrink mr-2"
          contain
          src="../assets/boulotmanlogo.png" 
          transition="scale-transition"
          width="100"
    />    
          </router-link>
          
    <v-spacer></v-spacer>

              <v-toolbar-items class="mt-9  hidden-sm-and-down">
                <nav class="items-center mb-1 mt-10 ">                                  
    <ul>
      <li class="mr-1 mb-2  lg:mb-0 ">
            <v-btn text exact :to="`/${$i18n.locale}`">{{$t('nav.Home')}}</v-btn>
      </li>
      <li class="mr-1 mb-2 lg:mb-0">
      <v-btn text exact :to="`/${$i18n.locale}/services`" >{{$t('nav.SERVICES')}}</v-btn>
      </li>
      <li class="mr-1 mb-2 lg:mb-0">
      <v-btn text exact :to="`/${$i18n.locale}/about`">{{$t('nav.ABOUT US')}}</v-btn>
      </li>
     
       <li class="mr-1 mb-2 lg:mb-0">
      <v-btn text exact :to="`/${$i18n.locale}/rrr`">{{$t('nav.BLOG')}}</v-btn>
      </li>
       <li class="mr-1 mb-2 lg:mb-0">
      <v-btn text exact :to="`/${$i18n.locale}/step`">{{$t('nav.FAQ')}}</v-btn>
      </li>
       <li class="mr-1 mb-2 lg:mb-0">
      <LanguageSwitcher/>
      </li>
   
    </ul>
            </nav>

              </v-toolbar-items>

  <v-spacer ></v-spacer>
   
      

      <v-btn class="buttone text-capitalize mt-16 pa-4 hidden-sm-and-down"  :to="`/${$i18n.locale}/services`" v-html="$t('technician')"></v-btn>
      <v-btn rounded @click="toggleTheme" color="primary" class=" text-lowercase ">{{buttonText}}</v-btn>
         <template v-slot:extension>
           <v-tabs align-with-title>
             
          <v-btn rounded class="ml-4 call red"><v-icon color="yellow" size="24px" left>mdi-phone</v-icon><a class="call" href="tel: +237698884618">Call Us</a></v-btn>
           </v-tabs>
         </template>

     </v-app-bar>
<v-card>
  <v-navigation-drawer 
          v-model="sidebarMenu" 
       
         fixed
         clipped
         
         
        
          
        
         
          class=" flex fill-height brown hide"

          >
            

               <v-list >
                    <v-list-item class="items">
                    <v-list-item-icon>
                       <v-icon size="24px" left>mdi-home-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title >
                        <router-link class="item" :to="`/${$i18n.locale}`">{{$t('nav.Home')}}</router-link>
                    </v-list-item-title> 
                </v-list-item>

                <v-list-item class="items">
                    <v-list-item-icon>
                        <v-icon >mdi-toolbox-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title >
                        <router-link class="item" :to="`/${$i18n.locale}/services`" >{{$t('nav.SERVICES')}}</router-link>
                    </v-list-item-title>                
                </v-list-item>

                  <v-list-item class="items">
                    <v-list-item-icon>
                        <v-icon >mdi-shield-account</v-icon>
                    </v-list-item-icon>
                        <v-list-item-title>
                        <router-link  class="item" :to="`/${$i18n.locale}/about`">{{$t('nav.ABOUT US')}}</router-link>
                    </v-list-item-title> 
                </v-list-item>

                 

                  <v-list-item class="items">
                    <v-list-item-icon>
                        <v-icon >mdi-account</v-icon>
                    </v-list-item-icon>                
                    <v-list-item-title >
                        <router-link class="item" :to="`/${$i18n.locale}/rrr`">{{$t('nav.BLOG')}}</router-link>                       
                    </v-list-item-title>                   
                  </v-list-item>

                  <v-list-item class="items">
                    <v-list-item-icon>
                        <v-icon >mdi-frequently-asked-questions</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title >
                        <router-link class="item" :to="`/${$i18n.locale}/step`">{{$t('nav.FAQ')}}</router-link>    
                    </v-list-item-title>
                    
                </v-list-item>

                 <v-list-item class="items">
                    <v-list-item-icon>
                        <v-icon >mdi-web</v-icon>
                    </v-list-item-icon>
                        <v-list-item-title class="ml-n6"> 
                        <LanguageSwitcher />
                    </v-list-item-title>
                </v-list-item>
                  
               </v-list>
               
          
         
    </v-navigation-drawer>
</v-card>
    
</v-container>
  

</template>

<script>
import LanguageSwitcher from '../components/LanguageSwitcher'

export default {
    name: 'Navbar',
    components:
    {
      LanguageSwitcher
    },

      computed: {
  
    buttonText() {
        return !this.$vuetify.theme.dark ? this.$t('theme.Dark Mode'): this.$t('theme.Light Mode')
    },

     items() {
     return [
        { title: this.$t('nav.Home'), href:"/", icon:"mdi-home-outline" },
         { title: this.$t('nav.SERVICES'), href:"/services", icon:"mdi-toolbox-outline" },
        { title:this.$t('nav.ABOUT US'), href:"/about", icon:"mdi-shield-account" },
        { title:this.$t('nav.CATEGORIES'), href:"/Categories", icon:"mdi-palette-swatch" },
        { title:this.$t('nav.BLOG'), href:"/rrr", icon:"mdi-account" },
        { title:"FAQ", href:"/step", icon:"mdi-frequently-asked-questions" },
        { title:this.$t('Customers'), href:"/customers" },
      ]
     }
  },
  methods: {
    toggleTheme() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;      
    },
  },
data: () => ({
      sidebarMenu: false,
     clipped: false,
      
     
      
  })

}
</script>
<style scoped>

.buttone {
  min-width: 300px;
  min-height: 60px;
  font-size: 22px;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: #1c1cc4;
background: linear-gradient(90deg, rgba(129,230,217,1) 0%, rgb(185, 209, 79) 100%);
  border: none;
  border-radius: 200px;
  box-shadow: 12px 12px 24px rgba(79,209,197,.64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 15px;
  text-align: center;

 
}

.buttone:hover {background-color: hsl(120, 26%, 7%)}

.buttone:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.buttone::after {
  content: '';
  width: 30px; height: 30px;
  border-radius: 50%;
  border: 4px solid #00FFCB;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
 
  transform: translate(-50%, -50%);
  animation: ring 1.5s infinite;
}

.buttone:hover::after, .buttone:focus::after {
  animation: none;
  display: none;
}


.buttone:hover, .buttone:focus {
  color: #313133;
  transform: translateY(-6px);
}

.buttone:hover::before, .buttone:focus::before {
  opacity: 1;

}
@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}


.item:hover{
  color:blue;
}


.li{
  color: black
}
.item {
   text-decoration-style: none;
  text-decoration: none;
   color: black;
  font: bold;
}
.call{
   list-style: none;
    text-decoration: none;
    color: wheat;
    
}
.call:hover{
 
  background-color: brown;
  border-radius: 10px
   
    
}
ul{
    list-style: none;
  
   display: inline-block;


   font: bold;
 
  
   
 
 

  }
  nav ul li {
 position: relative;
    transition: .2s ease-in-out;

  }

li{
  display: inline;
     margin: 0;
   padding: 0;
  
}

ul li:focus{
  color:  blue;
 
  transform: translateY(-6px);
   
}
ul li:hover{
  color:  blue;
  background-color: brown;
  border-radius:10px;
  transform: translateY(-6px);
   
}
ul li:active{
  color: red;
}

</style>
    