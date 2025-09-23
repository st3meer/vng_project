import './bootstrap'
import { createApp } from 'vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.css'
import { aliases, fa } from 'vuetify/iconsets/fa'

// Root component
import App from './Pages/App.vue'

// Create Vuetify instance with FA as default icon set
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: { fa },
  },
})

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
