<template>

   <v-container fluid class="blue-grey darken-4   justify-space-between " >
    
 <!-- Footer -->
<footer class="page-footer font-small mdb-color ">

  <!-- Footer Links -->
  <div class="container text-center text-md-left">

    <!-- Footer links -->
    <div class="row text-center text-md-left ">

      <!-- Grid column -->
      <div class="col-md-3 col-lg-3 col-xl-3 mx-auto ">
   
        
        
         <router-link :to="`/${$i18n.locale}`" @click.native="scrollToTop">
            <v-img
            
          alt="boulotman Logo"
class="col-md-3 col-lg-2 col-xl-2 mx-auto "
          src="../assets/boulotmanlogo.png" 
          transition="scale-transition"
          width="200"
    />
          </router-link>
          
         <p class="white--text">{{$t('items.titlet')}}</p>
     </div>
      <!-- Grid column -->

      <hr class="w-100 clearfix d-md-none ">

      <!-- Grid column -->
      <div class="col-md-4 col-lg-2 col-xl-2 col-sm-12 mx-auto mt-3 flex">
        <h3 class="text-uppercase mb-8 yo">{{$t('Useful Links')}}</h3>
        <p class="v-list-item--link">
              <v-icon color="yellow" size="16px" left>mdi-book-open-page-variant</v-icon>
              <router-link  @click.native="scrollToTop" :to="`/${$i18n.locale}/about`">
              {{$t('About Us')}}
              </router-link>
              </p>
          <p class="v-list-item--link">
            <v-icon color="yellow" size="16px" left>mdi-home-circle</v-icon>
            <router-link class="text--white" @click.native="scrollToTop" :to="`/${$i18n.locale}`">{{$t('nav.Home')}}
            </router-link>
          </p>
          <p class="v-list-item--link">
            <v-icon color="yellow" size="16px" left>mdi-shield-lock-outline</v-icon>
            <router-link class="text--white" @click.native="scrollToTop" :to="`/${$i18n.locale}/privacy-policy`" >
            {{$t('Privacy Policy')}}</router-link>
            </p>
           
           <p class="v-list-item--link">
             <v-icon color="yellow" size="16px" left>mdi-book-open</v-icon>
             <router-link class="text--white" @click.native="scrollToTop" :to="`/${$i18n.locale}/terms-and-conditions`" >
            {{$t('Terms & Conditions')}}
             </router-link>
            </p>  
            <p class="v-list-item--link">
             <v-icon color="yellow" size="16px" left>mdi-phone</v-icon>
             <router-link class="text--white" @click.native="scrollToTop" :to="`/${$i18n.locale}/contact`">
            {{$t('Contact US')}}
             </router-link>
            </p> 
            
      </div>
      <!-- Grid column -->

      

      <!-- Grid column -->
      <hr class="w-100 clearfix d-md-none">

      <!-- Grid column -->
      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h3 class="text-uppercase mb-8 font-weight-bold yo">{{ $t('Our Contacts')}}</h3>
        <p class="v-list-item--link font-smaller"><v-icon color="yellow" size="16px" left>mdi-email</v-icon><a href="https://mail.google.com/mail/?view=cm&fs=1&to=boulotman237@gmail.com">boulotman237@gmail.com</a></p>
         <p class="v-list-item--link font-smaller"><v-icon color="yellow" size="16px" left>mdi-phone</v-icon><a href="tel: +237698884618">(+237)698884618</a></p>
          <p class="v-list-item--link "><v-icon color="yellow"  size="16px" left>mdi-phone-classic</v-icon><span class="white--text" >fix: +237 233-478-795</span></p>
      </div>
      <!-- Grid column -->

    </div>
    <!-- Footer links -->

    <hr>

    <!-- Grid row -->
    <div class="row d-flex align-items-center">

      <!-- Grid column -->
      <div class="col-md-7 col-lg-8 mx-auto">

        <!--Copyright-->
        <p class="text-center text-md-left"><p class="text-center text-md-left"><strong>{{ new Date().getFullYear() }} — </strong>
         <strong>{{ $t('All Rights Reserved')}} </strong>
         
   
         
        </p>

      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-5 col-lg-4 ml-lg-0 mb-n4">

        <!-- Social buttons -->
        <div class="text-center text-md-right">
          <ul class="list-unstyled list-inline social-icons">
            <li class="list-inline-item">
            
               
               <a href="https://www.facebook.com/boulotman"><v-icon class="face"  >mdi-facebook</v-icon></a>
               
              
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-sm ">
                <v-icon class="twit" >mdi-twitter</v-icon>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-sm rgba-white-slight mx-1">
               <v-icon class="insta">mdi-instagram</v-icon>
              </a>
            </li>
           
          </ul>
        </div>

      </div>
      <!-- Grid column -->

    </div>
    <!-- Grid row -->

  </div>
  <!-- Footer Links -->

</footer>
<!-- Footer -->
  </v-container>

</template>
<script>
export default {
  methods:{
     scrollToTop() {
                window.scrollTo(0,0);
           }
  }
}
</script>

<style scoped>
.v-list-item--link a{
 text-decoration: none;
  color:white;
  
}
.grp p {
   
 color:wheat;
}

.icon{
  
  color: #33353d
}

.v-list-item--link a:hover{

  color:yellow;
  
}


.yo{
    color:black
}
.xxx{
  color:wheat;
  
    font-weight: 300;
    font-size: 30px
}

.xxxx{
 
  color:wheat;
    font-weight: 300;
    font-size: 20px
}
.social-icons
{
  padding-left:0;
  margin-bottom:0;
  list-style:none
}
.social-icons li
{
  display:inline-block;
  margin-bottom:4px
}
.social-icons li.title
{
  margin-right:15px;
  text-transform:uppercase;
  color:#96a2b2;
  font-weight:700;
  font-size:13px
}
.social-icons a{
  background-color:#eceeef;
  color:#818a91;
  text-decoration: none;
  text-decoration-style: none;
  font-size:16px;
  display:inline-block;
  line-height:44px;
  width:44px;
  height:44px;
  text-align:center;
  margin-right:8px;
  border-radius:100%;
  -webkit-transition:all .2s linear;
  -o-transition:all .2s linear;
  transition:all .2s linear
}
.social-icons a:active,.social-icons a:focus,.social-icons a:hover
{
  color:#fff;
  background-color:#29aafe
}
.social-icons.size-sm a
{
  line-height:34px;
  height:34px;
  width:34px;
  font-size:14px
}
.face:hover
{
  background-color:#3b5998
}
.twit:hover
{
  background-color:#00aced
}
.insta:hover
{
  background-color:#a4b600
}

@media (max-width:767px)
{
  .social-icons li.title
  {
    display:block;
    margin-right:0;
    font-weight:600
  }
}
</style>