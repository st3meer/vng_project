<script setup lang="js">
import router from '../router'
import { useTheme } from 'vuetify'
import 'vuetify/styles'

// access Vuetify theme
const theme = useTheme()

// toggle function (new recommended way)
function toggleTheme() {
  if (theme.global.current.value.dark) {
    theme.change('light')
  } else {
    theme.change('dark')
  }
}
</script>

<template>
  <v-responsive class="border rounded" max-height="300">
    <v-app>
      <v-app-bar title="App bar">
        <v-btn icon @click="toggleTheme">
          <i v-if="theme.global.current.value.dark" class="fa-solid fa-sun"></i>
          <i v-else class="fa-solid fa-moon"></i>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer>
        <v-list>
          <v-list-item title="Navigation bar" />
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container>
          <router-view />
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>
