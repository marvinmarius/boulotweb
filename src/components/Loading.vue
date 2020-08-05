<template>
        <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular
        indeterminate
        :size="150"
        :width="8"
        color="green">
      </v-progress-circular>
    </div>
  </v-container>
</template>
<script>
export default {
    data(){
        return{
            loading: 'true',
        }
    }
}
</script>