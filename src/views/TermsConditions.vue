<template >
<v-parallax
height="100%"
class="mt-n6"
    dark
    src="../assets/bg black.jpg"
  >
    <v-container >
    
        <v-row >
        <v-col cols="12">
          <div class="flex justify-center mt-8"
          >
         
         <h1 class="categoriesss ">  {{$t('terms')}}</h1>
          </div>
        </v-col>
        </v-row>
      <div class="ma-8" >

   <v-col cols="12">
          <div class="flex justify-center "
          >
         
         <h2 class="categoriessss">Definitions:</h2>
          </div>
        </v-col>
        <p>
            

    
    <div class="justify-center align-center">
    
        <ol>
        <li >{{$t('1')}}</li>
        <li>{{$t('2')}} </li>
        <li>{{$t('3')}}</li>
        <li>{{$t('4')}}</li>
        <li>{{$t('five')}}</li>
        <li>{{$t('6')}}</li>
        <li> {{$t('seven')}}</li>
        <li>{{$t('7')}}</li>
        <li>{{$t('eight')}}</li>
        <li>{{$t('nine')}}</li>
        <li>{{$t('ten')}}</li>
        <li>{{$t('11')}}</li>
        <li>{{$t('12')}} </li>
        <li>{{$t('13')}}</li>
        <li>{{$t('14')}}</li>
        <li>{{$t('15')}}</li>
        <li>{{$t('16')}}</li>
        <li>{{$t('25')}}</li>
        <li>{{$t('17')}}</li>
        
        <li>{{$t('18')}}</li>
        <li>{{$t('19')}}</li>
        <li> {{$t('20')}}</li>
        <li>{{$t('21')}}</li>
        <li>{{$t('22')}}</li>
        <li>{{$t('23')}}</li>
        <li> {{$t('24')}}</li>
        <li><span><h3 >{{$t('Statement of Work')}}</h3></span> {{$t('statement')}} </li>
   
        </ol>
    </div>
      

       
    </div>

     
    </v-container>
</v-parallax>
</template>
<style scoped>
ol li{
    margin-top: 10px;
}

.categoriesss{
  text-align: center;
  text-justify: auto;
  
 
    font-weight: 600;
    font-size: 40px
}
.categoriessss{
  text-align: center;
  text-justify: auto;
  

   
}
</style>