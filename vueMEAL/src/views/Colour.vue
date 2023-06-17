<template>
  <v-color-picker v-model="selectedColor"></v-color-picker>

  <v-color-picker v-model="selectedColor" :swatches="['#ff0000', '#00ff00', '#0000ff']"></v-color-picker>
</template>

<script>
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

export default {
  data() {
    return {
      selectedColor: '#ffffff' // set default color
    }
  }
}
</script>