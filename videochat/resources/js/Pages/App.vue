<script setup lang="ts">
import router from '../router';
import bottomnav from '../components/BottomNav.vue';
</script>


<template>
  <v-responsive class="border rounded" max-height="300">
    <v-app>
      <v-app-bar title="drozva online communications"></v-app-bar>
      <v-main>
        <v-container>
          <router-view/>
          <bottomnav/>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>