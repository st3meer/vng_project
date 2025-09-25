<script setup>
const owners = [
  {
    name: 'Robert Dudka',
    photo: './images/dudka.png',
    role: 'Co-Founder & CEO',
  },
  {
    name: 'Jegor Janusov',
    photo: './images/janusov.png',
    role: 'Co-Founder & CTO',
  }
]

const upgrades = [
  {
    title: 'Enhanced End-to-End Encryption',
    description: 'We are upgrading our encryption standards to safeguard all communications.'
  },
  {
    title: 'New Video Conferencing Features',
    description: 'Ongoing development of improved meeting controls and layouts.'
  },
  {
    title: 'Mobile App Improvements',
    description: 'Optimizing performance and UI for on-the-go collaboration.'
  }
]
</script>

<template>
  <v-container class="about-container">
    <h1 class="text-h4 mb-6">About Us</h1>

    <section class="owners-section mb-10">
      <h2 class="text-h5 mb-4">Meet the Owners</h2>
      <v-row>
        <v-col v-for="owner in owners" :key="owner.name" cols="12" sm="6" class="d-flex align-center mb-6">
          <v-avatar size="80" class="mr-4">
            <img :src="owner.photo" :alt="owner.name" />
          </v-avatar>
          <div>
            <h3 class="text-subtitle-1 mb-1">{{ owner.name }}</h3>
            <p class="text-body-2 opacity-70">{{ owner.role }}</p>
          </div>
        </v-col>
      </v-row>
    </section>

    <section class="safety-section mb-10">
      <h2 class="text-h5 mb-4">Our Commitment to Safety</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non turpis eu neque efficitur
        consequat. Donec a lacus vitae leo blandit bibendum. This platform is built with your privacy and safety
        as top priorities. Our talented team is continuously improving security to protect your communication.
      </p>
    </section>

    <section class="upgrades-section">
      <h2 class="text-h5 mb-4">What We're Working On</h2>
      <v-row dense>
        <v-col v-for="upgrade in upgrades" :key="upgrade.title" cols="12" sm="4">
          <v-card outlined elevation="1" class="pa-4">
            <h3 class="text-subtitle-1 mb-2">{{ upgrade.title }}</h3>
            <p class="text-body-2 opacity-75">{{ upgrade.description }}</p>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<style scoped>
.about-container {
  padding-bottom: 56px; /* Same as footer height to prevent overlap */
  padding-top: 48px;
}

.owners-section h2,
.safety-section h2,
.upgrades-section h2 {
  font-weight: 700;
}

.v-avatar img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
}

</style>
