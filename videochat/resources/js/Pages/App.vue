<script setup lang="js">
import { computed } from 'vue'
import { useTheme, useDisplay } from 'vuetify'
import Bottomnav from '../Components/Bottomnav.vue'
import 'vuetify/styles'

const theme = useTheme()
const display = useDisplay()
const isMobile = computed(() => display.smAndDown.value)

function toggleTheme() {
  theme.global.current.value.dark ? theme.change('light') : theme.change('dark')
}

function handleLogin() {
  alert('Login functionality coming soon!')
}
</script>

<template>
  <v-app>
    <div class="page-wrapper">
      <v-app-bar flat>
        <v-container class="navbar d-flex align-center justify-space-between">
          <div class="logo d-flex align-center">
            <span class="font-weight-bold text-h6">Drozva</span>
          </div>
          <div class="nav-links d-none d-md-flex align-center">
            <v-btn variant="text" to="/about" router>
              About Us
            </v-btn>
          </div>
          <div class="right-side d-flex align-center">
            <v-btn color="primary" rounded @click="handleLogin">
              <v-icon start>fa-solid fa-right-to-bracket</v-icon>
              Login
            </v-btn>
            <v-btn icon @click="toggleTheme">
              <v-icon>
                {{ theme.global.current.value.dark ? 'fa-solid fa-sun' : 'fa-solid fa-moon' }}
              </v-icon>
            </v-btn>
          </div>
        </v-container>
      </v-app-bar>

      <v-main>
        <v-container
          class="hero text-center"
          :style="isMobile ? 'padding-bottom: 72px;' : ''"
        >
          <h1 class="hero-title">
            Safe, Secure & Private Communication
          </h1>
          <p class="hero-subtitle">
            Drozva is built with safety first — chat, meet, and collaborate without worries.
          </p>
          <div class="hero-buttons d-flex justify-center flex-wrap">
            <v-btn color="primary" size="large" rounded>
              <v-icon start>fa-solid fa-phone</v-icon>
              JOIN A MEETING
            </v-btn>
            <v-btn variant="outlined" size="large" rounded>
              <v-icon start>fa-solid fa-shield-halved</v-icon>
              Learn About Safety
            </v-btn>
          </div>
          <v-img
            src="https://via.placeholder.com/900x400.png?text=Safe+Video+Chat+Illustration"
            class="hero-img"
            contain
          />
        </v-container>

        <!-- Router view renders current route component here -->
        <router-view />
      </v-main>
    </div>

    <v-footer
      class="footer"
      height="56"
      elevation="0"
      v-if="!isMobile"
    >
      <div class="footer-content d-flex align-center justify-center">
        <a href="#"><v-icon size="22">fa-brands fa-facebook</v-icon></a>
        <a href="#"><v-icon size="22">fa-brands fa-twitter</v-icon></a>
        <a href="#"><v-icon size="22">fa-brands fa-linkedin</v-icon></a>
        <a href="#"><v-icon size="22">fa-brands fa-instagram</v-icon></a>
        <span class="footer-divider"></span>
        <small class="footer-text">&copy; 2025 Drozva. All rights reserved.</small>
      </div>
    </v-footer>

    <Bottomnav v-if="isMobile" class="mobile-bottom-nav" />
  </v-app>
</template>

<style scoped>
.page-wrapper {
  min-height: 100vh;
  padding-bottom: 56px; /* space for fixed footer */
  box-sizing: border-box;
}

.footer {
  left: 0;
  right: 0;
  height: 56px;
  background-color: var(--v-theme-surface, #fff);
  border-top: 1px solid #eee;
  z-index: 1000;
}

.footer-content {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  gap: 18px;
  padding: 0 12px;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-divider {
  display: inline-block;
  background: #e0e0e0;
  height: 20px;
  width: 1px;
  margin: 0 16px;
}

.footer-text {
  opacity: 0.8;
  font-size: 0.97rem;
  font-weight: 400;
}

.navbar {
  padding-left: 16px;
  padding-right: 16px;
}

.logo {
  gap: 8px;
}

.nav-links {
  gap: 24px;
}

.right-side {
  gap: 8px;
}

.hero {
  padding-top: 64px;
  padding-bottom: 64px;
}

.hero-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 16px;
}

@media (min-width: 960px) {
  .hero-title {
    font-size: 3rem;
  }
}

.hero-subtitle {
  font-size: 1.125rem;
  margin-bottom: 32px;
}

.hero-buttons {
  gap: 16px;
  margin-bottom: 48px;
}

.hero-img {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

a {
  color: inherit;
  text-decoration: none;
}

.mobile-bottom-nav {
  z-index: 10;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
