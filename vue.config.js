module.exports = {

  "transpileDependencies": [
    "vuetify",
    "vue-tel-input-vuetify"
  ],
  
  devServer: {
   proxy: 'http://164.90.219.137',
 
  
   //proxy: 'http://192.168.100.214:8000',

  },
 
  

  pluginOptions: {
    i18n: {
    
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
