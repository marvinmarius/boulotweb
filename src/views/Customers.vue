<template>
   <v-container fluid>
        <v-row >
            
  \
   
    <div>
        <ul  v-for="allcustomer in allcustomers"
    :key="allcustomer.id">
  
            <li>FullName : <span class="blue--text">{{allcustomer.first_name}}      {{allcustomer.last_name}}</span>
                 </li>
            
        </ul>
    </div>
        </v-row>
   </v-container>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name: 'Customers',

    computed:{
        ...mapState(['allcustomers'])
    }
    
}
</script>