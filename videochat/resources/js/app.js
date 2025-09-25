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

// Detect system theme
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

// Create Vuetify instance with FA + system theme
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: { fa },
  },
  theme: {
    defaultTheme: prefersDark ? 'dark' : 'light',
  },
})

const app = createApp(App)
  app.use(router)
  app.use(vuetify)
  app.mount('#app')
