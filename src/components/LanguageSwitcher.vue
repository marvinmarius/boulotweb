<template>
 <v-menu
      v-model="value"
      :disabled="disabled"
      :absolute="absolute"
      :open-on-hover="openOnHover"
      :close-on-click="closeOnClick"
      :close-on-content-click="closeOnContentClick"
      :offset-x="offsetX"
      :offset-y="offsetY"
      rounded
      
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        color="deep purple lighten-2"
          text
          v-bind="attrs"
          v-on="on"
        >
          <img :src="`/flag_${$i18n.locale}.svg`" alt="flag" class="flag1">
      <span class="ml-2 ">{{ $i18n.locale.toUpperCase() }}</span>
      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path></svg>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          @click.prevent="setLocale('fr')"
           @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent=""
            @keydown.tab.exact="hideDropdown"
            @keydown.esc.exact="hideDropdown"
        >
          <v-list-item-title class="lang">
              <img src="/flag_fr.svg" alt="french flag" class="flag">
            <span class="ml-2">French</span>
          </v-list-item-title>
        </v-list-item>
        <v-list-item
         @click.prevent="setLocale('en')"
           @keydown.up.exact.prevent=""
            @keydown.tab.exact="focusNext(false)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
          
        >
          <v-list-item-title class="lang" >
            <img src="/flag_en.svg" alt="english flag" class="flag">
            <span class="ml-2">English</span>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
</template>

<script>
  export default {

    methods:{
      toggleVisibility() {
      this.isVisible = !this.isVisible
    },
    hideDropdown() {
      this.isVisible = false
      this.focusedIndex = 0
    },
    startArrowKeys() {
      if (this.isVisible) {
        // this.$refs.account.focus()
        this.$refs.dropdown.children[0].children[0].focus()
      }
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusItem() {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus()
    },
      setLocale(locale) {
      this.$i18n.locale = locale
      this.$router.push({
        params: { lang: locale }
      })
      this.hideDropdown()
    }
    },
    data: () => ({
    disabled: false,
      absolute: false,
      openOnHover: false,
      value: false,
      closeOnClick: true,
      closeOnContentClick: true,
      offsetX: false,
      offsetY: true,
     
 
    }),
  }
</script>
<style scoped>
.flag{
  width: 25px
}
.flag1{
  width: 30px
}
.v-list-item-title:hover::before{
  color: brown
}
.lang:hover{
 
  color:  blueviolet;
 
  

}
</style>