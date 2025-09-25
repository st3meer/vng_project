<template>
  <v-bottom-navigation
    fixed
    color="primary"
    class="mobile-bottom-nav"
  >
    <v-btn to="/home" value="home">
      <v-icon>fa-solid fa-house</v-icon>
    </v-btn>

    <v-btn to="/profile" value="profile">
      <v-icon>fa-solid fa-user</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup lang="js">
</script>

<style scoped>
.mobile-bottom-nav {
  z-index: 10;
  height: 56px; /* standard mobile bottom nav height */
}
</style>
